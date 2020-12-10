const Favorite = require("../model/favorite.model.js");
const errorResponse = require("../util/response_error.js");

exports.create = async (req, res) => {
    const favorite = new Favorite({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
    });
    try {
        data = await Favorite.create(favorite);
        favorite.id = data.insertId;
        res.send(favorite);
    } catch (error) {
        errorResponse(res, error, "creating Favorite");
    }
};

exports.remove = async (req, res) => {
    const favorite = new Favorite({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
    });
    try {
        data = await Favorite.remove(favorite);
        res.send({});
    } catch (error) {
        errorResponse(res, error, "remove Favorite");
    }
};

exports.removeAll = async (req, res) => {
    try {
        data = await Favorite.removeAll();
        res.send({});
    } catch (error) {
        errorResponse(res, error, "remove Favorite");
    }
};

exports.isFavorite = async (req, res) => {
    const favorite = new Favorite({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
    });
    try {
        data = await Favorite.getByUserIdAndMealId(favorite);
        let result = {
            isFavorite: false
        }
        if (data.length > 0) {
            result.isFavorite = true
        }
        res.send(result);
    } catch (error) {
        errorResponse(res, error, "isFavorite");
    }
};