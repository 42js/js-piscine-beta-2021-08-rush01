var express = require('express');
const router  = express.Router();
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require ('../middlewares/authMiddlewares')


//안증 페이지로 전달
router.get('/', passport.authenticate('42')); 

//인증하면 인증코드를 콜백유알엘로 받음
router.get('/authResult',
    passport.authenticate('42',
    {failureRedirect: '/login/fail'}),
    (req, res)=>{
        const name = req.user.username;
        const profileUrl = req.user.profileUrl;
        const email = req.user.emails[0].value;
        console.log(name, profileUrl, email);
        res.status(200).json({
            message : 'Login Success',
            data : {
                name : name,
                profileUrl : profileUrl,
                email : email
            }
        });
    }
)

router.get('/test',isLoggedIn,(req,res)=>{
    res.json(123);
})

module.exports = router;