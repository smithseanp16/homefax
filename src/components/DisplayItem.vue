<template>
    <div>
        <div class="row">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-8">
                    </div>
                    <div class="col-md-4">
                        <br>  
                        <router-link :to="{ name: 'HomeDetails' }" class="btn btn-primary">Explore the details of this home</router-link>
                    </div>
                </div>
                    <div class="row">
                    <br>
                    <iframe
                        width="100%"
                        height="400"
                        frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSGCyImjskFsIjfikn-UYVsXFeB09DAO0
                        &q=25,Oakland,Street,Newton,MA">
                    </iframe>
                </div>
            </div>
            <div class="col-md-1">
            </div>
            <div class="col-md-4">
                <br><br>
                <h4 style="text-align:center">HomeFax is a trusted information source to professionals and homeowners</h4>
                <br>
                <p>Users can use to view and record investments made to your home and view investments made by homeowners to evaluate a property.</p>
                <br>
                <p><b>SELLERS</b> are able to use their investment histry clearly communicate the value and improvements made to their home.</p>
                <p><b>BUYERS</b> are able to accurate estimate improvements and maintenace for their potential property with a history of investment (or under investment) in a property.</p>
                <p><b>REAL ESTATE PROFESSIONALS</b> can dutifully inform their clients of property history, leverage HomeFax's properietary data sets to bolster sales stratgies and develop a new channel to continue work on a property.</p>
            </div>
        </div>
    </div>
</template>
<style>
 div {background-color: lightgray;} 

</style>
<script>
    export default {
    }
</script>
