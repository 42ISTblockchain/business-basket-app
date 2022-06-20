const httpStatus = require("http-status");

module.exports = {
	PASSWORD_ERROR : {
		name : "Password Error",
		message : "Password is must be min length 6 !",
		status : httpStatus.BAD_REQUEST
	},
	INTERNAL_ERROR : {
		name: "Internal Server Error",
		message: "Internal Server Error !",
		status: httpStatus.INTERNAL_SERVER_ERROR
	},
	EMAIL_UNIQ_ERROR : {
		name: "Email error",
		message: "E-mail must be unique !",
		status: httpStatus.BAD_REQUEST
	},
	VALUE_NULL_ERROR : {
		name: "Value Error",
		message : "Value is not empty !",
		status: httpStatus.BAD_REQUEST
	},
	LOGIN_ERROR : {
		name: "Login Error",
		message : "Username or password incorrect !",
		status: httpStatus.UNAUTHORIZED
	},
	SYNTAX_ERROR : {
		name: "SyntaxError",
		message : "Syntax Error !",
		status: httpStatus.INTERNAL_SERVER_ERROR
	},
	AUTH_ERROR : {
		name : "Auth Error",
		message : "Authentication error !",
		status : httpStatus.UNAUTHORIZED
	},
	INVALID_TOKEN_ERROR : {
		name : "Invalid token",
		message : "Invalid token !",
		status : httpStatus.UNAUTHORIZED
	}

}