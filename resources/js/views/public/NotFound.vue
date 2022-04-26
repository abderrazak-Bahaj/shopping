<template>
    <div class="row ">
        <div class="offset-md-3 col-md-6  text-center">
        <img src="/images/logo.png" alt="Images" class="cls-img-error wow fadeInUp" data-wow-delay="0.4s">
		<h1 class="error-h1 wow fadeInRight" data-wow-delay="0.8s">4 <span>0</span> 4</h1>
		<h3 class="wow fadeInRight" data-wow-delay="1s">Oops! Page Not Found</h3>
		<p class="wow fadeInRight" data-wow-delay="1.2s">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
		<router-link to="/" class="btn btn-outline-secondary m-4 wow fadeInDown" data-wow-delay="1.4s">
            Return To Home Page
        </router-link>
	</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.error-h1{
    font-size: 9em;
    color:black;
}
.error-h1 span{
    color: red;
}
.cls-img-error{
    max-width: 15em;
    margin-top: -20;
}
</style>