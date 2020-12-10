const Tag = require("../model/tag.model.js");
const CategoryTag = require("../model/category_tag.model.js");
const MealTag = require("../model/meal_tag.model.js");
const errorResponse = require("../util/response_error.js");

exports.create = async (req, res) => {
    const tag = new Tag({
        type: req.body.type,
        name: req.body.name,
    });
    try {
        data = await Tag.create(tag);
        tag.id = data.insertId;
        res.send(tag);
    } catch (error) {
        errorResponse(res, error, "creating Tag");
    }
};

exports.getAll = async (_req, res) => {
    try {
        data = await Tag.getAll();
        let result = [];
        data.forEach(element => {
            p = new Tag({
                id: element.TAGID,
                type: element.TYPE,
                name: element.TAGNAME,
            });
            result.push(p);
        });
        res.send(result);
    } catch (error) {
        errorResponse(res, error, "getting all Tags")
    }
}


exports.getById = async (req, res) => {
    try {
        data = await Tag.getById(req.params.tagid);
        if (data.length > 0) {
            const element = data[0]
            p = new Tag({
                id: element.TAGID,
                type: element.TYPE,
                name: element.TAGNAME,
            });
            res.send(p);
        }
        else {
            throw Error("User not found")
        }
    } catch (error) {
        errorResponse(res, error, "getting Tag by id")
    }
}

exports.removeAll = async (_req, res) => {
    try {
        await Tag.removeAll();
        await CategoryTag.removeAll();
        await MealTag.removeAll();
        res.send({});
    } catch (error) {
        errorResponse(res, error, "creating User");
        return;
    }
};