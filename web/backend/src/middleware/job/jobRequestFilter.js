module.exports = (req, res, next) => {
    const {
        description,
        gender,
        startDate,
        endDate,
        jobCategoryId,
        price,
        workerCount,
        address
    } = req.body

    req.body = {
        description,
        gender,
        startDate,
        endDate,
        jobCategoryId,
        price,
        workerCount,
        address
    }
    next()
}