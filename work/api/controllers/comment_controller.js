/* eslint-disable no-global-assign */
var mongoose = require('mongoose'),
  News = mongoose.model('News');
Comment = mongoose.model('Comment');


exports.add_comment = function (req, res) {
  News.findById(req.params.newId, function (err, data) {
    if (err || typeof data == 'undefined') {
      return res.status(400).json({
        status: 'error',
        error: 'Bad request',
      });
    } else {
      var commentModel = new Comment();
      commentModel = req.body;
      //commentModel.username = req.body.username;
      data.comments.push(commentModel);
      data.save(function (err) {
        if (err) {
          res.send(err);
          return res.status(404).json({
            status: 'error',
            error: 'News with this ID not found',
          });
        } else {
          return res.status(200).json({
            message: 'Comment added',
          });
        }
      })
    }
  })
};


exports.get_all_comments_by_news_id = function (req, res) {
  News.findById(req.params.newId, function (err, news) {
    if (err) {
      return res.status(404).json({
        status: 'error',
        error: 'Not found!',
      });
    }
    else {
      try {
        return res.status(200).json(news.comments);
      } catch(e) { 
        return res.status(404).json({
          comments: []
        });
       }
    }
  });
};

exports.get_comment_by_id = function (req, res) {
  News.findById(req.params.newId, function (err, news) {
    if (err) {
      return res.status(404).json({
        status: 'error',
        error: 'News with this ID not found',
      });
    }
    else {
      var comments = news.comments;
      for (var i = 0; i < comments.length; i++) {
        if (comments[i]._id == req.params.commentId) {
          return res.status(200).json(comments[i]);
        }
      }
      return res.status(404).json({
        status: 'error',
        error: 'Comment with this ID not found',
      });
    }
  });
};

exports.like_comment_by_id = function (req, res) {
  News.findById(req.params.newId, function (err, news) {
    if (err) {
      return res.status(404).json({
        status: 'error',
        error: 'News with this ID not found',
      });
    }
    else {
      var comments = news.comments;
      for (var i = 0; i < comments.length; i++) {
        if (comments[i]._id == req.params.commentId) {
          comments[i].liked = !comments[i].liked;
                news.save(function(err) {
                    if (err) {
                        return res.status(400).json(err);
                    } else {
                      return res.status(200);
                    }
                })
        }
      }
    }
  });
}
