<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
     /**
     * Method to Get All Category 
     *
     * @return array
     */
    public function index()
    {
        return  CategoryResource::collection(Category::all());
    }
   

     /**
     * Method to Add Category 
     *
     * @return array
     */
    public function store(StoreCategoryRequest $request)
    {
        //$this->authorize('create');
        $newCategory = new Category();
        $newCategory->cat_name =  $request->cat_name;
        $newName = time().'cate.'.$request->cat_img->getClientOriginalExtension();
        $path = $request->cat_img->storeAs('category-img',$newName);
        $newCategory->cat_img = $path;
        $newCategory->save();
        return new CategoryResource($newCategory);
    }

     /**
     * Method to Update Category 
     *
     * @return array
     */

    public function update(UpdateCategoryRequest $request,Category $category)
    {
        //$this->authorize('update',$category);
        if(isset($request->cat_img)){
            $newName = time().'cate.'.$request->cat_img->getClientOriginalExtension();
            $path = $request->cat_img->storeAs('category-img',$newName);
            $category->cat_img = $path;
        }
        if(isset($request->cat_name))
        {
            $category->cat_name = $request->cat_name;
        }
        $category->save();
        return new CategoryResource($category);
    }

     /**
     * Method to Delete Category
     *
     * @return array
     */

    public function destroy(Category $category)
    {
        //$this->authorize('delete',$category);
        $category->delete();
        return response(null,204);
    }

     /**** Method to Get  Product by Category ** @return array*/

     public function product(Category $category){
        return  ProductResource::collection($category->product()->paginate(15));
    }

   
}
