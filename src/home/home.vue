<template>
    <div class="container">
        <div class="row" style="border-bottom: 5px solid black;">
          <div class="col-md-6">
            <h1 style="text-align:left;float:left;"> <span style="font-family:Script">Home </span><span style="font-family:Courier; font-size:70%;"> FAX</span> </h1>
            <br><h4  style="text-align:right;float:right;color:gray;vertical-align: text-bottom;">The CarFax for your home</h4>
          </div>
          <div class="col-md-4">
            </div>
          <div class="col-md-2">
            <br><!-- </br> -->
            <router-link :to="{ name: 'RegisterLogin' }" class="btn btn-primary" width="300%">Register / Login</router-link>
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
 div {background-color: lightgray;} 
body {background-color: lightgray;} 
</style>

<script>
    export default{
    }
</script>
