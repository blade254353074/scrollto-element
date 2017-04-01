# scrollto-element [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple animated scroll to element function.

* Using requestAnimationFrame
* Only require [bezier-easing](https://github.com/gre/bezier-easing) and [raf](https://github.com/chrisdickinson/raf)

## Install

```bash
npm install scrollto-element --save
```

## Usage

```javascript
const scrollToElement = require('scrollto-element')
// or ES2015+
import scrollToElement from 'scrollto-element'
```

## Example

```javascript
import scrollToElement from 'scrollto-element'

scrollToElement(document.querySelector('#foobar'))
scrollToElement(element, 300)

// advanced
scrollToElement({
  element: document.querySelector('#foobar'),
  bezier: [0.19, 1, 0.22, 1],
  duration: 3000,
  then () {
    console.log('Finished~')
  }
})
```

## See also

* [Easing Function Cheat Sheet](http://easings.net/)

## License

MIT
