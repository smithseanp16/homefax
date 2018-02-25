var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  notes: {
    type: String
  },
  date: {
    type: String
  },
  lifetime: {
    type: Number
  },
  contractor: {
    type: String
  }
},{
	collection: 'items'
});

module.exports = mongoose.model('Item', Item);
