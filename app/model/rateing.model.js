const { query } = require("./db.js");

// constructor
const Rateing = function (favorite) {
    this.userId = favorite.userId;
    this.mealId = favorite.mealId;
    this.rateing = favorite.rateing;
};

Rateing.create = async (currentRateing) => {
    const sql_command = `
    INSERT INTO 
    RATEING (USERID, MEALID, RATEING)
    VALUES ('${currentRateing.userId}', '${currentRateing.mealId}', '${currentRateing.rateing}');`;
    return await query(sql_command);
};

Rateing.update = async (currentRateing) => {
    const sql_command = `
    UPDATE RATEING 
    SET RATEING = '${currentRateing.rateing}' 
    WHERE USERID = '${currentRateing.userId}' AND MEALID = '${currentRateing.mealId}';`;
    return await query(sql_command);
};

Rateing.remove = async (currentRateing) => {
    const sql_command = `
    DELETE FROM RATEING
    WHERE 
    USERID = '${currentRateing.userId}' AND 
    MEALID ='${currentRateing.mealId}';`;
    return await query(sql_command);
};

Rateing.removeAll = async () => {
    const sql_command = `
    DELETE FROM RATEING
    ;`;
    return await query(sql_command);
};

Rateing.getByUserIdAndMealId = async (currentRateing) => {
    const sql_command = `
    SELECT
    *
    FROM RATEING
    WHERE 
    USERID = '${currentRateing.userId}' AND 
    MEALID ='${currentRateing.mealId}';`;
    return await query(sql_command);
};

module.exports = Rateing;