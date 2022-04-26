<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;
use Laravel\Passport\Passport;
class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        /* 'App\Models\Category' => 'App\Policies\CategoryPolicy',
        'App\Models\Product' => 'App\Policies\ProductPolicy',
        'App\Models\Favorite' => 'App\Policies\FavoritePolicy',
        'App\Models\Cart' => 'App\Policies\CartPolicy',
        'App\Models\Card' => 'App\Policies\CardPolicy',
        'App\Models\Rate' => 'App\Policies\RatePolicy',
        'App\Models\Order' => 'App\Policies\OrderPolicy', */
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();
        VerifyEmail::toMailUsing(function($notifiable,$url){
            $CustomUrl = substr($url,0,strpos($url, '/api')) .substr($url,strpos($url, '/email'));
            return(new MailMessage)
            ->subject('verify Email Address')
            ->line('Click the button below to verify your email address.')
            ->action('verify Email Address',$CustomUrl);
        });
    }
}
