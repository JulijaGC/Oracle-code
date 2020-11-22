
var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "As you can imagine, it is dangerous having an oven in an oak tree during the dry season.-Elf",
  "Nice purple dress. Very purpley.",
  "There is room for everyone on the Nice List!",
  "It is just nice to meet another human that shares my affinity for elf culture.-Elf",
  "This place reminds me of Santas Workshop! Except it smells like mushrooms and everyone looks like they want to hurt me.-Elf",
  "I just like to smile, smiling is my favorite.-Elf",
  "We elves try to stick to the four main food groups: candy, candy canes, candy corns and syrup.-Elf",
  "You sit on a throne of lies!-Elf",
  "Why dont you just say it? I am the worst toy-maker in the world? I am a cotton-headed ninny-muggins!-Elf",
  "I am singing! I am in a store and I am singing!-Elf",
  "I passed through the seven levels of the Candy Cane forest, through the sea of swirly twirly gum drops, and then I walked through the Lincoln Tunnel.-Elf",
  "I think you are really beautiful and I feel really warm when I am around you and my tongue swells up. So, do you want to eat food?-Elf",
];

function tellFortune() {

  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {
  // what goes here? (hint: make the fortune div contain an empty string)

}
