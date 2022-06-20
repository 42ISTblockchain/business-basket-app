const httpStatus = require("http-status");
const {
	INTERNAL_ERROR, PASSWORD_ERROR, SYNTAX_ERROR, LOGIN_ERROR, AUTH_ERROR, INVALID_TOKEN_ERROR

} = require("../scripts/error/errorMessages");

function sendRequest(res, msg, statusCode){
	res.status(statusCode)
	.json({
		success : false,
		message : msg
	})
}

const errorHandler = (err, req, res, next) => {
	console.log(err)

	switch (err.name) {
		case "SequelizeUniqueConstraintError":
			sendRequest(res, err.errors[0].message, httpStatus.BAD_REQUEST);
			return ;
		case "SequelizeValidationError":
			sendRequest(res, err.errors[0].message, httpStatus.BAD_REQUEST);
			return ;
		case PASSWORD_ERROR.name:
			sendRequest(res, PASSWORD_ERROR.message, PASSWORD_ERROR.status);
			return ;
		case SYNTAX_ERROR.name:
			sendRequest(res, SYNTAX_ERROR.message, SYNTAX_ERROR.status)
			return ;
		case LOGIN_ERROR.name:
			sendRequest(res, LOGIN_ERROR.message, LOGIN_ERROR.status);
			return ;
		case AUTH_ERROR.name:
			sendRequest(res, AUTH_ERROR.message, AUTH_ERROR.status);
			return ;
		case INVALID_TOKEN_ERROR.name:
			sendRequest(res, INVALID_TOKEN_ERROR.message, INVALID_TOKEN_ERROR.status);
		default:
			sendRequest(res, INTERNAL_ERROR.message, INTERNAL_ERROR.status)
			return ;
	}
}

module.exports = errorHandler;