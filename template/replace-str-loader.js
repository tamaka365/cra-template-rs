module.exports = function (content) {
  return Object.entries(this.query).reduce(
    (last, [key, value]) => last.replaceAll(key, value),
    content
  );
};
