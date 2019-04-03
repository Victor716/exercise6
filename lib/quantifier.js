module.exports = function (str) {
  // TODO
  var reg = /^[0-9]+\.(jpg|jpeg)$/;
  return reg.test(str);
}