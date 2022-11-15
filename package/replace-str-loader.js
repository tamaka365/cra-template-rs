module.exports = content =>
  Object.entries(this.query).reduce(
    (last, [key, value]) => last.replaceAll(key, value),
    content
  );
