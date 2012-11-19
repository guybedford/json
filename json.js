define(['is!~./json-parse?[json2]'], function(parseJSON) {
  return parseJSON || JSON.parse;
});
