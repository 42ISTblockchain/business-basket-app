module.exports = (req, res, next) => {
    const {
        companyName,
        email,
        password,
        taxNumber,
        taxOffice,
        phoneNumber,
        address,
      } = req.body;

    req.body = {
        companyName,
        email,
        password,
        taxNumber,
        taxOffice,
        phoneNumber,
        address,
    }
    next()
}