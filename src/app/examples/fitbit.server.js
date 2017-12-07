const express = require('express')
const app = express()
const rp = require('request-promise');

var FitbitClient = require('fitbit-client-oauth2');

var client = new FitbitClient('22CGY6', '3e94747028c020bece22aa395baac816');
var redirect_uri = 'http://localhost:3000/oauth_callback';
var scope =  [ 'activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight' ];

var apiToken;

app.get('/', (req, res) => {
    var authorization_uri = client.getAuthorizationUrl(redirect_uri, scope);
    
    res.redirect(authorization_uri);
})

app.get('/oauth_callback', (req, res) => {
    var code = req.query.code;
    
    client.getToken(code, redirect_uri)
        .then(function(token) {

            // ... save your token on db or session... 
            apiToken = token;
            
            // then redirect
            res.redirect(302, '/activity');

        })
        .catch(function(err) {
            // something went wrong.
            res.send(500, err);
        
        });
});

app.get('/activity', (req, res) => {
    var options = {
        uri: 'https://api.fitbit.com/1/user/-/activities/date/2017-12-07.json',
        headers: {
            Authorization: 'Bearer ' + apiToken
        },
        json: true // Automatically parses the JSON string in the response
    };
     
    rp(options)
        .then(function (repos) {
            res.send(repos);
        })
        .catch(function (err) {
            // API call failed...
            res.send(500);
        });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))