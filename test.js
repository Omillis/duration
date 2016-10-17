import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('1s'), 1000);
	t.is(fn('1sec'), 1000);
	t.is(fn('1m'), 60000);
	t.is(fn('1min'), 60000);
	t.is(fn('1h'), 3600000);
	t.is(fn('1hour'), 3600000);
	t.is(fn('1d'), 86400000);
	t.is(fn('1day'), 86400000);
	t.is(fn('1w'), 604800000);
	t.is(fn('1week'), 604800000);
	t.is(fn('1M'), 2592000000);
	t.is(fn('1month'), 2592000000);
	t.is(fn('1Y'), 31536000000);
	t.is(fn('1year'), 31536000000);
	t.is(fn('1Y 1m 1h 1d 1s 1w 1M'), 34822861000);
	t.is(fn('1year 1min 1hour 1day 1sec 1week 1month'), 34822861000);
});
