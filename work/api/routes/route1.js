module.exports = function(app) {
  var commentsList = require('../controllers/comment_controller');
  var newsList = require('../controllers/news_controller');

  app.route('/news')
    .get(newsList.all_news)
    .post(newsList.create_new);

  app.route('/news/:newId')
    .get(newsList.single_news)
    .delete(newsList.delete_new_by_id);

  app.route('/news/:newId/comment')
    .post(commentsList.add_comment);

  app.route('/news/:newId/comments')
    .get(commentsList.get_all_comments_by_news_id);

  app.route('/news/:newId/comments/:commentId')
    .get(commentsList.get_comment_by_id);
};
