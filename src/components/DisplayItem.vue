<template>
    <div>
        <div class="row">
            <div class="col-md-10">
            <div class="row">
                <iframe
                    width="600"
                    height="450"
                    frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSGCyImjskFsIjfikn-UYVsXFeB09DAO0
                    &q=25,Oakland,Street,Newton,MA">
                </iframe>
            </div>
            <div class="row">
                <router-link :to="{ name: 'HomeDetails' }" class="btn btn-primary">Explore Home Details</router-link>
            </div>
            </div>
            <div class="col-md-2">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>
