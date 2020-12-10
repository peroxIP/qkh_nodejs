const { query } = require("./db.js");

// constructor
const Favorite = function (favorite) {
    this.userId = favorite.userId;
    this.mealId = favorite.mealId;
};

Favorite.create = async (currentFavorite) => {
    const sql_command = `
    INSERT INTO 
    FAVORITE (USERID, MEALID)
    VALUES ('${currentFavorite.userId}', '${currentFavorite.mealId}');`;
    return await query(sql_command);
};

Favorite.remove = async (currentFavorite) => {
    const sql_command = `
    DELETE FROM FAVORITE
    WHERE 
    USERID = '${currentFavorite.userId}' AND 
    MEALID ='${currentFavorite.mealId}';`;
    return await query(sql_command);
};

Favorite.removeAll = async () => {
    const sql_command = `
    DELETE FROM FAVORITE;`;
    return await query(sql_command);
};

Favorite.getByUserIdAndMealId = async (currentFavorite) => {
    const sql_command = `
    SELECT
    *
    FROM FAVORITE
    WHERE 
    USERID = '${currentFavorite.userId}' AND 
    MEALID ='${currentFavorite.mealId}';`;
    return await query(sql_command);
};

module.exports = Favorite;