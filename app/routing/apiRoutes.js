var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        var surveyData = req.body;
        var matchData = match(surveyData);
        res.json(matchData);
    });

    app.post("/api/clear", function() {
        friendsData = [];
    });

    function match(surveyData) {
        var matchData = {};
        var prevTotal = 0;
        var total = 0;
        for (var i = 0; i < friendsData.length; i++) {

            console.log("-------------------------------------------------");
            console.log("friendsData[" + i + "] = " + friendsData[i].name);

            total = 0;
            for (var j = 0; j < 10; j++) {
                console.log("surveyData.scores[" + j + "]=" + surveyData.scores[j] + "; friendsData[" + i + "].scores[" + j + "]=" + friendsData[i].scores[j]);
                if (surveyData.scores[j] == friendsData[i].scores[j]) {
                    total = total + 1
                }
            }
            console.log(friendsData[i].name + " TOTAL = " + total + "/10 matches");
            if (prevTotal < total) {
                matchData = friendsData[i];
                prevTotal = total;
            }
        }
        //matchData = { "name": "someone", "photo": "somephoto" };
        return matchData;
    }

};