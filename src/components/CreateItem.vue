<template>
  <div>
    <h1>Add an Investment</h1>
      <div class="row">
        <div class="col-md-10"></div>
        <div class="col-md-2">
            <router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">Return to Items</router-link>
        </div>
      </div>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
              <label>Investment</label>
              <input type="text" class="form-control" v-model="item.name">
           </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Cost</label>
              <input type="text" class="form-control" v-model="item.price">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Notes (model info, serial number, etc.)</label>
              <input type="text" class="form-control" v-model="item.notes">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Date of Work</label>
              <input type="text" class="form-control" v-model="item.date">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Lifetime or Warranty Period (if applicable)</label>
              <input type="text" class="form-control" v-model="item.lifetime">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Contractor (if applicable)</label>
              <input type="text" class="form-control" v-model="item.contractor">
            </div>
          </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary">Add Item</button>
        </div>
    </form>
  </div>
</template>
<style>
 div {background-color: lightgray;} 

</style>
<script>
  export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
      addItem(){
        let uri = 'http://localhost:4000/items/add';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'DisplayItem'})
        })
    }
  }
}
</script>
