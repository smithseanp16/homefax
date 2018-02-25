<template>
    <div>
        <h1>Update Item</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>Investment</label>
                <input type="text" class="form-control" v-model="item.name">
            </div>

            <div class="form-group">
                <label name="product_price">Cost</label>
                <input type="text" class="form-control" v-model="item.price">
            </div>

            <div class="form-group">
              <label>Notes (model info, serial number, etc.)</label>
              <input type="text" class="form-control" v-model="item.notes">
            </div>

            <div class="form-group">
              <label>Date of Work</label>
              <input type="text" class="form-control" v-model="item.date">
            </div>

            <div class="form-group">
              <label>Lifetime or Warranty Period (if applicable)</label>
              <input type="text" class="form-control" v-model="item.lifetime">
            </div>
            
            <div class="form-group">
              <label>Contractor (if applicable)</label>
              <input type="text" class="form-control" v-model="item.contractor">
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'DisplayItem'});
                });
            }
        }
    }
</script>
