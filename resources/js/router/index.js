import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
Vue.use(VueRouter);

//#region Function Middleware Router
async function redirectIfAuth(to, from, next) {
  (store.getters['userHasAuth']) ? next('/') : next()
}
async function redirectIfNotAuth(to, from, next) {
  if (store.getters['userHasAuth']) {
    if (store.getters['EmailIsVerified']) { 
          next() 
       }
    /// if is not verify
    else {
      let user = store.getters['userInfo']
      let token = store.getters['userToken']
      next({ name: 'EmailResend', params: { token } })
    }
  }
  else
    next('/login')
}
async function redirectIfNotAdmin(to, from, next) {
  (store.getters['userIsAdmin']) ? next() : next('/')
}
async function redirectIfAdmin(to, from, next) {
  (store.getters['userIsAdmin']) ? next('/dashboard'):next()  
}

//#endregion
const routes = [
  // Access for Public
  //#region NAVBAR ROUTE
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/public/Home.vue"),
    beforeEnter: redirectIfAdmin
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../views/public/About.vue"),
    beforeEnter: redirectIfAdmin
  },
  {
    path: '/shope',
    name: 'Shope',
    component: () => import("../views/public/Shope.vue"),
    beforeEnter: redirectIfAdmin
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../views/public/Contact.vue"),
    beforeEnter: redirectIfAdmin
  },
  {
    path: '/shope/:id',
    name: 'ShopeSingle',
    component: () => import("../views/public/Details.vue"),
  },
  {
    path: '/shope/category/:id',
    name: 'CategoryList',
    component: () => import("../views/public/ShopeCategory.vue"),
    beforeEnter: redirectIfAdmin
  },
  {
    path: "*",
    component: () => import("../views/public/NotFound.vue"),
  },
  //#endregion

  //#region USER ROUTE

  //For Unauthenticated Users

  {
    path: '/register',
    name: 'Register',
    component: () => import("../views/user/Register.vue"),
    beforeEnter: redirectIfAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/user/Login.vue'),
    beforeEnter: redirectIfAuth
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../views/user/ResetPassword.vue'),
    beforeEnter: redirectIfAuth
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/user/ForgotPassword.vue'),
    beforeEnter: redirectIfAuth
  },
  /**
   *  For authenticated Users
   */
  {
    path: '/email/verify/:id/:token',
    name: 'EmailVerify',
    component: () => import("../views/user/EmailVerify.vue"),
    beforeEnter: redirectIfAuth
  },
  {
    path: '/email/resend/:token',
    name: 'EmailResend',
    component: () => import("../views/user/EmailResend.vue"),
    beforeEnter: redirectIfAuth
  },
  //#endregion

  //#region  author

  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import("../views/user/Favorite.vue"),
    beforeEnter: redirectIfNotAuth
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("../views/user/Cart.vue"),
    beforeEnter: redirectIfNotAuth
  },


  //#endregion

 //#region For Admin
  {
    path:'/',
    name:'admin',
    component:()=> import('../views/Admin/Admin.vue'),
    beforeEnter: redirectIfNotAdmin,
    children:[
      {
        path: '/edit-password',
        name: 'AdminEditPassword',
        component: () => import('../views/user/EditPassword.vue'),
      },
      {
        path: '/edit-profile',
        name: 'AdminProfile',
        component: () => import('../views/user/Profile.vue'),
      },

      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import("../views/Admin/Dashboard.vue"),
        
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import("../views/Admin/Category.vue"),
      },
      {
        path: '/orders',
        name: 'Orders',
        component: () => import("../views/Admin/GreyOrders.vue"),
      },
      {
        path: '/users',
        name: 'UserGrey',
        component: () => import("../views/Admin/ListUser.vue"),
      },
      {
        path: '/product/add',
        name: 'AddProduct',
        component: () => import("../views/Admin/ProductAdd.vue"),
      },
      {
        path: '/product/edit/:id',
        name: 'EditProduct',
        component: () => import("../views/Admin/ProductEdit.vue"),
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import("../views/Admin/Product.vue"),
      },
      
    ]
  }
//#endregion
  ,
  {
    path: '/',
    component: () => import('../views/Setting.vue'),
    beforeEnter: redirectIfNotAuth,
    children: [
      
      //#region For User
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/user/Profile.vue'),
        beforeEnter: redirectIfAdmin
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import("../views/user/Order.vue"),
        beforeEnter: redirectIfAdmin
      },
      {
        path: '/card',
        name: 'Card',
        component: () => import("../views/user/Card.vue"),
        beforeEnter: redirectIfAdmin
      },
      {
        path: '/editpassword',
        name: 'EditPassword',
        component: () => import('../views/user/EditPassword.vue'),
        beforeEnter: redirectIfAdmin
      },
      //#endregion
    ]
  },

];
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
export default router;