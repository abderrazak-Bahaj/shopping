<?php

namespace App\Policies;

use App\Models\Favorite;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FavoritePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Favorite $favorite)
    {
        return $user->id == $favorite->user_id ;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Favorite $favorite)
    {
        return $user->id == $favorite->user_id ;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Favorite $favorite)
    {
        return $user->id == $favorite->user_id ;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Favorite $favorite)
    {
        return $user->isAdmin == 1;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Favorite  $favorite
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Favorite $favorite)
    {
        return $user->isAdmin == 1;
    }
}
