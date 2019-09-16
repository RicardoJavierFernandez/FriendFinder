var friendData = require('../data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        // res.json(friendData);  
        res.send(JSON.stringify(friendData)); 
    });

    app.post('/api/friends', function(req, res) {
        console.log('Name: ', req.body.name);
        console.log('Photo: ', req.body.photo);

        var match = '';

        for (let i = 0; i < friendData.length; i++)
        {
            var scoreTotal = 0;
            
            for (let j = 0; j < friendData[i].scores.length; j++)
            {
                scoreTotal += Math.abs(friendData[i].scores[j] - req.body.scores[j]);
                // work on algorithm to choose the min score.
                // console.log(friendData[i].scores[j] - req.body.scores[j]);
            } 

            console.log('Friend Name: ', friendData[i].name, 'versus User name:', req.body.name);
            console.log(scoreTotal);
        }

        res.send('Successfully received!');
    });
}