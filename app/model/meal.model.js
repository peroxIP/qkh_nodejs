const { query } = require("./db.js");

// constructor
const Meal = function (meal) {
    this.mealId = meal.mealId;
    this.userId = meal.userId;
    this.imageUrl = meal.imageUrl;
    this.duration = meal.duration;
    this.ingredients = meal.ingredients;
    this.steps = meal.steps;
    this.complexity = meal.complexity;
    this.affordability = meal.affordability;
    this.mealName = meal.mealName;
    this.tags = meal.tags
};

Meal.create = async (currentMeal) => {
    const sql_command = `
    INSERT INTO MEAL
    (
        USERID,
        IMAGEURL,
        DURATION,
        INGREDIENTS,
        STEPS,
        COMPLEXITY,
        AFFORDABILITY,
        MEALNAME
    )
    VALUES 
    (
        '${currentMeal.userId}',
        '${currentMeal.imageUrl}',
        '${currentMeal.duration}',
        '${JSON.stringify(currentMeal.ingredients)}',
        '${JSON.stringify(currentMeal.steps)}',
        '${currentMeal.complexity}',
        '${currentMeal.affordability}',
        '${currentMeal.mealName}'
    );`;

    return await query(sql_command);
};

Meal.update = async (currentMeal) => {
    const sql_command = `
    UPDATE MEAL
    SET
    IMAGEURL = '${currentMeal.imageUrl}',
    DURATION= '${currentMeal.duration}',
    INGREDIENTS='${JSON.stringify(currentMeal.ingredients)}',
    STEPS='${JSON.stringify(currentMeal.steps)}',
    COMPLEXITY='${currentMeal.complexity}',
    AFFORDABILITY='${currentMeal.affordability}',
    MEALNAME='${currentMeal.mealName}'

    WHERE MEALID = '${currentMeal.mealId}'`;

    return await query(sql_command);
};

Meal.getByTags = async (currentMeal) => {
    where_query = createWhereQuery(currentMeal.tags)
    console.log(where_query)
    const sql_command = `
    SELECT MEAL.MEALID, MEAL.IMAGEURL, 
    MEAL.DURATION, MEAL.INGREDIENTS,
    MEAL.STEPS, MEAL.COMPLEXITY, 
    MEAL.AFFORDABILITY, MEAL.MEALNAME
    FROM MEAL 
    LEFT JOIN MEAL_TAG ON MEAL.MEALID = MEAL_TAG.MEALID    
    WHERE (${where_query}) 
    GROUP BY MEAL.MEALID 
    `;
    console.log(sql_command)
    return await query(sql_command);
};

function createWhereQuery(tags) {
    let where_query = "";
    for (let index = 0; index < tags.length; index++) {
        const element = tags[index];
        if (index == 0) {
            where_query += formatSubQuerry(element.id)
        } else {
            where_query += "OR " + formatSubQuerry(element.id)
        }
    }
    return where_query
}

function formatSubQuerry(id) {
    return `MEAL_TAG.TAGID = '${id}' `
}

Meal.removeAll = async () => {
    const sql_command = `
    DELETE FROM MEAL;`;
    return await query(sql_command);
};

module.exports = Meal;