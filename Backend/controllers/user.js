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