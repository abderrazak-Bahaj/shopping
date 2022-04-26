<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationController;
use Illuminate\Support\Facades\Route;

#region User Unauthenticated Route
Route::controller(UserController::class)->group(function(){
    Route::post('/user/register','Register');
    Route::post('/user/login','Login');
});

Route::post('/user/forgot-password',[ForgotPasswordController::class,'sendResetLinkEmail']);
Route::post('/user/reset-password',[ResetPasswordController::class,'reset']);


#endregion

#region Verification Routes
Route::controller(VerificationController::class)->group(function(){
    Route::get('/email/verify/{id}/{hash}','verify')->name('verification.verify');
    Route::post('/email/resend','resend')->name('verification.resend');
});
#endregion

#region Product Unauthenticated Route
Route::controller(ProductController::class)->group(function(){
    Route::get('/product/search/{keywords}','search');
    Route::get('/product/{product}','show');
    Route::get('/product','index');
});
#endregion

#region Category Unauthenticated Route
Route::controller(CategoryController::class)->group(function(){
    Route::get('/category','index');
    Route::get('/category/{category}','product');
});
#endregion

#region Rate Unauthenticated Route
Route::get('/rate',[RateController::class,'index']);
#endregion

Route::middleware('auth:api')->group(function(){

    
    #region User authenticated Route
    Route::controller(UserController::class)->group(function(){
        Route::get('/user','checkToken');
        Route::post('/logout','Logout');
        Route::put('/user/editpassword','EditPassword');
        Route::post('/user/update','Update');
        Route::get('/user/admin/statistic','statistic');
        Route::get('/users/admin','list');
        Route::delete('/users/admin/{user}','delete');
        Route::put('/users/admin/{user}','setAdmin');
    });
    #endregion

    #region Category authenticated Route
    Route::controller(CategoryController::class)->group(function(){
        Route::post('/category/{category}','update');
        Route::post('/category','store');
        Route::delete('/category/{category}','destroy');
        });
    #endregion

    #region Order authenticated Route
    Route::controller(OrderController::class)->group(function(){
        Route::get('/order','index');
        Route::post('/orders','store');
        Route::post('/order','create');
        Route::delete('/order/{order}','destroy');
        Route::get('/order/admin/list','list');
        Route::post('/orders/admin/{order}/update','action');
        Route::get('/order/admin/statistic','statistic');
    });
    #endregion
    
    #region Rate authenticated Route
    Route::controller(RateController::class)->group(function(){
        Route::post('/rate','store');
        Route::delete('/rate/{rate}','destroy');
    });
    #endregion
    
    #region Favorite authenticated Route
    Route::controller(FavoriteController::class)->group(function(){
        Route::get('/favorite','index');
        Route::post('/favorite','store');
        Route::delete('/favorite/{favorite}','destroy');
    });
    #endregion 

    #region Card authenticated Route
    Route::post('/card/add',[CardController::class,"store"]);
    Route::controller(CardController::class)->group(function(){
        Route::get('/card','index');
        Route::delete('/card/{card}','destroy');
    });
    #endregion

    #region Cart authenticated Route
    Route::controller(CartController::class)->group(function(){
        Route::get('/cart','index');
        Route::post('/cart','store');
        Route::put('/cart/{cart}','update');
        Route::delete('/cart/{cart}','destroy');
    });
    #endregion

    #region Product authenticated Route
    Route::controller(ProductController::class)->group(function(){
        //Route::post('/product//admin/update','update');
        Route::post('/product/update/{product}','update');
        Route::post('/product','store');
        Route::delete('/product/{product}','destroy');
        Route::get('/product/admin/statistic','statistic');
    });
    #endregion
   
});
