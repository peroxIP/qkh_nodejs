const { query } = require("./db.js");

// constructor
const Tag = function (tag) {
    this.id = tag.id;
    this.type = tag.type;
    this.name = tag.name;
};

Tag.create = async (currentTag) => {
    const sql_command = `
    INSERT INTO 
    TAG (TYPE, TAGNAME) 
    VALUES ('${currentTag.type}', '${currentTag.name}');`;
    return await query(sql_command);
};

Tag.findByNameAndType = async (name, type) => {
    const sql_command = `
    SELECT
    *
    FROM TAG
    WHERE TYPE= '${type}' AND TAGNAME ='${name}';`;
    return await query(sql_command);
};

Tag.getAll = async () => {
    const sql_command = `
    SELECT
    *
    FROM TAG;`;
    return await query(sql_command);
};

Tag.removeAll = async () => {
    const sql_command = `
      DELETE FROM TAG;
      `;
    return await query(sql_command);
}

Tag.getById = async (tagId) => {
    const sql_command = `
    SELECT
    *
    FROM TAG
    WHERE TAGID = '${tagId}';`;
    return await query(sql_command);
};

module.exports = Tag;