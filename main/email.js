/*邮件地址验证*/
function emailReg(str) {
    let email_reg = /^[a-zA-Z0-9]+@(gmail|qq).com$/;
    return email_reg.test(str)
}
module.exports = {
    emailReg
}