const Rateing = require("../model/rateing.model.js");
const errorResponse = require("../util/response_error.js");

exports.create = async (req, res) => {
    const rateing = new Rateing({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
        rateing: req.body.rateing,
    });
    try {
        data = await Rateing.create(rateing);
        res.send(rateing);
    } catch (error) {
        errorResponse(res, error, "creating rateing");
    }
};

exports.update = async (req, res) => {
    const rateing = new Rateing({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
        rateing: req.body.rateing,
    });
    try {
        data = await Rateing.update(rateing);
        res.send(rateing);
    } catch (error) {
        errorResponse(res, error, "creating rateing");
    }
};

exports.remove = async (req, res) => {
    const rateing = new Rateing({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
    });
    try {
        data = await Rateing.remove(rateing);
        res.send({});
    } catch (error) {
        errorResponse(res, error, "remove rateing");
    }
};

exports.removeAll = async (_req, res) => {
    try {
        data = await Rateing.removeAll();
        res.send({});
    } catch (error) {
        errorResponse(res, error, "removeAll rateing");
    }
};

exports.rateingValue = async (req, res) => {
    const rateing = new Rateing({
        userId: req.body.user_id,
        mealId: req.body.meal_id,
    });
    try {
        data = await Rateing.getByUserIdAndMealId(rateing);
        if (data.length > 0) {
            rateing.rateing = data[0].RATEING;
        }
        else {
            throw Error("No Rateing")
        }
        res.send(rateing);
    } catch (error) {
        errorResponse(res, error, "rateingValue");
    }
};