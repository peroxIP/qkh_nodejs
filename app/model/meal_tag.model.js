const { query } = require("./db.js");

// constructor
const MealTag = function (mealTag) {
    this.mealId = mealTag.mealId;
    this.tagId = mealTag.tagId;
};

MealTag.create = async (currentMealTag) => {
    const sql_command = `
    INSERT INTO 
    MEAL_TAG (MEALID, TAGID)
    VALUES ('${currentMealTag.mealId}', '${currentMealTag.tagId}');`;
    return await query(sql_command);
};

MealTag.remove = async (currentMealTag) => {
    const sql_command = `
    DELETE FROM MEAL_TAG
    WHERE 
    TAGID = '${currentMealTag.tagId}' AND 
    MEALID ='${currentMealTag.mealId}';`;
    return await query(sql_command);
};

MealTag.removeAll = async () => {
    const sql_command = `
    DELETE FROM MEAL_TAG;`;
    return await query(sql_command);
};

MealTag.removeByMealId = async (mealId) => {
    const sql_command = `
    DELETE FROM MEAL_TAG
    WHERE 
    MEALID ='${mealId}';`;
    return await query(sql_command);
};

MealTag.getTagId = async (mealId) => {
    const sql_command = `
    SELECT
    TAGID
    FROM MEAL_TAG
    WHERE 
    MEALID ='${mealId}';`;
    return await query(sql_command);
};

MealTag.getMealId = async (tagId) => {
    const sql_command = `
    SELECT
    MEALID
    FROM MEAL_TAG
    WHERE 
    TAGID ='${tagId}';`;
    return await query(sql_command);
};

module.exports = MealTag;