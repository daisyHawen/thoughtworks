module.exports = function main(email, suffixes) {

    let regStr = '^[a-zA-Z0-9]+@' + suffixes;
    let email_reg = new RegExp(regStr, "g")
    return email_reg.test(email)
};