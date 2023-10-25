"use strict";
// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = [
    "Rafiq",
    "Iqbal",
    "Babar"
];
let Guestwhocannotmakeit = "Iqbal";
console.log(`${Guestwhocannotmakeit} can't make it to Dinner`);
let NewGuest = "Ashraf";
let indexofGuestwhocannotmakeit = guestList.indexOf(Guestwhocannotmakeit);
if (indexofGuestwhocannotmakeit == 1) {
    guestList[indexofGuestwhocannotmakeit] = NewGuest;
    console.log("second set of invitation messages:");
    guestList.forEach((guest) => {
        console.log(`Dear ${guest}, your are invited to dinner.`);
    });
}
