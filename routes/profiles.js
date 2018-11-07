var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('', ['']);

router.get('/profiles', function(req, res, next){
	db.test.find(function(err, test){
		if (err){
			res.send(err);
		}
		res.json(test);


	});
});

router.get('/profiles/:limit/:skip', function(req, res, next){
	db.test.find({}).limit(parseInt(req.params.limit)).skip(parseInt(req.params.skip), function(err, test){
		if (err){
			res.send(err);
		}
		res.json(test);


	});
});


//Get Single Profile by id
router.get('/profile_id/:id', function(req, res, next){
	db.test.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, test){
		if (err){
			res.send(err);
		}
		res.json(test);

	});
});

//Get Single Profile by username

router.get('/username/:username', function(req, res, next){
	db.test.findOne({username: req.params.username}, function(err, test){
		if (err){
			res.send(err);
		}
		res.json(test);

	});
});

router.put('/profile_id/:id', function(req, res, next){
    var profile = req.body;
    var updProfile = {};
    updProfile.isBot = profile.isBot;
    
    if(!updProfile){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.test.update({_id: mongojs.ObjectId(req.params.id)}, {$set: updProfile}, function(err, profile){
        if(err){
            res.send(err);
        }
        res.json(profile);
    });
    }
});



module.exports = router;