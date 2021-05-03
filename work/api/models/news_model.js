var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = mongoose.model("Comment");

var NewsSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  content: {
    type: String,
    required: 'Content is required'
  },
  short_description: {
    type: String,
    required: 'Short description is required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  comments: [Comment.schema]
});

module.exports = mongoose.model('News', NewsSchema);
