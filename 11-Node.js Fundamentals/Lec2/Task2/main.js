const Ticket = require('./flightTicketModule.js');
const TicketModule = require('./flightTicketModule.js');

let myTicket = new Ticket('22A', 'XY123', 'Cairo', 'Dubai', '2025-05-15');

console.log(myTicket.displayInfo());

console.log(`get(departure) => ${myTicket.getValueOf('departure')}`);
console.log(`get(city) => ${myTicket.getValueOf('city')}\n`);

console.log(myTicket.update('departure', 'Alex'));
console.log(myTicket.update('city', 'Alex')+'\n');
console.log(myTicket.displayInfo());


