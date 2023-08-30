const impl = require('./index_solved');

function test(name, fn, expectedResult) {
	console.log('-----------------------------------------------------------------');
	console.log(` Expecting '${name}' to return: ${expectedResult}`);
	console.log(` ${' '.repeat(name.length)}      actual result is: ${fn()}`);
	console.log('-----------------------------------------------------------------');
}

test('Flights departing FRA', impl.countFlightsDepartingFRA, 3);
test('Flights enroute', impl.countDepartedNotArrived, 4);
test('Number of booked passengers', impl.countBookedPassengers, 1607);
test('All airports', impl.allAirports, ['JFK', 'FRA', 'MUC', 'CDG', 'HAM', 'CGN', 'BER']);
