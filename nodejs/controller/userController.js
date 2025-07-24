const User = require('./../model/userShema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Error fetching users",
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: "Error fetching users",
        })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    try {
        const match = await bcrypt.compare(password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), "TOKEN_SECRET")
        if (match) {
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch (e) {
        console.log(e)
    }
}