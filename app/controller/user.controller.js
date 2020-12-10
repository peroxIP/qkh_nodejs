const User = require("../model/user.model.js");
const errorResponse = require("../util/response_error.js");

// Create and Save a new User
exports.create = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    try {
        data = await User.create(user);
        user.id = data.insertId;
        res.send(user);
    } catch (error) {
        errorResponse(res, error, "creating User");
        return;
    }
};

exports.removeAll = async (_req, res) => {
    try {
        data = await User.removeAll();
        res.send({});
    } catch (error) {
        errorResponse(res, error, "creating User");
        return;
    }
};

// Login existing user
exports.login = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    try {
        data = await User.login(user);
        if (data.length > 0) {
            user.id = data.insertId;
            res.send(user);
        }
        else {
            throw Error("User not found")
        }
    } catch (error) {
        errorResponse(res, error, "User login")
    }
}


exports.getAll = async (_req, res) => {
    let result = [];
    try {
        data = await User.getAll();

        data.forEach(element => {
            p = new User({
                id: element.USERID,
                username: element.USERNAME,
                password: element.USERPASSWORD,
            });
            result.push(p);
        });
        res.send(result);
    } catch (error) {
        errorResponse(res, error, "getting all users")
    }
}


exports.getById = async (req, res) => {
    try {
        data = await User.getById(req.params.userid);
        if (data.length > 0) {
            const element = data[0]
            p = new User({
                id: element.USERID,
                username: element.USERNAME,
                password: element.USERPASSWORD,
            });
            res.send(p);
        }
        else {
            throw Error("User not found")
        }
    } catch (error) {
        errorResponse(res, error, "getting user by id")
    }
}

