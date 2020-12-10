const { query } = require("./db.js");


// constructor
const Category = function (category) {
    this.id = category.id;
    this.name = category.name;
    this.imageUrl = category.imageUrl;
    this.tags = category.tags;
};

Category.create = async (currentCategory) => {
    const sql_command = `
    INSERT INTO 
    CATEGORY (CATEGORYNAME, CATEGORYIMAGEURL) 
    VALUES ('${currentCategory.name}', '${currentCategory.imageUrl}');`;
    return await query(sql_command);
};

Category.removeAll = async () => {
    const sql_command = `
    DELETE FROM CATEGORY;`;
    return await query(sql_command);
};

Category.findByName = async (name) => {
    const sql_command = `
    SELECT
    *
    FROM CATEGORY
    WHERE CATEGORYNAME = '${name}';`;
    return await query(sql_command);
};

Category.getAll = async () => {
    const sql_command = `
    SELECT
    *
    FROM CATEGORY;`;
    return await query(sql_command);
};

Category.getById = async (categoryId) => {
    const sql_command = `
    SELECT
    *
    FROM CATEGORY
    WHERE CATEGORYID = '${categoryId}';`;
    return await query(sql_command);
};

module.exports = Category;