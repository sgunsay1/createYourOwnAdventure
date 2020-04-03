export default new Map([
  //This is the start of one path and its buttons
  ["startPath", {
    storyText: "One morning, you're walking down the street and come upon a time machine. You decide to:",
    buttons: [
      { //This is the start of a button
        btnTxt: "Ignore it! Nothing good ever comes from time travel", //This is the text that will show up INSIDE of the button
        path: 'path001', //This directs to a differnt object with it's own story. 
      }, //This is the end of a button
      {
        btnTxt: "Go look at it; it's shiny...",
        path: 'path002', //IMPORTANT: whatever you type here MUST match a later path. 
      }
    ] //This is the end of the path and its buttons
  }],
  //This is the end of the startPath


  ["notImplemented", {
    storyText: "Hmmmmm... Sorry. It seems like we haven't implemented this path yet. Please let Seth know so that he can fix it!",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path001", {
    storyText: "You have no sense of adventure; you live your entire life in mediocrity, always wondering what would have happened...  THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],


  ["path002", {
    storyText: "You discover a knob on the time machine that changes the number on the machine's LED display; you figure the number represents how far back the time machine will take you (in years). You decide to:",
    buttons: [
      {
        btnTxt: "walk away; the whole thing looks a little sketchy...",
        path: 'path001',
      },
      {
        btnTxt: "turn the knob to 1650",
        path: 'path101',
      },
      {
        btnTxt: "turn the knob to 950",
        path: 'notImplemented',
      },
      {
        btnTxt: "turn the knob to 704",
        path: 'path401',
      }
    ]
  }],

  ["path101", {
    storyText: "After some pretty crazy physics-defying stuff, you wind up in the year 370. More's changed than your your time period, though. You're now a woman, surprise if you weren't before! You decide to:",
    buttons: [
      {
        btnTxt: "lie down and cry! This is bizarre!",
        path: 'path102',
      },
      {
        btnTxt: "go to the market and find something to eat; you're starving!",
        path: 'path110',
      },
      {
        btnTxt: "find some new clothes so you don't look so out of place!",
        path: 'path124',
      },
    ]
  }],

  ["path102", {
    storyText: "After crying for a fair bit, you are starting to compose yourself when you hear someone behind you. You're not really sure what language you hear coming out of the person's mouth, but it sounds like Latin. You decide to:",
    buttons: [
      {
        btnTxt: "try to play along with what he's saying; avoid getting on his bad side!",
        path: 'path103',
      },
      {
        btnTxt: "ignore what he's trying to say and try and get the time machine to take you back.",
        path: 'path109',
      },
    ]
  }],

  ["path103", {
    storyText: "The man motions for you to follow him. You do, and he takes you to a small vineyard that it looks like he runs. He gives you food and puts you to work with the plants. Turns out, you're now a servant. After a few days, you start piecing together what he's saying, and he wants you to marry one of his other servants and have many servant children. You decide to:",
    buttons: [
      {
        btnTxt: "accept. You've resigned yourself to your fate and you don't know what else you'd do anyways.",
        path: 'path104',
      },
      {
        btnTxt: "refuse; he can't tell you what to do!",
        path: 'path105',
      },
      {
        btnTxt: "tell him you accept, but that night, sneak out of the servants’ quarters.",
        path: 'path106',
      },
    ]
  }],

  ["path104", {
    storyText: "You marry the servant. Luckily, your husband is fairly gentle. He only beats you occasionally and you bear him many children. You live your life and die of some illness at 47 because you have no access to medical care. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path105", {
    storyText: "Turns out, that was the wrong choice. You’re beaten severely and life becomes much more difficult. You’re eventually sold as a slave and the rest of life is miserable. You’re raped a lot, beaten even more, and die young, wishing you had made a different choice. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path106", {
    storyText: "You sneak out and start running through the woods on the side of the road. Long after you’re tired, slow, and hungry, you find some mushrooms, the first edible-looking plant you’ve seen in a few days. You decide to:",
    buttons: [
      {
        btnTxt: "eat the mushrooms;you're starving!",
        path: 'path107',
      },
      {
        btnTxt: "leave them alone; they look pretty sketchy; you’ll find something else to eat, hopefully...",
        path: 'path108',
      },
    ]
  }],

  ["path107", {
    storyText: "The mushrooms were poisonous – that or you got some fatal disease randomly. You die that evening in a significant amount of pain. Sad days! THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path108", {
    storyText: "You don’t find anything else do eat; after begging food off passers-by for a few days and getting raped once, you starve to death. Should have taken your chance with the mushrooms. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path109", {
    storyText: "You start pushing buttons on the time machine, and it lights up and makes time-machiney sounds. The guy who was trying to talk to you freaks out and runs away. A few seconds later, you’re back where you started - the year 2020. You decide to:",
    buttons: [
      {
        btnTxt: "pick another setting. What's the worst that could happen? Turn the knob to 950.",
        path: 'notImplemented',
      },
      {
        btnTxt: "walk away as fast as you can! You're done with time travel!",
        path: 'path001',
      },
      {
        btnTxt: "give the machine one more chance; turn the knob to 704",
        path: 'path401',
      },
    ]
  }],

  ["path110", {
    storyText: "On your way to the market, you notice a group of men staring at you. They look hostile. You decide to:",
    buttons: [
      {
        btnTxt: "start running! You want to get away from those creeps.",
        path: 'path111',
      },
      {
        btnTxt: "stay calm and ignore them.",
        path: 'path115',
      },
    ]
  }],

  ["path111", {
    storyText: "You don’t get very far before you wind up in a dead-end alley. The creepy men you saw following you turn into the alley and come toward you. You decide to:",
    buttons: [
      {
        btnTxt: "Fight!",
        path: 'path112',
      },
      {
        btnTxt: "Try to talk your way out of this!",
        path: 'path114',
      },
    ]
  }],

  ["path112", {
    storyText: "You give it your best shot, but they almost instantly overpower you. They hit you on the side of the head, and everything goes black.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path113',
      },
    ]
  }],

  ["path113", {
    storyText: "If you had lived two centuries later, you would have had a small chance of being rescued by a monk or a nun. Unfortunately, nobody comes to help you, and you die. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path114", {
    storyText: "You don't understand what they're saying, but you try not to make them angry. Apparently, you don't do a good job, because they get angry. They grab you, one of them rapes you, and then they beat you into unconsciousness.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path113',
      },
    ]
  }],

  ["path115", {
    storyText: "You keep walking and the men don’t follow you; eventually, you reach the market. As you’re looking over the merchandise, you encounter a middle-aged balding man who looks friendly. You decide to:",
    buttons: [
      {
        btnTxt: "Ignore him -- you've had bad luck with men up to now.",
        path: 'path116',
      },
      {
        btnTxt: "Try and start a conversation; maybe he can help!",
        path: 'path118',
      },
    ]
  }],

  ["path116", {
    storyText: "After trying to buy food a few times (they don’t accept your money), you get discouraged and give up. You decide to try and make your way to the countryside; maybe you can find a farm there where you can work for food. As you’re leaving the city, you meet a man and try and talk to him. He looks like he can help you. You decide to:",
    buttons: [
      {
        btnTxt: "Keep talking to him; hopefully he an give you some help",
        path: 'path103',
      },
      {
        btnTxt: "Steer clear of him! You can do this on your own!",
        path: 'path117',
      },
    ]
  }],

  ["path117", {
    storyText: "You wander around for a few days, but you can’t find anyone willing to help you. Eventually, you starve to death. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path118", {
    storyText: "You start talking to him, and he looks up at you. He clearly can’t understand you, and he looks at you like you just insulted him. He calls the guards that are stationed nearby, and they take you to the edge of the city, where they drop you off. You decide to:",
    buttons: [
      {
        btnTxt: "Go back to the market; maybe you can steal some food!",
        path: 'path119',
      },
      {
        btnTxt: "head out into the country; you can do this on your own!",
        path: 'path117',
      },
    ]
  }],

  ["path119", {
    storyText: "You start heading back to the market, and the road forks. You don't really remember how to get there again; you decide to:",
    buttons: [
      {
        btnTxt: "turn right.",
        path: 'path111',
      },
      {
        btnTxt: "turn left.",
        path: 'path120',
      },
    ]
  }],

  ["path120", {
    storyText: "23- You take the left fork, and it takes you straight to the market. You now have to decide what to steal to eat! You decide to:",
    buttons: [
      {
        btnTxt: "steal some fish.",
        path: 'path121',
      },
      {
        btnTxt: "steal some fruit.",
        path: 'path121',
      },
      {
        btnTxt: "try to talk to that man again; he's still there!",
        path: 'path118',
      },
    ]
  }],

  ["path121", {
    storyText: "You go toward the stand, grab some food, and take off! You hear someone behind you giving chase. When the road forks, you decide to:",
    buttons: [
      {
        btnTxt: "turn left.",
        path: 'path111',
      },
      {
        btnTxt: "turn right.",
        path: 'path122',
      },
    ]
  }],

  ["path122", {
    storyText: "You nearly get caught, but you make it out – barely! You eat your spoils and head out into the countryside. You steal whenever you need food, but after a few weeks, there’s a dry spell in your pickings. You eventually sneak onto another farm with a chicken yard. You decide to:",
    buttons: [
      {
        btnTxt: "steal a chicken.",
        path: 'path123',
      },
      {
        btnTxt: "leave the chickens; the place looks more secure than you originally thought...",
        path: 'path106',
      },
    ]
  }],

  ["path123", {
    storyText: "You go into the chicken yard, grab a chicken, then take off; as you’re running off, you feel a sharp pain between your shoulder blades. You fall, realizing you’ve just been shot. You die in a great amount of pain. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path124", {
    storyText: "You wander around for a while, getting a sense of what these people dress like. By some random chance, you somehow manage to acquire some clothes that help you blend in. Now, you decide to:",
    buttons: [
      {
        btnTxt: "head toward the market; you need food! ",
        path: 'path125',
      },
      {
        btnTxt: "go exploring! You can eat later.",
        path: 'path131',
      },
    ]
  }],

  ["path125", {
    storyText: "You go to the market and look around. You realize that you can’t understand what anyone’s saying. You try talking to a few merchants, but don’t get very far. You then see a middle-aged balding man who looks like he might help. You decide to:",
    buttons: [
      {
        btnTxt: "ignore him; you can't trust anybody here!",
        path: 'path116',
      },
      {
        btnTxt: "try to start a conversation with him!",
        path: 'path126',
      },
    ]
  }],

  ["path126", {
    storyText: "As you go up to him, he looks up at you like he recognizes you. He starts talking, but you don’t understand anything! He looks excited though and acts like he wants you to follow him. You decide to:",
    buttons: [
      {
        btnTxt: "ignore him -- this looks a little sketchy...",
        path: 'path116',
      },
      {
        btnTxt: "follow him!",
        path: 'path127',
      },
    ]
  }],

  ["path127", {
    storyText: "You follow him and he leads you to a home where he introduces you to a woman. After a long, frustrating game of charades, you realize she’s inviting you to stay with her. You decide to:",
    buttons: [
      {
        btnTxt: "accept the invitation; what else are you going to do?",
        path: 'path128',
      },
      {
        btnTxt: "Politely refuse; you don't want to be agreeing to something you don't ",
        path: 'path119',
      },
    ]
  }],

  ["path128", {
    storyText: "You go into her home, where she gives you a room and food. After a few days, you start understanding what she’s been trying to tell you. Apparently, that man you saw in the market had had a vision where he saw you, and that you were to enter one of the first Christian convents. You’re understandably confused after hearing this speech, and you decide to:",
    buttons: [
      {
        btnTxt: "get out of this! You want no part of this strangeness! ",
        path: 'path129',
      },
      {
        btnTxt: "go along with it; do you have much of an option?",
        path: 'path130',
      },
    ]
  }],

  ["path129", {
    storyText: "Luckily, the lady allows you to leave. You don’t really know what to do next, but you decide to:",
    buttons: [
      {
        btnTxt: "go back to the market; maybe you can find someone to help you.",
        path: 'path119',
      },
      {
        btnTxt: "go exploring! See what else you can find!",
        path: 'path131',
      },
    ]
  }],

  ["path130", {
    storyText: "Over the next few months, you learn Latin, you receive instruction from both the woman you’re living with and the man you met in the market (turn out, it’s St. Jerome!). You’re baptized and live reasonably well as one of the first generations of Christian women! THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path131", {
    storyText: "Luckily, the lady allows you to leave. You don’t really know what to do next, but you decide to:",
    buttons: [
      {
        btnTxt: "go back to the market; maybe you can find someone to help you.",
        path: 'path119',
      },
      {
        btnTxt: "go exploring! See what else you can find!",
        path: 'path131',
      },
    ]
  }],

  ["path131", {
    storyText: "Now that you know the language a little, you can find your way around well enough. After a few hours, though, you need to figure out what to do. You decide to:",
    buttons: [
      {
        btnTxt: "wind your way back to the market; maybe Jerome can help you.",
        path: 'path119',
      },
      {
        btnTxt: "head out to the countryside; maybe you can find a place to stay on a farm somewhere.",
        path: 'path134',
      },
      {
        btnTxt: "start walking towards the business center; you haven't really explored there yet.",
        path: 'path132',
      },
    ]
  }],

  ["path132", {
    storyText: "As you walk through the streets, some Roman soldiers stop you. They accuse you of some crime; you don't really follow what they're saying, but you wind up in jail. That night, you think you might escape. You decide to:",
    buttons: [
      {
        btnTxt: "sneak out and head for the hills!",
        path: 'path106',
      },
      {
        btnTxt: "stay put! You're innocent!",
        path: 'path133',
      },
    ]
  }],

  ["path133", {
    storyText: "When your trial comes, everything is a blur, but before long, you're sentenced to death by something called Poena cullei, whatever that means. A few days later, you're tied up and put in a bad along with a snake, a dog, a monkey, and a rooster and thrown into a river. You're not sure which kills you first, the animals or the water. In either case, you die. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],
  ["path134", {
    storyText: "Unfortunately, there aren't too many farms that accept your presence, and you are cast away wherever you go. You wander aimlessly for days, parched for water and barely living off of that candy bar in your pocket. Ill-equipped to survive on your own, you eventually die of starvation. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],



  /*
  ------------------------------------------------
  Start of 1516 timeline
  ------------------------------------------------
  */
  ["path401", {
    storyText: "The machine shakes more than the Magna earthquake in Utah and for a minute you start to get nervous. Then everything settles down. Nervously, you open the door and step outside, finding yourself in the year 1516. Looking around, you see a small band of travelers headed east. You decide to:",
    buttons: [
      {
        btnTxt: "Catch up to the travelers and ask for some food",
        path: 'path402',
      },
      {
        btnTxt: "Wander around aimlessly and hope that you find civilization",
        path: 'path431',
      },
      {
        btnTxt: "Say “no way Jose” and go back inside the time-machine",
        path: 'path434',
      },
    ]
  }],
  ["path402", {
    storyText: "You sprint in the direction of the travelers and then remember that you aren’t much of a runner… So you opt for a brisk walk and slowly make your way towards them. After a half hour, they notice your approach and ask what your business is. You respond:",
    buttons: [
      {
        btnTxt: "I’m from the future and can offer you goods beyond your wildest dreams.",
        path: 'path403',
      },
      {
        btnTxt: "I’m nobody - I’m just looking for a bite to eat.",
        path: 'path404',
      },
      {
        btnTxt: "I saw you fine gentlemen in the distance and wanted to join you in your travels.",
        path: 'path404',
      },
    ]
  }],
  ["path403", {
    storyText: "The men stare at you for a minute, determine you are mentally unsound, and promptly leave - trying to put as much distance between you as possible. Realizing you blew your chances with the mysterious travelers, you:",
    buttons: [
      {
        btnTxt: "Head south towards what looks like a city",
        path: 'path433',
      },
      {
        btnTxt: "Return to the time machine in defeat",
        path: 'path434',
      },
    ]
  }],
  ["path404", {
    storyText: "The lead traveler smiles and jovially offers you a piece of fruit. Gratefully, you eat *wow it tastes good* while he introduces himself. After learning the man’s name (Hythloday) you join him on his travels. Eventually, you all arrive at your destination: a strange island shaped like a moon with inhabitants who call themselves Utopians. You are given local attire to blend in, and then examine your surroundings. Most people are dressed in plain clothes and are engaged in daily tasks. However, there are a few people adorned with gold. You decide to: ",
    buttons: [
      {
        btnTxt: "Talk to the important rich folk",
        path: 'path426',
      },
      {
        btnTxt: "Talk to a more plain resident",
        path: 'path429',
      },
      {
        btnTxt: "Ignore the people and keep exploring",
        path: 'path405',
      },
    ]
  }],
  ["path405", {
    storyText: "You walk out of the city and enter the farmland, which is remarkably well organized. Everyone seems to be enthusiastically tending their crops while you just stand there staring. Someone nearby notices your lack of effort, reminds you to get back to work. You:",
    buttons: [
      {
        btnTxt: "Are too good for manual labor",
        path: 'path406',
      },
      {
        btnTxt: "Pick up a hoe and start raking",
        path: 'path413',
      },
      {
        btnTxt: "Ask why no one else is slacking off",
        path: 'path406',
      },
    ]
  }],
  ["path406", {
    storyText: "The man tells you that everyone MUST work as hard as they can. It sounds like tough work, but he explains that it is only for 6 hours per day, after which they are allowed to do anything they like - so long as it’s productive and well spent. However, he warns that laziness is not tolerated, as enforced by the Syphogrants. You decide to:",
    buttons: [
      {
        btnTxt: "Be lazy anyways",
        path: 'path407',
      },
      {
        btnTxt: "Get the heck out of there",
        path: 'path412',
      },
      {
        btnTxt: "Shrug it off and start farming",
        path: 'path413',
      },
    ]
  }],
  ["path407", {
    storyText: "You are punished severely for failing to comply with the established ways of Utopia. You decide to:",
    buttons: [
      {
        btnTxt: "Repeat your infractions - but more discreetly",
        path: 'path408',
      },
      {
        btnTxt: "Reform your ways and be a good Utopian citizen",
        path: 'path409',
      },
    ]
  }],
  ["path408", {
    storyText: "You are caught… again. Expecting punishment, you are instead put into forced slavery. You are forced to wear gold adornments and jewelry while cleaning gold chamber pots. Every. Single. Day. The gold that once seemed so appealing on you (literally) weighs you down. You realize that the possession of gold is meaningless and bemoan your changed life circumstances. You eventually die, possessing much gold but finding yourself hardly wealthy. \n\n THE END",
    buttons: [
      // {
      //   btnTxt: "Start Over",
      //   path: 'path',
      // },
    ]
  }],
  ["path409", {
    storyText: "You find peace in accepting the Utopian ways. You follow all their laws, live a productive life, and eventually grow old. In your late 80s, you become sick. Thinking you will recover (you always have before), you realize that the illness is getting worse. Soon you are bed-ridden and worry that you may not get better. Friends and family visit you, first comforting you with encouraging words. However, realizing you will not get better, they soon encourage you to allow yourself to be killed to end your suffering. You decide:",
    buttons: [
      {
        btnTxt: "The pain is too much. Kill me now.",
        path: 'path410',
      },
      {
        btnTxt: "Not a chance. No way. I want to live.",
        path: 'path411',
      },
    ]
  }],
  ["path410", {
    storyText: "You are honored for your decision. Your family visits you one last time, sends their love, and your life is ended painlessly.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path411", {
    storyText: "You fight the illness for weeks and weeks. The pain grows more and more intense until you are writhing in agony. Ever hoping you will get better, you only find the sickness gets worse. In your final moments - between bouts of screaming - you wish that you listened to your friends and ended your life sooner. You draw your last breath and blissfully find respite in death. \n\n THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path412", {
    storyText: "You leave those crazies behind and start traveling elsewhere on the island. Surely there are some people who aren’t so focused on obeying the law to the letter. While on the road, you are stopped by a group travelling in the other direction. They ask you for your travel permission papers and you respond that you don’t have any. They wonder why someone would travel without permission, especially when it is normally granted without any problems. Regardless, they know what they must do...",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path407',
      },
    ]
  }],
  ["path413", {
    storyText: "You work a full day and realize that farming isn’t all that bad. Sure, it’s hard work, but it felt rewarding to put in your best effort alongside so many others. Wanting to learn more about this strange land, you hear that you need travel papers to explore further. You decide to:",
    buttons: [
      {
        btnTxt: "Visit the Government with papers",
        path: 'path414',
      },
      {
        btnTxt: "Visit the Government without papers",
        path: 'path412',
      },
      {
        btnTxt: "Visit the military sector with papers",
        path: 'path422',
      },
      {
        btnTxt: "Visit the military sector  without papers",
        path: 'path412',
      },
    ]
  }],
  ["path414", {
    storyText: "You go to the center of the city and find where governmental meetings take place. Asking around, you learn that candidates for the Chief Executive are elected by the population, and finally selected by the syphogrants. In addition, the Chief Executive maintains the position for life. Hearing that the Chief Executive is still alive and well, you decide to: ",
    buttons: [
      {
        btnTxt: "Become the head-honcho - no matter the cost",
        path: 'path415',
      },
      {
        btnTxt: "Learn about the senate",
        path: 'path416',
      },
      {
        btnTxt: "Travel to the military sector",
        path: 'path422',
      },
    ]
  }],
  ["path415", {
    storyText: "Through shady means, you somehow position yourself as the Chief Executive. Nice. However, all the power begins to go to your head and people soon discover the awful things you did to gain the seat. You order the death of dissenters, but soon find the people aren’t too keen to follow your tyranny. Instead, you are dismissed, another is elected in your stead, and you are relegated to a meaningless life as a slave.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path416", {
    storyText: "Asking around, you discover that the senate meets as a committee once every three days. They discuss the affairs of the state, but never make a decree until discussing the issue on three separate occasions. Initially thinking this to be wildly inefficient, you find that their process of \”sleeping on it\” allows them to effectively address all conflicts in the island in a swift and positive manner. Having had your fill of government, you decide to: ",
    buttons: [
      {
        btnTxt: "Go get some food",
        path: 'path417',
      },
      {
        btnTxt: "Visit the farmlands",
        path: 'path405',
      },
      {
        btnTxt: "Check out the military",
        path: 'path422',
      },
      {
        btnTxt: "Leave Utopia",
        path: 'path430',
      },
    ]
  }],
  ["path417", {
    storyText: "Wandering around, you find a largish building where everyone seems to be gathering. You catch a scent of something delicious, and walk inside. Reaching for some money, you notice some kids run past you, sit down, and start eating. You put your money away, sheepishly realizing that everything is shared in common. You notice that the men sit on one side with their backs to the wall, while the women sit opposite. Not sure why this is the case, you nonetheless follow suit and sit in the appropriate location. Chowing down, you notice that across the table and a few seats down, an incredibly attractive person is watching you. You:",
    buttons: [
      {
        btnTxt: "Ignore it and keep eating",
        path: 'path421',
      },
      {
        btnTxt: "Scoot down and talk to him/her",
        path: 'path418',
      },
    ]
  }],
  ["path418", {
    storyText: "You both hit things off really well. Weeks pass and you seriously consider marriage. You then find out that it is an important Utopian custom for both suitors to strip down completely naked and mutually view one another prior to marriage. Taken aback, you decide to:",
    buttons: [
      {
        btnTxt: "Follow the custom",
        path: 'path419',
      },
      {
        btnTxt: "Break off the relationship",
        path: 'path420',
      },
      {
        btnTxt: "Run. Run as fast as you can.",
        path: 'path430',
      },
    ]
  }],
  ["path419", {
    storyText: "After getting through the strange custom, you both get married and have a wonderful life together. You learn together, work together, have a family together, and eventually grow old together.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path409',
      },
    ]
  }],
  ["path420", {
    storyText: "Heartbroken, you end things with your bae and realize that while there are many things about Utopia that are attractive and ideal, there are just some things too absurd to accept. Reeling from the pains of lost love and trying to take your mind off of matters, you:",
    buttons: [
      {
        btnTxt: "Leave Utopia",
        path: 'path430',
      },
      {
        btnTxt: "Visit the Farms",
        path: 'path405',
      },
      {
        btnTxt: "Visit the Government",
        path: 'path414',
      },
      {
        btnTxt: "Visit the Military",
        path: 'path422',
      },
    ]
  }],
  ["path421", {
    storyText: "Having had your fill, you get up, and wander some more. You run into Hythloday again, and you both exchange stories of what you’ve learned about Utopia. You decide to split up again to learn even more about the city, and plan to reconnect later. You:",
    buttons: [
      {
        btnTxt: "Ditch Hythloday and leave",
        path: 'path430',
      },
      {
        btnTxt: "Visit the Farms",
        path: 'path405',
      },
      {
        btnTxt: "Visit the Government",
        path: 'path414',
      },
      {
        btnTxt: "Visit the Military",
        path: 'path422',
      },
    ]
  }],
  ["path422", {
    storyText: "After being pointed in the right direction, you find their military base. Surprisingly, there is hardly anyone there. You ask:",
    buttons: [
      {
        btnTxt: "Where are all the soldiers?",
        path: 'path424',
      },
      {
        btnTxt: "How is this place defendable?",
        path: 'path425',
      },
      {
        btnTxt: "Where are all the airplanes?",
        path: 'path423',
      },
    ]
  }],
  ["path423", {
    storyText: "The officer you talk to acts confused and you remember - airplanes haven’t been invented yet. Giving yourself a mental facepalm and resolving to ask better questions, you try again:",
    buttons: [
      {
        btnTxt: "Do you even have a military?",
        path: 'path424',
      },
      {
        btnTxt: "How can you defend this island with no active soldiers?",
        path: 'path425',
      },
    ]
  }],
  ["path424", {
    storyText: "You learn that Utopians prefer to outsource their military efforts rather than lose the lives of their own citizens. Hardly caring for the lives of their barbaric neighbors, the Utopians offer gold for Zapolete mercenary services. Often, the Zapoletes are killed before they can collect their payment and so the Utopians preserve the lives of the citizens while maintaining their wealth to hire future mercenaries, if needed. Blown away by the craftiness of this people and realizing you don’t want to be an enemy of the Utopians, you:",
    buttons: [
      {
        btnTxt: "Ask about the defense of the island",
        path: 'path425',
      },
      {
        btnTxt: "Return to the city to learn about the government",
        path: 'path414',
      },
      {
        btnTxt: "Go looking for food",
        path: 'path417',
      },
    ]
  }],
  ["path426", {
    storyText: "As you walk up to the gold-covered man, you notice that something seems off. Perhaps he is just having a bad day, but he doesn’t seem all that happy. You get closer and realize that all that gold on his arms and legs are… chains. Golden chains. Further, this important and wealthy man seems to be doing menial labor. Slowly, you put two and two together, realizing that this man is a criminal. And yet, for some reason, they give their criminals GOLD. You decide to: ",
    buttons: [
      {
        btnTxt: "Become a criminal. It can’t be that bad with all this gold.",
        path: 'path428',
      },
      {
        btnTxt: "Turn around and talk to the plain folk",
        path: 'path429',
      },
      {
        btnTxt: "Steal gold from the criminal.",
        path: 'path427',
      },
      {
        btnTxt: "Go explore around the city",
        path: 'path422',
      },
    ]
  }],
  ["path427", {
    storyText: "You quickly snatch the massive golden pot the criminal was holding and whoop in delight. You are now richer than you have ever been. Running with the pot, you slow down in an alley and lift the lid to see what other jewels lie inside. Disgusted, you realize that you are holding a golden CHAMBERPOT. You",
    buttons: [
      {
        btnTxt: "Plug your nose and keep the pot",
        path: 'path428',
      },
      {
        btnTxt: "Ditch the pot and pretend nothing happened",
        path: 'path429',
      },
    ]
  }],
  ["path428", {
    storyText: "Falling into criminalistic behaviour, you are left undiscovered for a time. Falling into a false sense of security, you begin to think the rules no longer apply to you and you flagrantly violate every Utopian law. Eventually, you are caught and brought to justice.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path407',
      },
    ]
  }],
  ["path429", {
    storyText: "You meander your way over to the plain-looking folk and learn that these are the normal citizens of Utopia. They all dress the same because it is practical and they don’t feel like they need fancy things. Instead, they focus on what makes them happy - such as playing wholesome games and increasing their education. Intrigued with this new and unique culture, you decide to:",
    buttons: [
      {
        btnTxt: "Approach the rich-looking man",
        path: 'path426',
      },
      {
        btnTxt: "Go exploring",
        path: 'path414',
      },
      {
        btnTxt: "Go grab a bite to eat",
        path: 'path417',
      },
    ]
  }],
  ["path430", {
    storyText: "You find passage off of the island and realize that you are now alone, without Hythloday. You ask for directions, but all anyone tells you is that you are in Nowheria… That doesn’t even sound like a real place! Regardless, you: ",
    buttons: [
      {
        btnTxt: "Try to find your way back to the time machine",
        path: 'path434',
      },
      {
        btnTxt: "Follow the coast and see where you end up",
        path: 'path432',
      },
      {
        btnTxt: "Wander aimlessly and hope for the best",
        path: 'path431',
      },
    ]
  }],
  ["path431", {
    storyText: "You wander. And wander. And wonder while you wander: where am I? Eventually, you collapse in the heat of the sun, on the brink of death. You are found by some mercenaries who hear you muttering “darned time machine,” over and over. They lose interest, leave you, and you die of heat exhaustion. \n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],
  ["path432", {
    storyText: "You walk along the coast for days, just trying to reach a place that is not Nowheria. You survive through begging and finding crabs on the shoreline. You finally reach what seems like Somewhere and are captured by a traveling military. You are taken to the heart of Italy and find yourself within a proper civilization. Breaking free from the military, you run off in the city and compose yourself.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path433',
      },
    ]
  }],
  ["path433", {
    storyText: "You realize that you are now in a princedom of sorts. You walk around and find an impressively sized building, full of ornate decorum. Walking inside, you see a man rushing towards you with a bundle in his hand. He stops momentarily, hands you the bundle and says: \“Take it. I’m done with this responsibility.\” He rushes off and you open the bundle, finding a crown. You:",
    buttons: [
      {
        btnTxt: "Say \“aww yeah\” and put it on your head",
        path: 'path436',
      },
      {
        btnTxt: "Chase the man and give him back the crown",
        path: 'path449',
      },
      {
        btnTxt: "Give the crown to some dude outside",
        path: 'path451',
      },
    ]
  }],

  /*
  ------------------------------
  Todo add paths
  ------------------------------
  */
  ["path434", {
    storyText: "Having had your fill of adventure, you find your way back to the machine and are relieved to see that it is still there. Stepping inside and preparing yourself, you:",
    buttons: [
      {
        btnTxt: "Push the large red button",
        path: 'path435',
      },
      {
        btnTxt: "turn the knob to 1650",
        path: 'path101',
      },
      {
        btnTxt: "turn the knob to 950",
        path: 'notImplemented',
      },
    ]
  }],

  /*
  ------------------------------
  End Todo 
  ------------------------------
  */
  ["path435", {
    storyText: "The time machine returns you to your original timeline, sprays confetti everywhere, and welcomes you home. You step outside and realize that you are quite satisfied with your present life circumstances. Leaving the machine, you remember that you have a synthesis for your honors class due tomorrow and sigh as you wonder what you will write.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path436", {
    storyText: "You place the crown atop your head and declare yourself ruler over the princedom. You then realize that you are not too experienced with ruling a princedom, and people are getting quite upset. You need to act quickly to quiet rebellion and assert yourself as ruler. Luckily, you find a written text by a man named Machiavelli, which seems to offer all the advice you could possibly need. Scanning the text, you feel prepared and ready to face the world. In order to keep you province, you:",
    buttons: [
      {
        btnTxt: "Kill the previous ruler",
        path: 'path438',
      },
      {
        btnTxt: "Raise taxes to fund your plans",
        path: 'path437',
      },
    ]
  }],
  ["path437", {
    storyText: "The people grow to hate you and your taxes. You try to explain that the taxes are for their best interests - you will grow the power of the province, expand, and improve the quality of life. They won’t hear you, find you contemptible and usurp your power. You are killed in a mobbed frenzy.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path438", {
    storyText: "You hire assassins and kill the man who gave you the crown. You also kill every member of his family - ensuring that they can never take your power from you. Though distasteful, you reason it was for the best of the princedom and stability. Your counsellor then enters your chambers and tells you that rebellion is brewing among the people. It isn’t so bad yet, but it could get worse. He ends by graciously reminding you of your infinite wisdom and endless ability to rule. You:",
    buttons: [
      {
        btnTxt: "Ask him for advice",
        path: 'path439',
      },
      {
        btnTxt: "Squash the rebellion immediately",
        path: 'path447',
      },
      {
        btnTxt: "Ignore the rebellion and show by example why you deserve to lead",
        path: 'path440',
      },
    ]
  }],
  ["path439", {
    storyText: "Privately, your counsellor speaks his mind. He tells you that unless addressed immediately, the rebellion could prove to be your undoing. He suggests that you swiftly eliminate all rebels, for though their group is small, it would only grow in numbers. You:",
    buttons: [
      {
        btnTxt: "Exercise compassion and let them be",
        path: 'path440',
      },
      {
        btnTxt: "Round them up and have them killed",
        path: 'path447',
      },
      {
        btnTxt: "Fire the counsellor and ask for someone who will tell you what you want to hear",
        path: 'path446',
      },
    ]
  }],
  ["path440", {
    storyText: "You decide to show that good moral attributes such as kindness and compassion are the ways one ought to rule. In the face of growing dissenters and increased disquiet amongst the land, you decide to show an even greater display of upright moral behaviour. You pardon criminals, visit the residents, and try to be a “good person.” One night, while in bed, you awake to the smell of smoke. In a start, you realize a mob has set your house on fire and is waiting for you outside. You:",
    buttons: [
      {
        btnTxt: "Stay inside and hope the fire extinguishes itself",
        path: 'path441',
      },
      {
        btnTxt: "Go outside and face the people",
        path: 'path442',
      },
    ]
  }],
  ["path441", {
    storyText: "The flames engulf your house as you lie whimpering on the ground. Choking on the black ash around you, you resolve to stay put, even as things are getting uncomfortably hot. As you burn, you let out a piercing scream and finally die, wishing you had spent more time reading that text from Machiavelli.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path442", {
    storyText: "Escaping the flames, you bravely step outside and face the mob. You ask what they want and they clamor: “YOUR HEAD!” You: ",
    buttons: [
      {
        btnTxt: "Turn around and head back inside your flaming house",
        path: 'path441',
      },
      {
        btnTxt: "Throw down the crown and run",
        path: 'path443',
      },
      {
        btnTxt: "Laugh crazily and yell for your guards",
        path: 'path448',
      },
    ]
  }],
  ["path443", {
    storyText: "You somehow break out of the mob and escape the city. Breathless, you scan your options and realize you don’t have very many. You:",
    buttons: [
      {
        btnTxt: "Go back to the time machine",
        path: 'path434',
      },
      {
        btnTxt: "Go in search for a happier land",
        path: 'path444',
      },
      {
        btnTxt: "Return to the princedom tomorrow when things are quieter",
        path: 'path445',
      },
    ]
  }],
  ["path444", {
    storyText: "You travel northward for several days, living off of the land. How far you have fallen: going from a prince to a vagabond… At any rate, at least no one wants to kill you anymore. You spend time with peasants and don’t really like it. You try your hand at farming and like it less. One day, while wandering, you see a group of travelers in the distance.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path402',
      },
    ]
  }],
  ["path445", {
    storyText: "The next day, you nervously return to find your house burned to the ground. However, your military squashed the rebellion and it seems that you are somehow back in power. You rebuild your house and things start to become relatively normal. It would appear that people have come to accept you as their ruler and you can now focus on other things than just staying alive. You decide to:",
    buttons: [
      {
        btnTxt: "Establish foreign relations",
        path: 'path452',
      },
      {
        btnTxt: "Build a fortress",
        path: 'path457',
      },
      {
        btnTxt: "Determine what to do with your tax money",
        path: 'path465',
      },
    ]
  }],
  ["path446", {
    storyText: "You hire a new counselor that showers you with all sorts of flatteries, and life is good. He never offers contrary advice and only ever agrees with you. He makes you feel good about yourself. And you should! Because you are a fantastic ruler. When you hear about increasing dissent amongst your citizens, he assures you that you are doing everything right and the people couldn’t hope for a better ruler. One night, while in bed, you awake to the smell of smoke. In a start, you realize a mob has set your house on fire and is waiting for you outside. You:",
    buttons: [
      {
        btnTxt: "Stay inside and hope the fire extinguishes itsel",
        path: 'path441',
      },
      {
        btnTxt: "Go outside and face the people",
        path: 'path442',
      },
    ]
  }],
  ["path447", {
    storyText: "You quickly and publicly kill any dissenters. It wasn’t a pleasant experience, but you realize it could have been much worse if you waited to address the problem. Sometimes cruelty can be kinder than compassion in the grand scope of things. People start to accept you as their ruler and now you can focus on other things. You decide to:",
    buttons: [
      {
        btnTxt: "Establish foreign relations",
        path: 'path452',
      },
      {
        btnTxt: "Build a fortress",
        path: 'path457',
      },
      {
        btnTxt: "Determine what to do with your tax money",
        path: 'path465',
      },
    ]
  }],
  ["path448", {
    storyText: "The mob looks around in fear, anticipating the swift sword of the military. Realizing that no one is coming to save you, they are emboldened, and press forward in a hateful frenzy. Collectively, they stab you a few times, chop off your foot, and throw you back into your burning house.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path441',
      },
    ]
  }],
  ["path449", {
    storyText: "You chase after the man into a plaza and give him back the crown. From the streets, someone notices the ruler holding his newly-returned crown, and yells “THERE HE IS!” Out of nowhere, a mob comes streaming into the plaza, mercilessly beats him, and drags his bloodied body away. His crown comes rolling to a stop at your feet. You:",
    buttons: [
      {
        btnTxt: "Accept fate and put it on your head",
        path: 'path436',
      },
      {
        btnTxt: "Leave this accursed city",
        path: 'path450',
      },
      {
        btnTxt: "Give the crown to some random dude",
        path: 'path451',
      },
    ]
  }],
  ["path450", {
    storyText: "You get out of Italy as fast as you can. While returning back to the time machine, you can see those same travelers that you did at the start of your journey. You:",
    buttons: [
      {
        btnTxt: "Approach the travelers",
        path: 'path402',
      },
      {
        btnTxt: "Go back to the time machine",
        path: 'path434',
      },
    ]
  }],
  ["path451", {
    storyText: "You pass the crown off to someone else and they have just enough time to catch your name before you disappear around a corner. You resolve to live as a citizen and watch as that dude you gave the crown to gains power and establishes his domain. One day, while walking from the market, you gasp as you feel a sharp sting in your stomache - you have been stabbed. As you fall in a puddle of blood, your assassin stands over you and explains that a previous owner of the crown must not be allowed to live and then departs as your vision blurs into darkness.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path452", {
    storyText: "You are contacted by the neighboring province of Bologna. They want to establish friendly relations and are offering to be an ally in case of a future war. You make mutual agreements and things go well. Trade has made both of you richer and you haven’t had to worry about defending yourself from Bologna. Months pass and you hear news that Bologna is under attack from the Florentines. You decide to:",
    buttons: [
      {
        btnTxt: "Honor your agreement and help Bologna",
        path: 'path454',
      },
      {
        btnTxt: "Betray Bologna and help the Florentines",
        path: 'path453',
      },
      {
        btnTxt: "Do nothing and see how it all plays out",
        path: 'path473',
      },
    ]
  }],
  ["path453", {
    storyText: "Now an avid scholar of Machiavelli,  you realize that you must become like a lion and a fox - demonstrating both strength and guile. You unashamedly ignore Bologna’s pleas for help and instead join forces with the Florentines. Bologna is destroyed, but you gained a new, more powerful ally. Next you decide to:",
    buttons: [
      {
        btnTxt: "Ditch the crown and go someplace else",
        path: 'path472',
      },
      {
        btnTxt: "Build a fortress",
        path: 'path457',
      },
      {
        btnTxt: "Determine allocation of funds",
        path: 'path465',
      },
    ]
  }],
  ["path454", {
    storyText: "Just when Bologna thought all was lost, your army comes sweeping in and drives out the Florentines. You have swiftly shown who your allies are and Bologna has a strengthened obligation towards you. Your people praise your fame as a great man of intellect and military prowess. You return home with Bolognan gifts and Florentian treasures. You decide to:",
    buttons: [
      {
        btnTxt: "Build a fortress to place your treasures",
        path: 'path457',
      },
      {
        btnTxt: "Determine what to do with your newly acquired wealth",
        path: 'path465',
      },
      {
        btnTxt: "Give up the throne and become a vagabond",
        path: 'path455',
      },
    ]
  }],
  ["path455", {
    storyText: "You bestow the throne upon a faithful heir and leave the city, never to return. You think back on all that you accomplished with a sense of pride - along with a nagging sense of doubt that perhaps you were more cruel than you should have been. In any case, you survived, no, thrived as a ruler. As you travel you see a peculiar sign pointing to two destinations. To the northwest it reads: To Time Machine. To the northeast, it reads: To Strange Travelers. Blindly trusting the sign’s directions you:",
    buttons: [
      {
        btnTxt: "Go to the time machine",
        path: 'path434',
      },
      {
        btnTxt: "Go to the strange travelers",
        path: 'path402',
      },
      {
        btnTxt: "Don’t trust the sign. Trust your own sense of direction instead.",
        path: 'path456',
      },
    ]
  }],
  ["path456", {
    storyText: " Unfortunately, it would seem that the sign was telling the truth (imagine that). You get lost in the Italian wilderness and travel for 50 years, looking for the time machine. One day, as you approach crest a ridge you notice the shining glint of a large metal object, waaay down at the bottom of a basin. In a start you realize that it is a time machine - not yours, but a time machine all the same. You sprint towards your salvation - as fast as your old and feeble knees can take you - and trip on a rock. Rolling down the rest of the way, crashing through brush and tree, you finally slow to a stop and are too injured to move. You die 2 days later, eying your mechanism of escape, but never being able to reach it.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],
  ["path457", {
    storyText: "Against the advice of Machiavelli’s pamphlet, you build a fortress because, hey! It’s a fortress! Why not? You feel very cool for several weeks and replay scenes from Lord of the Rings in your head. You practice shooting a bow and pretend you are Legolas. However, in focusing so much on building your fortress you have forgotten to regard your people. They hate you now. Worse still, a foreign army is invading your lands and you worry they may overpower your military. You decide to:",
    buttons: [
      {
        btnTxt: "Hire foreign mercenaries",
        path: 'path458',
      },
      {
        btnTxt: "Trust your own people with arms",
        path: 'path464',
      },
      {
        btnTxt: "Hide in your fortress till things blow over",
        path: 'path459',
      },
    ]
  }],
  ["path458", {
    storyText: "The mercenaries take your money and then abandon you when the fighting gets close. Those mercenaries that do not desert take more money from the opposing side and join their forces, further strengthening the opponent. Your army is slaughtered and you are left with a small guard in your fortress. You decide to:",
    buttons: [
      {
        btnTxt: "Hide in a secluded room",
        path: 'path459',
      },
      {
        btnTxt: "Make a break for it and try to escape",
        path: 'path460',
      },
    ]
  }],
  ["path459", {
    storyText: "You hide in your fortress for several minutes, praying that the structural engineering is as capable as the movies imply. In a start, you hear the fortress gates opening up and you realize that your own people let the enemy in. Terrified, you await your fate, praying you won’t be found. Minutes later, you see shadows approaching. You think of running, but find that your feet refuse to move. You are grabbed by the enemy and subsequently beheaded.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path460", {
    storyText: "You grab a rope and throw it over the back of the fortress. Incredibly, the enemy forces only watch the front and so you are able to climb out and sneak away. With limited options you:",
    buttons: [
      {
        btnTxt: "Return to your time machine in defeat",
        path: 'path434',
      },
      {
        btnTxt: "Go in search of a fabled “perfect society”",
        path: 'path462',
      },
      {
        btnTxt: "Take your own life in despair",
        path: 'path461',
      },
    ]
  }],
  ["path461", {
    storyText: "You died. \n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path462", {
    storyText: "You travel for days, listening to whispers and following rumors of rumors. You finally meet a man named Hythloday who promises that he can take you to this mysterious land. You:",
    buttons: [
      {
        btnTxt: "Gladly accept and follow him",
        path: 'path463',
      },
      {
        btnTxt: "Say no thanks and walk away",
        path: 'path431',
      },
    ]
  }],
  ["path463", {
    storyText: "Eventually, you both arrive at your destination: a strange island shaped like a moon with inhabitants who call themselves Utopians. You are given local attire to blend in, and then examine your surroundings. Most people are dressed in plain clothes and are engaged in daily tasks. However, there are a few people adorned with gold. You decide to:",
    buttons: [
      {
        btnTxt: "Talk to the important rich folk",
        path: 'path426',
      },
      {
        btnTxt: "Talk to a more plain resident",
        path: 'path429',
      },
      {
        btnTxt: "Ignore the people and keep exploring",
        path: 'path405',
      },
    ]
  }],
  ["path464", {
    storyText: "Your citizens are at first surprised, then honored that you would trust them with weapons. They gather round your fortress, fortify your defenses, and support the military, ultimately fighting off the foreign invaders. You sigh in relief, taking in the events of the day. Hoping to move on less dramatic aspects of ruling you:",
    buttons: [
      {
        btnTxt: "Take a look into foreign affairs",
        path: 'path452',
      },
      {
        btnTxt: "Determine what to do with all your money",
        path: 'path465',
      },
      {
        btnTxt: "Give up the crown. That’s enough ruling for a long time…",
        path: 'path455',
      },
    ]
  }],
  ["path465", {
    storyText: "You walk down to your treasury and smile as you consider the wealth obtained through taxes, trade, and military pursuits. Before this whole time machine business, you were making minimum wage! Now look at yourself: you are rolling in the dough. You consider what you should do with all this money and decide to:",
    buttons: [
      {
        btnTxt: "Give back to the people, liberally",
        path: 'path466',
      },
      {
        btnTxt: "Be parsimonious and save the money",
        path: 'path471',
      },
      {
        btnTxt: "Drop gold coins like rain on your face",
        path: 'path470',
      },
    ]
  }],
  ["path466", {
    storyText: "You spend your money without any thought and the people love you for it. Just the other day, there was a crowd cheering as you tossed golden coins into it. But wait. Suddenly you are almost dry - there’s nothing left. You are unable to pay expenses and debts, and are forced to raise taxes. Your people begin to murmur and claim you are unfit to rule. As you witness everything unfold before you, you decide to:",
    buttons: [
      {
        btnTxt: "Host an extravagant party to cheer people up",
        path: 'path467',
      },
      {
        btnTxt: "Ditch the crown and hope nobody notices",
        path: 'path469',
      },
      {
        btnTxt: "Switch to extreme frugality and try to build up a reserve",
        path: 'path468',
      },
    ]
  }],
  ["path467", {
    storyText: "You hire the best planners your limited funds can buy and do your best to be the hostest-with-the-mostest. However, despite your planners best efforts, things do not go well. The attendees view their surroundings with disgust and hold you in contempt. You are no longer fit to rule and they have decided that you are replaceable. Overnight, you are overthrown and live the rest of your life trying to hide your face and live in anonymity.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
  ["path468", {
    storyText: "Despite trying to reclaim losses and accumulate funds, the people hate you even more. The city is falling apart and you seem to be doing nothing about it. They accuse you of wasting money on things that don’t matter, while closing the purse where it is needed. Realizing that you made too many mistakes to be forgiven, you quietly slip out of town and do your best not to be noticed. ",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path444',
      },
    ]
  }],
  ["path469", {
    storyText: "You come up with a plan to free yourself from these responsibilities. You wait until night, and creep into the throne room. You set the crown on the thrown and leave a note saying “sorry I was a bad prince :(“ Feeling a weight lift from your shoulder, you skip off into the streets, do a heel click, and disappear from the city, never to return. Days later, while traveling, you see a peculiar sign pointing to two destinations. To the northwest it reads: To Time Machine. To the northeast, it reads: To Strange Travelers. Blindly trusting the sign’s directions you:",
    buttons: [
      {
        btnTxt: "Go to the time machine",
        path: 'path434',
      },
      {
        btnTxt: "Go to the strange travelers",
        path: 'path402',
      },
      {
        btnTxt: "Don’t trust the sign. You were never trustworthy yourself, so why would a sign be?",
        path: 'path456',
      },
    ]
  }],
  ["path470", {
    storyText: "Unsatisfied, you realize that dropping coins on your face wasn’t as cool as you thought it would be. Instead, it just kind of hurt. Looking around, you realize you still probably should do something with all this money and resolve to:",
    buttons: [
      {
        btnTxt: "Build a fortress with all this gold",
        path: 'path457',
      },
      {
        btnTxt: "Liberally give back to the people",
        path: 'path466',
      },
      {
        btnTxt: "Save it for a rainy day",
        path: 'path471',
      },
    ]
  }],
  ["path471", {
    storyText: "The people come to know you as an extreme saver, and at first are upset. Despite begging for frivolous changes in the city, you don’t hear their cries and instead insist on the need for frugality. Eventually, you earn you a grudging respect from the population as they realize their province’s power and affluence is growing. They may not like you, but they respect you and the decisions you make. Confident in your ability to make decisions, you:",
    buttons: [
      {
        btnTxt: "Move on and address foreign affairs",
        path: 'path452',
      },
      {
        btnTxt: "Decide to explore elsewhere",
        path: 'path455',
      },
    ]
  }],
  ["path472", {
    storyText: "You have had enough with ruling. It was fun for a while, but now it is just more work than it’s worth. So, you devise a plan to escape. After supporting the Florentians against the Bolognans, you are invited to visit Florence and you see your chance to escape. You graciously accept the invitation, party it up in Florence and make some new friends. However, rather than return to your province, you instead vanish without a word. While your men are still looking for you in Florence, you are already long gone, beginning your next journey of exploration. Weighing the options in your mind, you:",
    buttons: [
      {
        btnTxt: "Decide to go to a different time period",
        path: 'path434',
      },
      {
        btnTxt: "Go search for that “perfect society” you heard about",
        path: 'path462',
      },
    ]
  }],
  ["path473", {
    storyText: "The Florentines overwhelmingly destroy Bologna and turn their focus on you. Realizing you have no allies, you try to defend yourself and epically fail. Your city is ransacked and pillaged. You are beheaded and consequently, die.\n\nTHE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ]
  }],
])