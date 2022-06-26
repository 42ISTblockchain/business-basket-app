const CryptoJS = require('crypto-js')
const JWT = require('jsonwebtoken')

const passwordHash = (password) => {
    return CryptoJS.HmacSHA256(password, CryptoJS.HmacSHA1(password, process.env.APP_KEY).toString()).toString()
}

const generateAccessToken = (user) => {
    return JWT.sign({ id: user.id, role: user.role, email: user.email }, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "1w"})
}

const generateRefreshToken = (user) => {
    return JWT.sign({ id: user.id, role: user.role, email: user.email }, process.env.REFRESH_TOKEN_SECRET_KEY,)
}

const getUserId = (headers) => {
	const decoded = JWT.verify(headers?.authorization?.split(' ')[1], process.env.ACCESS_TOKEN_SECRET_KEY)
	return decoded.id
}

module.exports = {
    passwordHash,
    generateAccessToken,
    generateRefreshToken,
	getUserId
}
