const requestFiler = (req, res, next) => {
    console.log("request filter")
    delete req.body.id
    next()
}

module.exports = requestFiler