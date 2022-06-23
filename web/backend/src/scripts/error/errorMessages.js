const HttpStatus = require("http-status");

module.exports = {
	PASSWORD_ERROR : {
		name : "Password Error",
		message : "Password is must be min length 6 !",
		status : HttpStatus.BAD_REQUEST
	},
	INTERNAL_ERROR : {
		name: "Internal Server Error",
		message: "Internal Server Error !",
		status: HttpStatus.INTERNAL_SERVER_ERROR
	},
	EMAIL_UNIQ_ERROR : {
		name: "Email error",
		message: "E-mail must be unique !",
		status: HttpStatus.BAD_REQUEST
	},
	VALUE_NULL_ERROR : {
		name: "Value Error",
		message : "Value must not empty !",
		status: HttpStatus.BAD_REQUEST
	},
	LOGIN_ERROR : {
		name: "Login Error",
		message : "Username or password incorrect !",
		status: HttpStatus.UNAUTHORIZED
	},
	SYNTAX_ERROR : {
		name: "SyntaxError",
		message : "Syntax Error !",
		status: HttpStatus.INTERNAL_SERVER_ERROR
	},
	AUTH_ERROR : {
		name : "Auth Error",
		message : "Authentication error !",
		status : HttpStatus.UNAUTHORIZED
	},
	INVALID_TOKEN_ERROR : {
		name : "Invalid token",
		message : "Invalid token !",
		status : HttpStatus.UNAUTHORIZED
	},
	FOREIGN_KEY_ERROR : {
		name: "SequelizeForeignKeyConstraintError",
		message: "Company Not Found !",
		status: HttpStatus.BAD_REQUEST
	}

}