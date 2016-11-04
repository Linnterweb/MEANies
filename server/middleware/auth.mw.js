exports.isLoggedIn = function(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    };
};

exports.isAdmin = function(req, res, next) {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossOne = function(req, res, next) {
    if (req.user.boss_progress === 3) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossTwo = function(req, res, next) {
    if (req.user.boss_progress === 6) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossThree = function(req, res, next) {
    if (req.user.boss_progress === 9) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossFour = function(req, res, next) {
    if (req.user.boss_progress === 12) {
        next();
    } else {
        res.sendStatus(401);
    }
};

exports.bossFive = function(req, res, next) {
    if (req.user.boss_progress === 15) {
        next ();
    } else {
        res.sendStatus(401);
    }
};