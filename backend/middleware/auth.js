const authCheck = (req, res, next) => {
    console.log(req.user);
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({
            authenticated: false,
            message: "user has not been authenticated",
        });
    }
};

module.exports = { authCheck };
