<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use App\Models\Card;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$this->authorize('view');
        if(Auth::user()->isAdmin)
        {
            $orders = Order::join('products', 'products.id', '=', 'orders.product_id')
            ->select(['orders.*','products.p_name','products.p_price','products.p_image_1'])
            ->orderBy('orders.created_at','DESC')
            ->paginate(10);
        }
        else{
            $orders = Order::join('products', 'products.id', '=', 'orders.product_id')
                ->where('orders.user_id',Auth::user()->id)
                ->select(['orders.*','products.p_name','products.p_price','products.p_image_1'])
                ->orderBy('orders.created_at','DESC')
                ->paginate(10);
        }

        return OrderResource::collection($orders); 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function create(UpdateOrderRequest $req)
    {
        //$this->authorize('create');
        $card = Card::find($req->card_id);
        if($card->user_id != Auth::user()->id){
            return response("Error set Card card",401);
        }
        $product = Product::find($req->product_id);
        $totalPrice = $req->quantity * $product->p_price;
        if($totalPrice > $card->card_sold ){
            return response("Your balance is insufficient",401);
        }
        $card->card_sold -= $totalPrice;
        $card->save();
        $newOrder = new Order();
        $newOrder->product_id = $req->product_id;
        $newOrder->user_id = Auth::user()->id;
        $newOrder->card_id = $req->card_id;
        $newOrder->price_sale = $totalPrice;
        $newOrder->State = 'in delivery';
        $newOrder->quantity_product = $req->quantity;
        $newOrder->save();
        return new OrderResource($newOrder);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $req)
    {
        //$this->authorize('create');
        $carts = Cart::join('products', 'products.id', '=', 'carts.product_id')
            ->where('carts.user_id',Auth::user()->id)
            ->get(['carts.product_id','carts.quantity','products.p_price']);
        $total = 0;
        foreach ($carts as $cart ) {
            $total += $cart->p_price *$cart->quantity;
        }
        $card = Card::find($req->card_id);

        if(!isset($card) ){
            return response("pleas set a card",401);
        }
        if($total > $card->card_sold ){
            return response("Your balance is insufficient",401);
        }
        $card->card_sold -= $total;
        $card->save();
        foreach ($carts as $cart ) {
            $order = new Order();
            $order->user_id = Auth::user()->id;
            $order->product_id = $cart->product_id;
            $order->State = 'in delivery';
            $order->card_id =$card->id;
            $order->quantity_product = $cart->quantity;
            $order->price_sale = $cart->p_price *$cart->quantity;
            $order->save();
        }
        Cart::where('user_id','=',Auth::user()->id)->delete();
        return OrderResource::collection(Order::where('user_id','=',Auth::user()->id)->get());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //$this->authorize('delete');
        if($order->user_id != Auth::user()->id)
            return response("Unauthorized",401);
        $order->delete();
        return response(null,204);
    }
    //State
    public function statistic()
    {
        if(!Auth::user()->isAdmin){
            return response('Unauthorized',401);
        }
        $orders = Order::groupBy('State')->selectRaw('count(*) as Count,sum(price_sale) as price,State')->get();
        return $orders;
    }

    //list order in delivery
    public function list()
    {
        if(!Auth::user()->isAdmin){
            return response('Unauthorized',401);
        }
        $orders = Order::join('products', 'products.id', '=', 'orders.product_id')
        ->join('users', 'users.id', '=', 'orders.user_id')
        ->where('State','LIKE','in delivery')
        ->select(['orders.*','users.first_name','users.last_name','products.p_name','products.p_price','products.p_image_1'])
        ->orderBy('orders.created_at')->get();
        return OrderResource::collection($orders);
    }

    //action to chang state order
    public function action(Order $order,Request $req)
    {
        if(!Auth::user()->isAdmin){
            return response('Unauthorized',401);
        }
        if($req->State == "reversion"){
            $card = Card::find($order->card_id);
            $card->card_sold += $order->price_sale;
            $card->save();
        }
        $order->State =  $req->State;
        $order->save();
        return new OrderResource($order);
    }
}
