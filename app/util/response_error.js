
// Helper function for error responses
function errorResponse(res, err, custom_message) {
    let custom_m = `Some error occurred while ${custom_message}.`
    let message = {
        message:
            err.message || custom_m
    }
    res.status(500).send(message);
}

module.exports = errorResponse