<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Requests\StoreFavoriteRequest;
use App\Http\Requests\UpdateFavoriteRequest;
use App\Http\Resources\FavoriteResource;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
     /**
     * Method to Get All Favorite 
     *
     * @return array
     */
    public function index()
    {
        //$this->authorize('view');
        $favorite = Favorite::join('products', 'products.id', '=', 'favorites.product_id')
                ->where('favorites.user_id', Auth::user()->id)
                ->get(['favorites.*','products.p_name','products.p_price','products.p_image_1','products.p_color']);
        return FavoriteResource::collection($favorite);
    }
     /**
     * Method to Add Favorite 
     *
     * @return array
     */
    public function store(StoreFavoriteRequest $request)
    {
        //$this->authorize('create');
        $favorite = new Favorite();
        $favorite->product_id = $request->product_id;
        $favorite->user_id = Auth::user()->id;
        $favorite->save();
        $favereturn =  $favorite = Favorite::join('products', 'products.id', '=', 'favorites.product_id')
                                        ->where('favorites.id', $favorite->id)
                                        ->select(['favorites.*','products.p_name','products.p_price','products.p_image_1','products.p_color'])
                                        ->first();
        return new FavoriteResource($favereturn);
    }

    /**
     * Method to Delete Favorite 
     *
     * @return array
     */
    public function destroy(Favorite $favorite)
    {
        //$this->authorize('delete');
        if($favorite->user_id != Auth::user()->id)
            return response("Unauthorized",401);
         $favorite->delete();
         return response(null,204);
    }
}
