const path = require('path');

module.exports = function(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('/app/static/frontend.js', function(req, res) {
        res.sendFile(path.join(__dirname, '../static/frontend.js'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};
