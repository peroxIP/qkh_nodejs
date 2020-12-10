const Meal = require("../model/meal.model.js");
const MealTag = require("../model/meal_tag.model.js");
const errorResponse = require("../util/response_error.js");

exports.create = async (req, res) => {
    const meal = new Meal({
        userId: req.body.user_id,
        imageUrl: req.body.image_url,
        duration: req.body.duration,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        complexity: req.body.complexity,
        affordability: req.body.affordability,
        mealName: req.body.name,
        tags: req.body.tags,
    });
    try {
        data = await Meal.create(meal);
        meal.mealId = data.insertId;

        await bindToMealTag(meal.tags, meal.mealId)

        res.send(meal);
    } catch (error) {
        errorResponse(res, error, "creating Meal");
    }
};


exports.update = async (req, res) => {
    const meal = new Meal({
        mealId: req.body.meal_id,
        imageUrl: req.body.image_url,
        duration: req.body.duration,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        complexity: req.body.complexity,
        affordability: req.body.affordability,
        mealName: req.body.name,
        tags: req.body.tags,
    });
    try {
        data = await Meal.update(meal);

        await MealTag.removeByMealId(meal.mealId)

        await bindToMealTag(meal.tags, meal.mealId)

        res.send(meal);
    } catch (error) {
        errorResponse(res, error, "updateing Meal");
    }
};

exports.getByTags = async (req, res) => {
    const meal = new Meal({
        tags: req.body.tags,
    });
    try {
        data = await Meal.getByTags(meal);
        console.log(data)
        if (data.length == 0) {
            throw Error("No meals found for tags")
        }


        let response = []
        data.forEach(element => {
            let m = new Meal({
                mealId: element.MEALID,
                imageUrl: element.IMAGEURL,
                duration: element.DURATION,
                ingredients: JSON.parse(element.INGREDIENTS),
                steps: JSON.parse(element.STEPS),
                complexity: element.COMPLEXITY,
                affordability: element.AFFORDABILITY,
                mealName: element.MEALNAME
            });
            response.push(m)
        });

        res.send(response);
    } catch (error) {
        errorResponse(res, error, "updateing Meal");
    }
};

async function bindToMealTag(tags, mealId) {
    for (let index = 0; index < tags.length; index++) {
        const element = tags[index];
        let mealTag = new MealTag({
            mealId: mealId,
            tagId: element.id,
        });
        await MealTag.create(mealTag)
    }
}

exports.removeAll = async (req, res) => {
    try {
        await Meal.removeAll();
        await MealTag.removeAll();
        res.send({});
    } catch (error) {
        errorResponse(res, error, "remove Favorite");
    }
};