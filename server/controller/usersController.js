const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
            return res.json({ msg: "Username already exits." });
        }

        const emailCheck = await User.findOne({ email })
        if (emailCheck) {
            return res.json({ msg: "Email is already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });

    } catch (err) {
        next(err);
    }

}