const User = require('../db/models/user')

exports.createUser = async (req, res) => {
    const {username, email, password } = req.body;
    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser) {
        return res.json({success: false, message: "This email is already in use, try sign-in"});
    } else {
        const user = await User({
           username, email, password
        });
        await user.save();
        res.json(user);
    }
}

exports.userSignIn = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if (!user) {
        return res.json({success: false, message: 'User not found!'});
    } else {
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.json({success: false, message: 'Email or  password does not match!'});
        } else {
            res.json({success: true, user: user});
        }
    }
}