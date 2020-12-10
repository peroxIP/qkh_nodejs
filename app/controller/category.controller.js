const Category = require("../model/category.model.js");
const CategoryTag = require("../model/category_tag.model.js");
const errorResponse = require("../util/response_error.js");

exports.create = async (req, res) => {
    const category = new Category({
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        tags: req.body.tags
    });
    try {
        category_data = await Category.create(category)
        category.id = category_data.insertId
        for (let index = 0; index < category.tags.length; index++) {
            const element = category.tags[index];
            let categoryTag = new CategoryTag({
                categoryId: category.id,
                tagId: element.id,
            });
            await CategoryTag.create(categoryTag)
        }
        res.send(category)
    } catch (error) {
        errorResponse(res, error, "creating Category")
    }
};

exports.removeAll = async (_req, res) => {
    try {
        await Category.removeAll();
        await CategoryTag.removeAll();
        res.send({});
    } catch (error) {
        errorResponse(res, error, "remove Category");
    }
};

exports.getAll = async (_req, res) => {
    try {
        data = await Category.getAll()
        let result = [];
        for (const element of data) {
            let category = new Category({
                id: element.CATEGORYID,
                imageUrl: element.CATEGORYIMAGEURL,
                name: element.CATEGORYNAME,
            });
            let tags = []
            data_C_T = await CategoryTag.getByCategoryId(category.id)
            data_C_T.forEach(e => {
                tags.push(
                    { id: e.TAGID }
                )
            });
            category.tags = tags
            result.push(category);
        }

        await res.send(result);
    } catch (error) {
        errorResponse(res, error, "getting all Categories")
    }
}