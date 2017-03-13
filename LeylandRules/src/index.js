'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function myRandomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayRules');
    },
    'LeylandRulesIntent': function () {
        this.emit('SayWhoWon')
    },
    'WhatAreYouIntent': function () {
        this.emit('SayWhatYouAre')
    },
    'WhoDidntIntent': function () {
        var random =  myRandomInt(1,3);
        if(random===1){
            this.emit(':tell', "You didn't, <p>you didn't!</p>");
        }   
        else {
            this.emit(':tell',"<p>Rhianna didn't</p><p>Mummy didn't</p><p>Nathan didn't</p>")
        } 
    },
    'GuessMyCardIntent': function(){
        this.emit(':tell','<p>it is</p>, give me a second<break time="1s"/>THE SIX OF DIAMONDS');
    },    
    'SayWhoWon': function () {
        this.emit(':tell', "Dad Deee wins, <p>dad deee wins!</p><break time='1s'/>You didn't, <p>you didn't!</p>");
    },    
    'SayWhatYouAre': function () {
        this.emit(':tell', 'You are a loser! <break time="1s"/>LOSER!');
    },    
    'SayRules': function () {
        this.emit(':tell', 'Please stick to Leyland rules only');
    },
    'LoveYouIntent': function(){
        this.emit(':tell',"Love you more Mick Mick<break time='1s'/>put your feet up, you have done more than enough for today")
    },
    'DrinkIntent': function(){
        this.emit(':tell',"I cannot do that yet honey, in the meantime get that Ginny of her arse and into the kitchen,<break time='1s'/> seriously what is she thinking making you wait like this")        
    },
    'ShutUpIntent' : function() {
        this.emit(':tell',"Sorry I cannot hear you properly, can someone please tell Anna to shut up for a second and repeat your question")        
    }
};