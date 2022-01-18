const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (thingToEat) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              console.log(`So, your name is ${name}\nYour favourite activity is ${activity}\nMusic: ${music}
Meal: ${meal}\nThing To Eat: ${thingToEat}\nSport: ${sport}\nAnd your superpower is: ${superpower}`);
              rl.question('Is it all correct?', (answer) => {
                if (answer.toLowerCase() == "yes") {
                  console.log("Nice, you're succesfully registered.")
                } else {
                  console.log("Sorry, than");
                }
                rl.close();
              });

            });
          });
        });
      });
    });
    

  });
  
});