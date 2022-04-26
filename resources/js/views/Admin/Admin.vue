<template>
<div class="wrapper">



  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <span class="brand-link">
      <img src="/images/logo-light.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Shopping app</span>
    </span>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
             <!-- dashboard -->
               <li class="nav-item">
                <router-link to="/dashboard" class="nav-link">
                  <i class="fa-solid fa-cart-plus"></i>
                  <p>
                     dashboard
                  </p>
                </router-link>
              </li>

               <!-- category -->
               <li class="nav-item">
                <router-link to="/category" class="nav-link">
                  <i class="fa-solid fa-folder-open"></i>
                  <p>
                    Gear Category
                  </p>
                </router-link>
              </li>

               <!-- product -->
               <li class="nav-item">
                <router-link to="/product" class="nav-link">
                  <i class="fa-brands fa-dropbox"></i>
                  <p>
                     Gear Product
                  </p>
                </router-link>
              </li>

               <!--  Add Product -->
               <li class="nav-item">
                <router-link to="/product/add" class="nav-link">
                 <i class="fa-solid fa-cart-plus"></i>
                  <p>
                    Add Product
                  </p>
                </router-link>
              </li>

               <!-- orders -->
               <li class="nav-item">
                <router-link to="/orders" class="nav-link">
                  <i class="fa-solid fa-gear"></i>
                  <p>
                    Gear orders
                  </p>
                </router-link>
              </li>

               <!-- users -->
               <li class="nav-item">
                <router-link to="/users" class="nav-link">
                 <i class="fa-solid fa-user-gear"></i> 
                  <p>
                    Gear Users
                  </p>
                </router-link>
              </li>

               <!-- Profile -->
               <li class="nav-item">
                <router-link to="/edit-profile" class="nav-link">
                <i class="fa-solid fa-user"></i>
                  <p>
                    Profile
                  </p>
                </router-link>
              </li>

               <!-- password -->
               <li class="nav-item">
                <router-link to="/edit-password" class="nav-link">
                <i class="fa-solid fa-lock"></i>
                  <p>
                     Password
                  </p>
                </router-link>
              </li>
              <!-- Logout -->
               <li class="nav-item">
                <button  class="nav-link" @click="logout" >
                <i class="fa-solid fa-right-from-bracket"></i>
                  <p>
                     Logout
                  </p>
                </button>
              </li>

        
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper iframe-mode bg-light p-5" style="min-height: 90vh;">
 <router-view/>
  </div>
  <footer>
    copyright
  </footer>

</div>

</template>

<script>
export default {
  methods:{
        logout: async function(){
              await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't logout",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: 'rgb(227 119 87)',
                    cancelButtonColor: 'rgb(29 173 86)  ',
                    confirmButtonText: 'Logout'
                    }).then((result) => {
                if (result.isConfirmed) {
                        this.$store.dispatch('logoutUser')
                        .then(re =>  this.$router.push('/login'))
                        .catch(err =>{
                            this.$helpers.showErrors(err)
                        } )
                    }
                })
        }
    }
}
</script>

<style>
@import url('/css/adminlte.min.css');
</style>