<template>
    <div>
        <div class="row">
            <div class="col-xs-6">
            <br>
            <h2>Home Information</h2>
            <table width="50%" class="table">
                <tbody>
                    <tr>
                        <td style="border:none;">Address</td>
                        <td style="border:none;">25 Oakland Street Newton, MA 02458</td>
                    </tr>
                    <tr>
                        <td style="border:none;">Last Sale Price</td>
                        <td style="border:none;">$550,000 USD</td>
                    </tr>
                    <tr>
                        <td style="border:none;">Last Sale Date</td>
                        <td style="border:none;">May 23, 2004</td>
                    </tr>
                    <tr>
                        <td style="border:none;">Previous Year Tax Assessment</td>
                        <td style="border:none;">570,000 USD</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h2>Investment History</h2>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <!-- <td>ID</td> -->
                            <td>Investment</td>
                            <td>Cost</td>
                            <td>Notes</td>
                            <td>Date</td>
                            <td>Lifetime or Warranty Period</td>
                            <td>Contractor</td>
                            <td>Validated</td>
                            <td>Actions</td>
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