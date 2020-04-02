export default new Map([
  //This is the start of one path and its buttons
  ["startPath", {
    storyText: "One morning, you're walking down the street and come upon a time machine. You decide to:",
    buttons: [
      { //This is the start of a button
        btnTxt: "Ignore it! Nothing good ever comes from time travel", //This is the text that will show up INSIDE of the button
        path: 'ignore1', //This directs to a differnt object with it's own story. 
      }, //This is the end of a button
      {
        btnTxt: "Go look at it; it's shiny...",
        path: 'golook1', //IMPORTANT: whatever you type here MUST match a later path. 
      }
    ] //This is the end of the path and its buttons
  }],
  //This is the end of the startPath


  ["ignore1", {
    storyText: "You have no sense of adventure; you live your entire life in mediocrity, always wondering what would have happened...  THE END",
    buttons: [],
  }],


  ["golook1", {
    storyText: "You discover a knob on the time machine that changes the number on the machine's LED display; you figure the number represents how far back the time machine will take you. You decide to:",
    buttons: [
      {
        btnTxt: "walk away; the whole thing looks a little sketchy...",
        path: 'ignore1',
      },
      {
        btnTxt: "turn the knob to 1650",
        path: 'warp1650',
      },
      {
        btnTxt: "turn the knob to 950",
        path: 'warp950',
      },
      {
        btnTxt: "turn the knob to 700",
        path: 'warp700',
      }
    ]
  }],

  ["warp1650", {
    storyText: "After some pretty crazy physics-defying stuff, you wind up in the year 370. More's changed than your your time period, though. You're now a woman, surprise if you weren't before! You decide to:",
    buttons: [
      {
        btnTxt: "lie down and cry! This is bizarre!",
        path: 'liedownandcry',
      },
      {
        btnTxt: "go to the market and find something to eat; you're starving!",
        path: 'marketeat',
      },
      {
        btnTxt: "find some new clothes so you don't look so out of place!",
        path: 'findnewclothes',
      },
    ]
  }],

  ["liedownandcry", {
    storyText: "After crying for a fair bit, you are starting to compose yourself when you hear someone behind you. You're not really sure what language you hear coming out of the person's mouth, but it sounds like Latin. You decide to:",
    buttons: [
      {
        btnTxt: "try to play along with what he's saying; avoid getting on his bad side!",
        path: 'playalong1',
      },
      {
        btnTxt: "ignore what he's trying to say and try and get the time machine to take you back.",
        path: 'ignorefixmachine',
      },
    ]
  }],

  ["playalong1", {
    storyText: "The man motions for you to follow him. You do, and he takes you to a small vineyard that it looks like he runs. He gives you food and puts you to work with the plants. Turns out, you're now a servant. After a few days, you start piecing together what he's saying, and he wants you to marry one of his other servants and have many servant children. You decide to:",
    buttons: [
      {
        btnTxt: "accept. You've resigned yourself to your fate and you don't know what else you'd do anyways.",
        path: 'marrytheservant',
      },
      {
        btnTxt: "refuse; he can't tell you what to do!",
        path: 'refusetheservant',
      },
      {
        btnTxt: "tell him you accept, but that night, sneak out of the servants’ quarters.",
        path: 'sneakoutservant',
      },
    ]
  }],

  ["marrytheservant", {
    storyText: "You marry the servant. Luckily, your husband is fairly gentle. He only beats you occasionally and you bear him many children. You live your life and die of some illness at 47 because you have no access to medical care. THE END",
    buttons: [],
  }],

  ["refusetheservant", {
    storyText: "Turns out, that was the wrong choice. You’re beaten severely and life becomes much more difficult. You’re eventually sold as a slave and the rest of life is miserable. You’re raped a lot, beaten even more, and die young, wishing you had made a different choice. THE END",
    buttons: [],
  }],

  ["sneakoutservant", {
    storyText: "You sneak out and start running through the woods on the side of the road. Long after you’re tired, slow, and hungry, you find some mushrooms, the first edible-looking plant you’ve seen in a few days. You decide to:",
    buttons: [
      {
        btnTxt: "eat the mushrooms;you're starving!",
        path: 'eatmushrooms',
      },
      {
        btnTxt: "leave them alone; they look pretty sketchy; you’ll find something else to eat, hopefully...",
        path: 'leavemushrooms',
      },
    ]
  }],

  ["eatmushrooms", {
    storyText: "The mushrooms were poisonous – that or you got some fatal disease randomly. You die that evening in a significant amount of pain. Sad days! THE END",
    buttons: [],
  }],

  ["leavemushrooms", {
    storyText: "You don’t find anything else do eat; after begging food off passers-by for a few days and getting raped once, you starve to death. Should have taken your chance with the mushrooms. THE END",
    buttons: [],
  }],

  ["ignorefixmachine", {
    storyText: "You start pushing buttons on the time machine, and it lights up and makes time-machiney sounds. The guy who was trying to you freaks out and runs away. A few seconds later, you’re back where you started. You decide to:",
    buttons: [
      {
        btnTxt: "pick another setting. What's the worst that could happen? Turn th knob to 950.",
        path: 'warp950',
      },
      {
        btnTxt: "walk away as fast as you can! You're done with time travel!",
        path: 'ignore1',
      },
      {
        btnTxt: "give the machine one more chance; turn the knob to 700",
        path: 'warp700',
      },
    ]
  }],

  ["marketeat", {
    storyText: "On your way to the market, you notice a group of men staring at you. They look hostile. You decide to:",
    buttons: [
      {
        btnTxt: "start running! You want to get away from those creeps.",
        path: 'runfromcreeps',
      },
      {
        btnTxt: "stay calm and ignore them.",
        path: 'ignorecreeps',
      },
    ]
  }],

  ["runfromcreeps", {
    storyText: "You don’t get very far before you wind up in a dead-end alley. The creepy men you saw following you turn into the alley and come toward you. You decide to:",
    buttons: [
      {
        btnTxt: "Fight!",
        path: 'fightcreeps',
      },
      {
        btnTxt: "Try to talk your way out of this!",
        path: 'talktocreeps',
      },
    ]
  }],

  ["fightcreeps", {
    storyText: "You give it your best shot, but they almost instantly overpower you. They hit you on the side of the head, and everything goes black.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'monasteryconclusion',
      },
    ]
  }],

  ["monasteryconclusion", {
    storyText: "If you had lived two centuries later, you would have had a small chance of being rescued by a monk or a nun. Unfortunately, nobody comes to help you, and you die. THE END",
    buttons: [],
  }],

  ["talktocreeps", {
    storyText: "You don't understand what they're saying, but you try not to make them angry. Apparently, you don't do a good job, because they get angry. They grab you, one of them rapes you, and then they beat you into unconsciousness.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'monasteryconclusion',
      },
    ]
  }],

  ["ignorecreeps", {
    storyText: "You keep walking and the men don’t follow you; eventually, you reach the market. As you’re looking over the merchandise, you encounter a middle-aged balding man who looks friendly. You decide to:",
    buttons: [
      {
        btnTxt: "Ignore him -- you've had bad luck with men up to now.",
        path: 'ignorejerome',
      },
      {
        btnTxt: "Try and start a conversation; maybe he can help!",
        path: 'noclothestalktojerome',
      },
    ]
  }],

  ["ignorejerome", {
    storyText: "After trying to buy food a few times (they don’t accept your money), you get discouraged and give up. You decide to try and make your way to the countryside; maybe you can find a farm there where you can work for food. As you’re leaving the city, you meet a man and try and talk to him. He looks like he can help you. You decide to:",
    buttons: [
      {
        btnTxt: "Keep talking to him; hopefully he an give you some help",
        path: 'playalong1',
      },
      {
        btnTxt: "Steer clear of him! You can do this on your own!",
        path: 'dieofstarvation1',
      },
    ]
  }],

  ["dieofstarvation1", {
    storyText: "You wander around for a few days, but you can’t find anyone willing to help you. Eventually, you starve to death. THE END",
    buttons: [],
  }],

  ["noclothestalktojerome", {
    storyText: "You start talking to him, and he looks up at you. He clearly can’t understand you, and he looks at you like you just insulted him. He calls the guards that are stationed nearby, and they take you to the edge of the city, where they drop you off. You decide to:",
    buttons: [
      {
        btnTxt: "Go back to the market; maybe you can steal some food!",
        path: 'gobacktomarket',
      },
      {
        btnTxt: "head out into the country; you can do this on your own!",
        path: 'dieofstarvation1',
      },
    ]
  }],

  ["gobacktomarket", {
    storyText: "You start heading back to the market, and the road forks. You don't really remember how to get there again; you decide to:",
    buttons: [
      {
        btnTxt: "turn right.",
        path: 'runfromcreeps',
      },
      {
        btnTxt: "turn left.",
        path: 'turnleft1',
      },
    ]
  }],

  ["turnleft1", {
    storyText: "23- You take the left fork, and it takes you straight to the market. You now have to decide what to steal to eat! You decide to:",
    buttons: [
      {
        btnTxt: "steal some fish.",
        path: 'stealfood1',
      },
      {
        btnTxt: "steal some fruit.",
        path: 'stealfood1',
      },
      {
        btnTxt: "try to talk to that man again; he's still there!",
        path: 'noclothestalktojerome',
      },
    ]
  }],

  ["stealfood1", {
    storyText: "You go toward the stand, grab some food, and take off! You hear someone behind you giving chase. When the road forks, you decide to:",
    buttons: [
      {
        btnTxt: "turn left.",
        path: 'runfromcreeps',
      },
      {
        btnTxt: "turn right.",
        path: 'escapewithfood',
      },
    ]
  }],

  ["escapewithfood", {
    storyText: "You nearly get caught, but you make it out – barely! You eat your spoils and head out into the countryside. You steal whenever you need food, but after a few weeks, there’s a dry spell in your pickings. You eventually sneak onto another farm with a chicken yard. You decide to:",
    buttons: [
      {
        btnTxt: "steal a chicken.",
        path: 'stealchicken',
      },
      {
        btnTxt: "leave the chickens; the place looks more secure than you originally thought...",
        path: 'sneakoutservant',
      },
    ]
  }],

  ["stealchicken", {
    storyText: "You go into the chicken yard, grab a chicken, then take off; as you’re running off, you feel a sharp pain between your shoulder blades. You fall, realizing you’ve just been shot. You die in a great amount of pain. THE END",
    buttons: [],
  }],

  ["findnewclothes", {
    storyText: "You wander around for a while, getting a sense of what these people dress like. By some random chance, you somehow manage to acquire some clothes that help you blend in. Now, you decide to:",
    buttons: [
      {
        btnTxt: "head toward the market; you need food! ",
        path: 'marketwithclothes',
      },
      {
        btnTxt: "go exploring! You can eat later.",
        path: 'exploringclothes',
      },
    ]
  }],

  ["marketwithclothes", {
    storyText: "You go to the market and look around. You realize that you can’t understand what anyone’s saying. You try talking to a few merchants, but don’t get very far. You then see a middle-aged balding man who looks like he might help. You decide to:",
    buttons: [
      {
        btnTxt: "ignore him; you can't trust anybody here!",
        path: 'ignorejerome',
      },
      {
        btnTxt: "try to start a conversation with him!",
        path: 'talktojeromeclothes',
      },
    ]
  }],

  ["talktojeromeclothes", {
    storyText: "As you go up to him, he looks up at you like he recognizes you. He starts talking, but you don’t understand anything! He looks excited though and acts like he wants you to follow him. You decide to:",
    buttons: [
      {
        btnTxt: "ignore him -- this looks a little sketchy...",
        path: 'ignorejerome',
      },
      {
        btnTxt: "follow him!",
        path: 'followjerome',
      },
    ]
  }],

  ["followjerome", {
    storyText: "You follow him and he leads you to a home where he introduces you to a woman. After a long, frustrating game of charades, you realize she’s inviting you to stay with her. You decide to:",
    buttons: [
      {
        btnTxt: "accept the invitation; what else are you going to do?",
        path: 'accepttostay',
      },
      {
        btnTxt: "Politely refuse; you don't want to be agreeing to something you don't ",
        path: 'gobacktomarket',
      },
    ]
  }],

  ["accepttostay", {
    storyText: "You go into her home, where she gives you a room and food. After a few days, you start understanding what she’s been trying to tell you. Apparently, that man you saw in the market had had a vision where he saw you, and that you were to enter one of the first Christian convents. You’re understandably confused after hearing this speech, and you decide to:",
    buttons: [
      {
        btnTxt: "get out of this! You want no part of this strangeness! ",
        path: 'leaveconvent',
      },
      {
        btnTxt: "go along with it; do you have much of an option?",
        path: 'joinconvent',
      },
    ]
  }],

  ["leaveconvent", {
    storyText: "Luckily, the lady allows you to leave. You don’t really know what to do next, but you decide to:",
    buttons: [
      {
        btnTxt: "go back to the market; maybe you can find someone to help you.",
        path: 'gobacktomarket',
      },
      {
        btnTxt: "go exploring! See what else you can find!",
        path: 'exploringclothes',
      },
    ]
  }],

  ["joinconvent", {
    storyText: "Over the next few months, you learn Latin, you receive instruction from both the woman you’re living with and the man you met in the market (turn out, it’s St. Jerome!). You’re baptized and live reasonably well as one of the first generations of Christian women! THE END",
    buttons: [],
  }],

  ["exploringclothes", {
    storyText: "Luckily, the lady allows you to leave. You don’t really know what to do next, but you decide to:",
    buttons: [
      {
        btnTxt: "go back to the market; maybe you can find someone to help you.",
        path: 'gobacktomarket',
      },
      {
        btnTxt: "go exploring! See what else you can find!",
        path: 'exploringclothes',
      },
    ]
  }],

  ["exploringclothes", {
    storyText: "Now that you know the language a little, you can find your way around well enough. After a few hours, though, you need to figure out what to do. You decide to:",
    buttons: [
      {
        btnTxt: "wind your way back to the market; maybe Jerome can help you.",
        path: 'gobacktomarket',
      },
      {
        btnTxt: "head out to the countryside; maybe you can find a place to stay on a farm somewhere.",
        path: 'dieofstarvation',
      },
      {
        btnTxt: "start walking towards the business center; you haven't really explored there yet.",
        path: 'businesscenter',
      },
    ]
  }],

  ["businesscenter", {
    storyText: "As you walk through the streets, some Roman soldiers stop you. They accuse you of some crime; you don't really follow what they're saying, but you wind up in jail. That night, you think you might escape. You decide to:",
    buttons: [
      {
        btnTxt: "sneak out and head for the hills!",
        path: 'sneakoutservant',
      },
      {
        btnTxt: "stay put! You're innocent!",
        path: 'deathbydrowning',
      },
    ]
  }],

  ["deathbydrowning", {
    storyText: "When your trial comes, everything is a blur, but before long, you're sentenced to death by something called Poena cullei, whatever that means. A few days later, you're tied up and put in a bad along with a snake, a dog, a monkey, and a rooster and thrown into a river. You're not sure which kills you first, the animals or the water. In either case, you die. THE END",
    buttons: [],
  }],

])