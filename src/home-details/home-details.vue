<template>
    <div>
        <div class="row">
            <div class="col-xs-6">
                <br>
                <h2>Home Information</h2>
                <table class="table">
                    <tbody>
                        <tr>
                            <td style="border:none;"><b>Address</b></td>
                            <td style="border:none;">25 Oakland Street Newton, MA 02458</td>
                        </tr>
                        <tr>
                            <td style="border:none;"><b>Last Sale Price</b></td>
                            <td style="border:none;">$550,000 USD</td>
                        </tr>
                        <tr>
                            <td style="border:none;"><b>Last Sale Date</b></td>
                            <td style="border:none;">May 23, 2004</td>
                        </tr>
                        <tr>
                            <td style="border:none;"><b>Previous Year Tax Assessment</b></td>
                            <td style="border:none;">570,000 USD</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xs-1">
            </div>
            <div class="col-xs-5">
                <div class="row">
                    <br><br><br>
                    <iframe
                        width="400"
                        height="200"
                        frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSGCyImjskFsIjfikn-UYVsXFeB09DAO0
                        &q=25,Oakland,Street,Newton,MA">
                    </iframe>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h2>Investment History</h2>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <!-- <td>ID</td> -->
                            <td><b>Investment</b></td>
                            <td><b>Cost</b></td>
                            <td><b>Notes</b></td>
                            <td><b>Date</b></td>
                            <td><b>Lifetime or Warranty Period</b></td>
                            <td><b>Contractor</b></td>
                            <td><b>Validated</b></td>
                            <td><b>Actions</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items">
                            <!-- <td>{{ item._id }}</td> -->
                            <td>{{ item.name }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.notes }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.lifetime }}</td>
                            <td>{{ item.contractor }}</td>
                            <td>YES!</td>
                            <td><router-link :to="{name: 'EditItem', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                            <td><button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Create Item</router-link>
        </div>
    </div>
</template>
<style>
.borderless td, {
border: none;
}
</style>
<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>