<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Http\Resources\CartResource;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{

    //Get Cart of User withe Product Info
    public function index()
    {
        //$this->authorize('view');
        $carts = Cart::join('products', 'products.id', '=', 'carts.product_id')
            ->where('carts.user_id',Auth::user()->id)
            ->get(['carts.*','products.p_name','products.p_price','products.p_image_1','products.p_color']);
        return CartResource::collection($carts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCartRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartRequest $request)
    {
        //$this->authorize('create');
        $newCart = new Cart();
        $newCart->product_id = $request->product_id;
        $newCart->quantity = $request->quantity;
        $newCart->user_id = Auth::user()->id;
        $newCart->save();
        $cartReturn = Cart::join('products', 'products.id', '=', 'carts.product_id')
            ->where('carts.id',$newCart->id)
            ->select(['carts.*','products.p_name','products.p_price','products.p_image_1','products.p_color'])
            ->first();
        return new CartResource($cartReturn);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCartRequest  $request
     * @param  \App\Models\cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        //$this->authorize('update',$cart);
        if($cart->user_id != Auth::user()->id)
            return response("Unauthenticated.",401);;
        $cart->update($request->only([
            'quantity'
        ]));
        $cartReturn = Cart::join('products', 'products.id', '=', 'carts.product_id')
            ->where('carts.id',$cart->id)
            ->select(['carts.*','products.p_name','products.p_price','products.p_image_1','products.p_color'])
            ->first();
        return new CartResource($cartReturn);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        //$this->authorize('delete');
        if($cart->user_id != Auth::user()->id)
            return response("Unauthorized",401);
        $cart->delete();
        return response(null,204);
    }
}
