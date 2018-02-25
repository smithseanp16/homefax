<template>
    <div>
        <div class="row">
          <div class="col-md-10">
            <router-link :to="{ name: 'HomeDetails' }">
                <iframe
                width="600"
                height="450"
                frameborder="0" style="border:0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSGCyImjskFsIjfikn-UYVsXFeB09DAO0
                &q=Fairmont+Empress,Victoria+BC
                &attribution_source=Google+Maps+Embed+API
                &attribution_web_url=http://www.fairmont.com/empress-victoria/
                &attribution_ios_deep_link_id=comgooglemaps://?daddr=Fairmont+Empress,+Victoria,+BC">
                </iframe>
            </router-link>
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
