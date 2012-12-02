Parse JSON
==========

AMD module to detect JSON.parse support and if not provided, loads json2 dynamically.

Dependent on Require-IS and the json2 library by Douglas Crockford.

By default json2 excluded from builds and loaded dynamically when needed.

Usage:

```javascript

  require(['json/json'], function(JSON) {
    var obj = JSON.parse('{ json: "object" }'); 
  });
 
```

Installation:

With Volo:

```
  volo add guybedford/json
```

Without Volo, download this repo to a folder called json in the global lib folder.

Then install [require-is](/guybedford/require-is) and download [json2](https://raw.github.com/douglascrockford/JSON-js/master/json2.js) into the lib folder.
