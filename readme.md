# duration [![Build Status](https://travis-ci.org/saadshahd/duration.svg?branch=master)](https://travis-ci.org/saadshahd/duration)

> Get milliseconds from duration


## Install

```
$ npm install --save @saadshahd/duration
```


## Usage

```js
const duration = require('@saadshahd/duration');

duration('1s'); // 1000
duration('-1s'); // -1000
duration('1m'); // 60000
duration('1h'); // 3600000
duration('1d'); // 86400000
duration('1w'); // 604800000
duration('1M'); // 2592000000
duration('1Y'); // 31536000000
duration('1Y 1m 1h 1d 1s 1w 1M'); // 34822861000
```

## Chars
```
Seconds: s, sec
Minutes: m, min
Hours  : h, hour
Days   : d, day
Weeks  : w, week
Months : M, month
Years  : Y, year
```


## Related

- [seconds](https://github.com/saadshahd/seconds) - Get milliseconds from seconds
- [minutes](https://github.com/saadshahd/minutes) - Get milliseconds from minutes
- [hours](https://github.com/saadshahd/hours) - Get milliseconds from hours
- [days](https://github.com/saadshahd/days) - Get milliseconds from days
- [weeks](https://github.com/saadshahd/weeks) - Get milliseconds from weeks
- [months](https://github.com/saadshahd/months) - Get milliseconds from months
- [years](https://github.com/saadshahd/years) - Get milliseconds from years


## License

MIT © Saad Shahd
