class CustomError extends Error {
	constructor (ErrorObject)
	{
		super(ErrorObject.message)
		this.name = ErrorObject.name
		this.status = ErrorObject.status
	}
}

module.exports = CustomError;