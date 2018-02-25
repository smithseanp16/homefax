<template>
    <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h1 style="text-align:left;float:left;">HomeFax </h1>
            <h3  style="text-align:right;float:right;color:gray;">CarFax for your home</h3>
          </div>
          <div class="col-md-2">
            <br><!-- </br> -->
            <router-link :to="{ name: 'RegisterLogin' }" class="btn btn-primary">Register / Login</router-link>
          </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>
    export default{
    }
</script>
