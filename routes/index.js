/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'User Directory', page: 'index'});
};