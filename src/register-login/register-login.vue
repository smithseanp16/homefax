<template>
    <div>
      <div class="row">
        <div class="col-md-6">
          <h3>Sign Up for Free</h3>       
          <form action="/">
            <div class="top-row">
            <div class="form-group">
                <label> First Name<span class="req">*</span> </label><br>
                    <input type="text" autocomplete="off" />
              </div>
            <div class="form-group">
                <label>Last Name<span class="req">*</span></label><br>
                <input type="text" autocomplete="off"/>
              </div>
            </div>
            <div class="form-group">
              <label>Email Address<span class="req">*</span></label><br>
              <input type="text" autocomplete="off"/>
            </div>
            <div class="form-group">
              <label>Create Password<span class="req">*</span></label><br>
              <input type="password" autocomplete="off"/>
            </div>
            <div class="form-group">
              <label>Confirm Password<span class="req">*</span></label><br>
              <input type="password" autocomplete="off"/>
            </div>
            <button class="btn btn-primary">Register!</button>
            <button class="btn btn-primary">Register with LinkedIn!</button>
          </form>
          </div>     
          <div class="col-md-6">
            <h3>Welcome Back!</h3>
            <form action="/">
            <div class="form-group">
                <label>Email Address<span class="req">*</span></label><br>
                <input type="text" autocomplete="off"/>
              </div>       
            <div class="form-group">
                <label>Password<span class="req">*</span></label><br>
                <input type="password" autocomplete="off"/>
              </div>
              <p class="forgot"><a href="#">Forgot Password?</a></p>
              <button class="btn btn-primary">Submit</button>
              <button class="btn btn-primary">Login with LinkedIn</button>
            </form>          
          </div>
        </div>
      </div>
</template>

<style>
 div {background-color: lightgray;} 

</style>

<script>

    export default{
    }
</script>
