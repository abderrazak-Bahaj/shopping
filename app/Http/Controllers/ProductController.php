<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Method to Get All Product 
     *
     * @return array
     */

    public function index()
    {
        return  ProductResource::collection(Product::orderBy('created_at','DESC')->paginate(12));
    }


     /**
     * Method to Add Product 
     *
     * @return array
     */

    public function store(StoreProductRequest $request)
    {
        //$this->authorize('create');
        $newProduct = new Product();
        $newProduct->user_id = Auth::user()->id;
        $newProduct->category_id =$request->category_id;
        $newProduct->p_name =$request->p_name;
        $newProduct->p_slug =Str::slug($request->p_name);
        $newProduct->p_description = $request->p_description;
        $newProduct->p_color =$request->p_color;
        $newProduct->p_price =$request->p_price;

        //
        // rename Image 
        //

        if($request->hasFile('p_image_1'))
        {
            $p_image_1 = time().'p_image_1.'.$request->p_image_1->getClientOriginalExtension();
            $path = $request->p_image_1->storeAs('public/products-img',$p_image_1);
            $newProduct->p_image_1 = $path;
        }
        if($request->hasFile('p_image_2'))
        {
            $p_image_2 = time().'p_image_2.'.$request->p_image_2->getClientOriginalExtension();
            $path = $request->p_image_2->storeAs('public/products-img',$p_image_2);
            $newProduct->p_image_2 = $path;
        }
        if($request->hasFile('p_image_3'))
        {
            $p_image_3 = time().'p_image_3.'.$request->p_image_3->getClientOriginalExtension();
            $path = $request->p_image_3->storeAs('public/products-img',$p_image_3);
            $newProduct->p_image_3 = $path;
        }
        if($request->hasFile('p_image_4'))
        {
            $p_image_4 = time().'p_image_4.'.$request->p_image_4->getClientOriginalExtension();
            $path = $request->p_image_4->storeAs('public/products-img',$p_image_4);
            $newProduct->p_image_4 = $path;
        }
        $newProduct->save();
        return new ProductResource($newProduct);
    }

    
     /**
     * Method to Update Product 
     *
     * @return array
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
         //$this->authorize('update',$product);
        if($product->user_id != Auth::user()->id){
            return response("Unauthorized",401);
        }
        if(isset($request->category_id) && $product->category_id != $request->category_id){
            $product->category_id =$request->category_id;
        }
        if(isset($request->p_name) &&$product->p_name != $request->p_name){
            $product->p_name =$request->p_name;
            $product->p_slug =Str::slug($request->p_name);
        }
        
        if(isset($request->p_description) &&$product->p_description != $request->p_description){
            $product->p_description =$request->p_description;
        }
        
        if(isset($request->p_color) &&$product->p_color != $request->p_color){
            $product->p_color =$request->p_color;
        }
        
        if(isset($request->p_price) &&$product->p_price != $request->p_price){
            $product->p_price =$request->p_price;
        }
        //
        // rename Image 
        //
        if($request->hasFile('p_image_1') )
        {
            $p_image_1 = time().'p_image_1.'.$request->p_image_1->getClientOriginalExtension();
            $path = $request->p_image_1->storeAs('public/products-img',$p_image_1);
            $product->p_image_1 = $path;
        }
        if($request->hasFile('p_image_2'))
        {
            $p_image_2 = time().'p_image_2.'.$request->p_image_2->getClientOriginalExtension();
            $path = $request->p_image_2->storeAs('public/products-img',$p_image_2);
            $product->p_image_2 = $path;
        }
        if($request->hasFile('p_image_3'))
        {
            $p_image_3 = time().'p_image_3.'.$request->p_image_3->getClientOriginalExtension();
            $path = $request->p_image_3->storeAs('public/products-img',$p_image_3);
            $product->p_image_3 = $path;
        }
        if($request->hasFile('p_image_4'))
        {
            $p_image_4 = time().'p_image_4.'.$request->p_image_4->getClientOriginalExtension();
            $path = $request->p_image_4->storeAs('public/products-img',$p_image_4);
            $product->p_image_4 = $path;
        }
       
        $product->save();
        return new ProductResource($product);
    }


     /**
     * Method to Delete Product 
     *
     * @return array
     */

    public function destroy(Product $product)
    {
        //$this->authorize('delete');
        if(!Auth::user()->isAdmin)
            return response("Unauthorized",401);
        $product->delete();
        return response(null,204);
    }

     /**
     * Method to Search  Product by name 
     *
     * @return array
     */

    public function search($keywords)
    {   
        $products = ProductResource::collection(Product::search($keywords)->orderBy('created_at','DESC')->paginate(15));
        return $products;
    }
     /**
     * Method to Show  Product by name 
     *
     * @return array
     */

    public function show(Product $product)
    {   
        return new ProductResource($product);
    }

    /**
     * Method to Count Product
     *
     * @return array
     */

    public function statistic()
    {   
        $product = Product::count();
        return $product;
    }

}
