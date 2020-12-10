const { query } = require("./db.js");

// constructor
const CategoryTag = function (categoryTag) {
    this.categoryId = categoryTag.categoryId;
    this.tagId = categoryTag.tagId;
};

CategoryTag.create = async (currentCategoryTag) => {
    const sql_command = `
    INSERT INTO 
    CATEGORY_TAG (CATEGORYID, TAGID)
    VALUES ('${currentCategoryTag.categoryId}', '${currentCategoryTag.tagId}');`;
    return await query(sql_command);
};

CategoryTag.remove = async (currentCategoryTag) => {
    const sql_command = `
    DELETE FROM CATEGORY_TAG
    WHERE CATEGORYID = '${currentCategoryTag.categoryId}' AND TAGID ='${currentCategoryTag.tagId}';`;
    return await query(sql_command);
};

CategoryTag.removeAll = async () => {
    const sql_command = `
    DELETE FROM CATEGORY_TAG;`;
    return await query(sql_command);
};

CategoryTag.getAll = async () => {
    const sql_command = `
    SELECT
    *
    FROM CATEGORY_TAG`
    return await query(sql_command);
};

CategoryTag.getByCategoryId = async (categoryId) => {
    const sql_command = `
    SELECT
    TAGID
    FROM CATEGORY_TAG
    WHERE CATEGORYID = '${categoryId}';`;
    return await query(sql_command);
};

module.exports = CategoryTag;