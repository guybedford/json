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
