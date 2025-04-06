class Ticket{
    constructor(seatNum,flightNum,departure,arrivalAirport,TravellingDate){
        this.seatNum = seatNum;
        this.flightNum = flightNum;
        this.departure = departure;
        this.arrivalAirport = arrivalAirport;
        this.TravellingDate = TravellingDate;
    }


    displayInfo(){
        return `Ticket Info : \nSeat Number: ${this.seatNum}\nFlight Number: ${this.flightNum}\nFrom: ${this.departure} -> To: ${this.arrivalAirport}\nTravel Date: ${this.TravellingDate}\n`;
    }

    getValueOf(field){
        if(this.hasOwnProperty(field)){
            return this[field];
        }else{
            return `Field '${field}' does not exist.`
        }
    }

    update(field, newValue){
        if(this.hasOwnProperty(field)){
            this[field] = newValue;
            return `Field '${field}' Updated to '${newValue}'.`
        }else{
            return `Field '${field}' does not exist.`
        }
    }
}

module.exports = Ticket;
