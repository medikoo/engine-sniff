# engine-sniff
## Engine detection utilities
### Last resort when feature detection is not enough

### Usage

```javascript
var isSafari = require('engine-sniff/is-safari');

if (isSafari) alert("I expected your browser to be better");
```

### Installation
#### npm

In your project path:

	$ npm install engine-sniff

##### Browser

You can easily bundle _engine-sniff_ for browser with CJS boundler of your choice. No favorite yet? Try either [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

## Tests [![Build Status](https://travis-ci.org/medikoo/engine-sniff.png)](https://travis-ci.org/medikoo/engine-sniff)

	$ npm test
