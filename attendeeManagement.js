
//Step 2 Declare and Initialize an Attendee Object:
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

//Step 3 Create a Function to Log Attendee Name
function logAttendeeName(attendee){
    console.log(attendee.name);
}

//Step 4 Create a Function to Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

//Step 5 Create a Function to Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

//Step 6 Create a Function to Update Ticket Price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

//Step 7 Create a Function to Remove the Event Property
function removeEventProperty(attendee) {
  delete attendee.event;
}

//Step 8 Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}


console.log("Original attendee:");
console.log(attendee);

console.log("\nTesting log functions:");
logAttendeeName(attendee);
logTicketPrice(attendee);

console.log("\nUpdating ticket type:");
updateTicketType(attendee, "General Admission");
console.log(attendee.ticketType);

console.log("\nUpdating ticket price:");
updateTicketPrice(attendee, 100);
console.log(attendee.ticketPrice);

console.log("\nRemoving event property:");
removeEventProperty(attendee);
console.log(attendee);

console.log("\nAdding checkedIn property:");
addCheckedInProperty(attendee);
console.log(attendee);