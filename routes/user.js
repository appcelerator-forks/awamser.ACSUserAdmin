/*
 * GET users listing.
 */
var config = require('easy-config');
var acs = require('acs-node');

var sdk = acs.createCocoafish(config.oauth.consumer, config.oauth.secret);

exports.index = function (req, res) {
    res.render('user', { title: 'List all Users', page: 'users' });
}

exports.list = function (req, res) {
    var data = {page: 1, per_page: 100};

    sdk.sendRequest('users/query.json', 'GET', data, function (data) {
        if (data) {
            if (data.meta) {
                var meta = data.meta;
                if (meta.status == 'ok' && meta.code == '200' && meta.method_name == 'queryUsers') {
                    // Load Data
                    var users = data.response;
                    res.send(users);
                } else if (meta.status == 'fail') {
                    console.log(JSON.stringify(data, null, 2));
                }
            }
        }
    });
};