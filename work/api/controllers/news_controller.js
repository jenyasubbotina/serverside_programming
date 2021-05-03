var mongoose = require('mongoose'),
  News = mongoose.model('News');

exports.all_news = function(req, res) {
  News.find({}, function(err, news) {
    if (err) {
      return res.status(400).json({
        status: 'error',
        error: 'Bad request!',
      });
    }
    else {
      return res.status(200).json(news);
    }
  });
};


exports.create_new = function(req, res) {
  var new_news = new News(req.body);
  new_news.save(function(err) {
    if (err) {
      return res.status(400).json({
        status: 'error',
        error: 'Bad request!',
      });
    }
    return res.status(200).json({ message: 'News added' });
  });
};


exports.single_news = function(req, res) {
  News.findById(req.params.newId, function(err, task) {
    console.log(req.params.newId);
    if (err) {
      return res.status(404).json({
        status: 'error',
        error: 'News with this ID Not Found',
      });
    }
    else {
      return res.status(200).json(task);
    }
  });
};


exports.delete_new_by_id = function(req, res) {
  News.findByIdAndDelete(req.params.newId, function(err) {
    if (err) {
      return res.status(404).json({
        status: 'error',
        error: 'News with this ID Not Found',
      });
    }
    else {
      return res.status(200).json({ message: 'This news successfully deleted' });
    }
  });
};
