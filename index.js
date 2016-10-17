'use strict';
const seconds = require('@saadshahd/seconds');
const minutes = require('@saadshahd/minutes');
const hours = require('@saadshahd/hours');
const days = require('@saadshahd/days');
const weeks = require('@saadshahd/weeks');
const months = require('@saadshahd/months');
const years = require('@saadshahd/years');

const secondsRegex = generateElementRegex('s', 'sec');
const minutesRegex = generateElementRegex('m', 'min');
const hoursRegex = generateElementRegex('h', 'hour');
const daysRegex = generateElementRegex('d', 'day');
const weeksRegex = generateElementRegex('w', 'week');
const monthsRegex = generateElementRegex('M', 'month');
const yearsRegex = generateElementRegex('Y', 'year');

function generateElementRegex(elementChar, elementOptionalChars) {
	return new RegExp(`(-?\\d+?)(?:(?:${elementChar}(?:\\W|\\b))|${elementOptionalChars})`);
}

function parseDurationString(durationString) {
	const matchSeconds = durationString.match(secondsRegex);
	const matchMinutes = durationString.match(minutesRegex);
	const matchHours = durationString.match(hoursRegex);
	const matchDays = durationString.match(daysRegex);
	const matchWeeks = durationString.match(weeksRegex);
	const matchMonths = durationString.match(monthsRegex);
	const matchYears = durationString.match(yearsRegex);

	let durationSum = 0;

	if (matchSeconds) durationSum += seconds(matchSeconds[1]);
	if (matchMinutes) durationSum += minutes(matchMinutes[1]);
	if (matchHours) durationSum += hours(matchHours[1]);
	if (matchDays) durationSum += days(matchDays[1]);
	if (matchWeeks) durationSum += weeks(matchWeeks[1]);
	if (matchMonths) durationSum += months(matchMonths[1]);
	if (matchYears) durationSum += years(matchYears[1]);

	return durationSum;
}

module.exports = parseDurationString;
