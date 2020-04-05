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
        path: 'path201',
      },
      {
        btnTxt: "turn the knob to 700",
        path: 'path301',
      },
      {
        btnTxt: "turn the knob to 504",
        path: 'path401',
      },

    ]
  }],


  /*
  ------------------------------------------------
  Start of 370 timeline
  ------------------------------------------------
  */



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
    storyText: "You start pushing buttons on the time machine, and it lights up and makes time-machiney sounds. The guy who was trying to you freaks out and runs away. A few seconds later, you’re back where you started. You decide to:",
    buttons: [
      {
        btnTxt: "pick another setting. What's the worst that could happen? Turn th knob to 950.",
        path: 'path201',
      },
      {
        btnTxt: "walk away as fast as you can! You're done with time travel!",
        path: 'ignore1',
      },
      {
        btnTxt: "give the machine one more chance; turn the knob to 700",
        path: 'path301',
      },
      {
        btnTxt: "turn the knob to 504",
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
    storyText: "You keep walking and the men don’t follow you; as you're continuing toward the market, you see a younger man struggling to hurry in the other direction while carrying a goat and a pile of papers. You decide to:",
    buttons: [
      {
        btnTxt: "Help him; wouldn't you want someone to help you?",
        path: 'path134',
      },
      {
        btnTxt: "ignore him; you don't help weird people.",
        path: 'path182',
      },
    ]
  }],


  ["path182", {
    storyText: "Eventually, you reach the market. As you’re looking over the merchandise, you encounter a middle-aged balding man who looks friendly. You decide to:",
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
        path: 'path110',
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
    storyText: "You nearly get caught, but you make it out – barely! You eat what you were able to grab on the way out and head out into the countryside. You steal whenever you need food, but after a few weeks, there’s a dry spell in your pickings. You eventually sneak onto another farm with a chicken yard. You decide to:",
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
    storyText: "Now that you know your way around a little, you can find your way around well enough. After a few hours, though, you need to figure out what to do. You decide to:",
    buttons: [
      {
        btnTxt: "wind your way back to the market; maybe you'll find something cool there. Also, take that goat to barter with; that might help!",
        path: 'path136',
      },
      {
        btnTxt: "head out to the countryside; maybe you can find a place to stay on a farm somewhere.",
        path: 'path167',
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
    storyText: "As you go to offer your help, the man freaks out and drops both his goat and his papers, and runs away. You see him duck into a house a few dozen yards up the road. You decide to:",
    buttons: [
      {
        btnTxt: "grab the goat before it runs away! And pick up those papers.",
        path: 'path135',
      },
      {
        btnTxt: "leave the goat and the papers and keep walking to the market; this took a direction you were unprepared for.",
        path: 'path182',
      },
    ]
  }],

  ["path135", {
    storyText: "You grab the goat before it’s able to get very far. It kind of freaks out -- apparently it was super attached to that guy. You also pick up the papers the guy dropped. You decide to:",
    buttons: [
      {
        btnTxt: "take the goat to the market to trade for food!",
        path: 'path136',
      },
      {
        btnTxt: "go knock on the guy's door and give him the papers and his goat back.",
        path: 'path141',
      },
      {
        btnTxt: "take the goat somewhere safe and eat it; you're starving!",
        path: 'path1472',
      },
    ]
  }],

  ["path136", {
    storyText: "You walk into the market with the goat, and as you’re passing the stalls, you hear a voice start yelling in your direction. Then you see a pair of soldiers come towards you looking rather hostile. Thinking on your feet, you realize that the guy yelling at you probably thinks you stole the goat! You decide to:",
    buttons: [
      {
        btnTxt: "run away with the goat!",
        path: 'path1472',
      },
      {
        btnTxt: "run away but leave the goat behind; try and grab some food on your way out!",
        path: 'path122',
      },
      {
        btnTxt: "stay and talk your way out of this.",
        path: 'path140',
      },
    ]
  }],

  ["path140", {
    storyText: "You try and explain what’s going on -- you were just taking the goat on a walk, after all; you weren’t stealing it, right?! They don’t listen to anything you say! Instead they say some aggressive-sounding things and you wind up in a jail. That night, though, you think you might escape. You decide to:",
    buttons: [
      {
        btnTxt: "sneak out and head for the hills!",
        path: 'path106',
      },
      {
        btnTxt: "stay put! You'll make it out of this.",
        path: 'path133',
      },
    ]
  }],

  ["path141", {
    storyText: "You go to knock on the door, but it opens before you get the chance. The guy looks at you and starts speaking -- not that you understand what he’s saying. He takes the goat and ties it up to a post outside the house. Then he takes the papers and invites you in. You decide to:",
    buttons: [
      {
        btnTxt: "accept the invitation; after all, you could use a break.",
        path: 'path142',
      },
      {
        btnTxt: "decline the invitation and get to the market; you don't see this ending well...",
        path: 'path182',
      },
    ]
  }],

  ["path142", {
    storyText: "You wind up staying with this man -- Augustine, you learn his name is -- for a few weeks. He teaches you the language, and the pair of you develop a more intimate relationship. One day, after having sex, you remember that pile of papers Augustine was carrying when you first met. You decide to:",
    buttons: [
      {
        btnTxt: "forget about them; they probably weren't important.",
        path: 'path1471',
      },
      {
        btnTxt: "ask him about the papers.",
        path: 'path143',
      },
    ]
  }],

  ["path143", {
    storyText: "Augustine tells you that the papers were copies of letters written by Christians in Northern Africa that he was delivering to one Jerome. Augustine was in the process of conversion to Christianity and was coming to meet him for the first time. He tells you that when you met, he was so entranced by your beauty that he panicked. As he was running inside, he thought to himself: 'If that lady picks up the letters before getting the goat, I will know that she is chosen to God and inclined towards spiritual things. If she grabs the goat before the papers, I will know that she is a lustful person and sent by Satan to tempt me.' 'But,' he continues, 'when you knocked at my door I allowed myself to be led away from God’s path.' After hearing all this, you decide to:",
    buttons: [
      {
        btnTxt: "get up and leave; this guy is weird. Besides, there's more of the city to explore!",
        path: 'path131',
      },
      {
        btnTxt: "tell Augustine to forget about these superstitious fables!",
        path: 'path144',
      },
      {
        btnTxt: "tell Augustine he should not have strayed from God's path, and that you will help him get back on!",
        path: 'path146',
      },
    ]
  }],

  ["path144", {
    storyText: "Augustine seems content to forget about it, at least for the moment. After another week together, though, he tells you he’s leaving to return to Africa. Apparently, he’s engaged to be married and he’s decided that he needs to abandon sin and devote his life to God. So, he’s leaving you. A little perplexed, you decide to:",
    buttons: [
      {
        btnTxt: "ask to go with him.",
        path: 'path145',
      },
      {
        btnTxt: "agree that it's a good thing; besides, you were getting bored with him anyhow. NOw you can go exploring!",
        path: 'path131',
      },
      {
        btnTxt: "freak out and start screaming at him!",
        path: 'path145',
      },
    ]
  }],

  ["path145", {
    storyText: "Augustine seems to ignore you; he doesn’t really react...which is awkward. Not really knowing what else to do, you sign on with a brothel and make money that way for years. At some point, you come across a text by Augustine about his past, sinful life and the nature of women, and though he doesn’t name you explicitly, you know he’s talking about you. In any case, you contract a mysterious disease -- probably from your sketchy profession -- and die in squalor. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path146", {
    storyText: "Augustine looks at you quizzically and says, “What would you know of the things of God? You are not a virgin!” He seems grateful for your offer, but seems like he would rather forget about it. Then, after another week together, he tells you he’s leaving to return to Africa. Apparently, he’s engaged to be married and he’s decided that he needs to abandon sin and devote his life to God. So, he’s leaving you. A little perplexed, you decide to:",
    buttons: [
      {
        btnTxt: "ask to go with him.",
        path: 'path145',
      },
      {
        btnTxt: "agree that it's a good thing; besides, you were getting bored with him anyhow. NOw you can go exploring!",
        path: 'path131',
      },
      {
        btnTxt: "freak out and start screaming at him!",
        path: 'path145',
      },
    ]
  }],

  ["path1471", {
    storyText: "A few weeks later, Augustine leaves randomly. It was fun while it lasted, you figure... Now, you decide to:",
    buttons: [
      {
        btnTxt: "wind your way bck to the market; maybe you'll find something cool there. Also, that goat's probably still there; take it to barter with -- that might help!",
        path: 'path136',
      },
      {
        btnTxt: "head out to the countryside; maybe you can find a place to stay on a farm somewhere.",
        path: 'path156',
      },
      {
        btnTxt: "start walking towards the business center; you haven't really explored there yet.",
        path: 'path132',
      },
    ]
  }],

  ["path1472", {
    storyText: "You take your goat out of the city, find a quiet place, build a fire, and eat the goat. You’re a little sad that the goat is dead, but now your stomach is full. You have a lot of meat left over, though. You decide to:",
    buttons: [
      {
        btnTxt: "find a cave to stay in and haul the rest of the goat with you.",
        path: 'path148',
      },
      {
        btnTxt: "take the rest of the goat and walk on the road towards what you presume is the next town",
        path: 'path158',
      },
      {
        btnTxt: "build an altar and sacrifice the rest of your goat to the Roman gods.",
        path: 'path155',
      },
    ]
  }],

  ["path148", {
    storyText: "You see some hills that you hope you can find a cave to stay in. You walk that way with the remains of your goat, but as you’re nearing them, you hear howling. Within a few minutes, you realize a pack of wolves has smelled your goat, and they’re hungry too! You decide to:",
    buttons: [
      {
        btnTxt: "fight the wolves for your food! You have...a knife?",
        path: 'path149',
      },
      {
        btnTxt: "leave your goat and climb the nearest tree!",
        path: 'path150',
      },
    ]
  }],

  ["path149", {
    storyText: "That was not a good idea. Before too long, it would be hard to tell between your corpse and the goat's remains. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path150", {
    storyText: "After a long night in the tree, you wake up and see no trace of the wolves -- or the goat! You get down and keep looking for your cave. When you find one that looks suitable, it’s already inhabited by a hermit. You decide to:",
    buttons: [
      {
        btnTxt: "talk to the hermit.",
        path: 'path151',
      },
      {
        btnTxt: "ignore the hermit; he's weird!",
        path: 'path154',
      },
    ]
  }],

  ["path151", {
    storyText: "The man smells bad but knows the surrounding area. He apparently believes that being out in the wilderness brings him closer to God; you’re not sure how that makes sense, though. In any case, he offers to let you share his cave, provided that you do all of the hard work, so he can meditate. You decide to:",
    buttons: [
      {
        btnTxt: "take his offer; it can't be that bad, can it?",
        path: 'path152',
      },
      {
        btnTxt: "find another cave; this guy smells really bad!",
        path: 'path153',
      },
    ]
  }],

  ["path149", {
    storyText: "You are an early Christian mystic. You live, learning of the nature of God through your deprivation and suffering. And you also take care of that smelly man. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path153", {
    storyText: "You find another cave after a few hours of searching. You're exhausted, and hole up in there for the night, but apparently you didn’t check it carefully enough. In the middle of the night, you wake up long enough to realize that you were sleeping in a bear’s den. Then you die! THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path154", {
    storyText: " After meeting all these weird people, you’re kind of done being here. You still remember where you left the time machine, so you go back there and luckily it looks like it still works. You decide to: ",
    buttons: [
      {
        btnTxt: "pick another setting. What's the worst that could happen? Turn th knob to 950.",
        path: 'path201',
      },
      {
        btnTxt: "go back home! You're done with time travel!",
        path: 'path001',
      },
      {
        btnTxt: "give the machine one more chance; turn the knob to 700",
        path: 'path301',
      },
      {
        btnTxt: "turn the knob to 504",
        path: 'path401',
      },
    ]
  }],

  ["path155", {
    storyText: "You spend hours building your altar, and you’re sure Jupiter’s grateful for your sacrifice. But now you’re hungry again and you have no food. You decide to:",
    buttons: [
      {
        btnTxt: "try and find a farm with more animals you can steal.",
        path: 'path156',
      },
      {
        btnTxt: "go back and find the time machine; McDonald's is clling your name!",
        path: 'path154',
      },
      {
        btnTxt: "go foraging for food; maybe you can find some fruit or roots.",
        path: 'path157',
      },
    ]
  }],

  ["path156", {
    storyText: "You wander on the road and eventually make it to a farm. In the middle of the night, you sneak onto it and get a closer look at the chicken yard. You decide to:",
    buttons: [
      {
        btnTxt: "steal a chicken!",
        path: 'path123',
      },
      {
        btnTxt: "leave the chickens; you've got a bad feeling about this...",
        path: 'path106',
      },
    ]
  }],

  ["path157", {
    storyText: "Apparently, you should have paid more attention in your botany class. You find a bunch of somewhat edible-looking mushrooms, but you’re not sure if you should eat them or not. You decide:",
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

  ["path158", {
    storyText: "On the road to the next town, you cross paths with a vagabond who looks very hungry. You don’t speak his dialect, but he seems to want to trade his sword for the rest of your goat. You decide to:",
    buttons: [
      {
        btnTxt: "make the trade.",
        path: 'path159',
      },
      {
        btnTxt: "refuse the vagabond; you might want to eat that later!",
        path: 'path160',
      },
    ]
  }],

  ["path159", {
    storyText: "With your new weapon, you decide to try it out on something. But you're still kind of scared of people. You decide to:",
    buttons: [
      {
        btnTxt: "challenge the next person you meet to mortal combat; overcome your fears!",
        path: 'path161',
      },
      {
        btnTxt: "go back to the time machine with your sword as a souvenir",
        path: 'path154',
      },
      {
        btnTxt: "wander back into the wilderness and try and rough it on your own, once you find some more food, that is.",
        path: 'path165',
      },
    ]
  }],

  ["path160", {
    storyText: "You really shouldn't argue with a guy with a sword. He takes your goat anyways and kills you for good measure. You die! THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path161", {
    storyText: " As you walk along the road, a pair of men confront you. You don’t even have to pick a fight; these are highwaymen, and want to rob you! You get ready to fight, and think about how you want to take these guys down. You decide to:",
    buttons: [
      {
        btnTxt: "stab one of them in the chest.",
        path: 'path162',
      },
      {
        btnTxt: "swing at one of their heads.",
        path: 'path163',
      },
      {
        btnTxt: "run away; this was a BAD IDEA!",
        path: 'path164',
      },
    ]
  }],

  ["path162", {
    storyText: "Yeah, you’re not as strong as you thought; they knock your blade aside, grab you, and take you hostage. They talk about ransoming you for a while, but when you get them to understand that nobody in this time period cares about you, they decide to make you a sex slave. That’s how you live the rest of your short life; not super fun. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path163", {
    storyText: "As you swing your sword, one of the men stabs you in the chest. You should have tried to stab. Maybe next time. Wait, there won’t be a next time! You’re dead! THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path164", {
    storyText: "You run away as fast as you can! You drop your sword to run faster, and barely make it out. You decide to:",
    buttons: [
      {
        btnTxt: "walk back to the city and go to the market. You liked the city better than this, and there's probably food at the market!",
        path: 'path182',
      },
      {
        btnTxt: "keep wandering around and make it on your own; how hard can it be?",
        path: 'path156',
      },
    ]
  }],

  ["path165", {
    storyText: "To get more food, you decide to find a farmer who can give you work. You stop a few people, but they are unwilling to help you. Eventually, you meet a good looking man who speaks a dialect you can’t understand, but it seems like he gets what you’re saying. He invites you to follow him. You decide to: ",
    buttons: [
      {
        btnTxt: "follow him; this is what you wanted!",
        path: 'path103',
      },
      {
        btnTxt: "refuse his offer; you decide that you don't actually want to work, and besides, if you follow the man back maybe you can steal from him!",
        path: 'path166',
      },
    ]
  }],

  ["path166", {
    storyText: "You follow the man from a distance, and follow him back to his farm. He owns a vineyard, and after gorging yourself on grapes, you see his chicken pen. You think that bringing a chicken with you would give you some food security. You sneak close and decide to:",
    buttons: [
      {
        btnTxt: "steal a chicken!",
        path: 'path123',
      },
      {
        btnTxt: "leave the chickens; you're not a thief.",
        path: 'path106',
      },
    ]
  }],
  ["path167", {
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
  Start of 1070 timeline
  ------------------------------------------------
  */
  ["path201", {
    storyText: "You are now in the year 1070 AD. You look around and find yourself in a grove of trees in the mountains. You are now a male knight in shining armor, and you see an army marching by farther down in a pass between the mountains. From your vantage point you also see the sea in the distance. You decide to:",
    buttons: [
      {
        btnTxt: "cover up the time machine and then set off towards the army",
        path: 'path203',
      },
      {
        btnTxt: "immediately go towards the army before they leave.",
        path: 'path204',
      },
      {
        btnTxt: "cover up the time machine and head towards the sea.",
        path: 'path220',
      },
    ]
  }],

  ["path203", {
    storyText: "By the time you get down there the army has split from the rearguard, and the main army is nowhere in sight. The rearguard is far in the distance, but you see a small group of traders coming by on a wagon. You decide to:",
    buttons: [
      {
        btnTxt: "go back to the time machine and go somewhere else. ",
        path: 'path232',
      },
      {
        btnTxt: "run to catch up to the rearguard.",
        path: 'path221',
      },
      {
        btnTxt: "talk to the traders.",
        path: 'path217',
      },
    ]
  }],

  ["path204", {
    storyText: "You go down to find a camped army led by an old man on a white horse. A small party is leaving from the main army. You decide to:",
    buttons: [
      {
        btnTxt: "march with the army in silence.",
        path: 'path219',
      },
      {
        btnTxt: "talk to a warrier next to you as you march with the army.",
        path: 'path227',
      },
      {
        btnTxt: "follow the party that's leading.",
        path: 'path205',
      },
    ]
  }],

  ["path205", {
    storyText: "As you follow the party you decide to:",
    buttons: [
      {
        btnTxt: "sneak closer to figure out what is going on.",
        path: 'path226',
      },
      {
        btnTxt: "stay far away so you don't get caught.",
        path: 'path206',
      },
      {
        btnTxt: "head towards the sea.",
        path: 'path220',
      },
    ]
  }],

  ["path206", {
    storyText: "You are able to eat some game you catch along the way, but you end up shedding your extremely heavy armor. You keep a couple lighter things and your sword. After a few days you approach a city called Saragossa where everyone speaks Spanish. You know a little bit of Spanish from a few classes you took in high school. But, the party starts to disappear into the crowds. You decide to:",
    buttons: [
      {
        btnTxt: "follow the party.",
        path: 'path211',
      },
      {
        btnTxt: "head towards a nearby market.",
        path: 'path216',
      },
      {
        btnTxt: "leave the city.",
        path: 'path207',
      },
      {
        btnTxt: "head out of the city towards the sea.",
        path: 'path220',
      },
    ]
  }],

  ["path207", {
    storyText: "You are now a wild man living in the woods with nowhere to go, but there's still the time machine! You decide to:",
    buttons: [
      {
        btnTxt: "continue living in the mountains",
        path: 'path210',
      },
      {
        btnTxt: "head towards the sea.",
        path: 'path216',
      },
      {
        btnTxt: "go back to the time machine.",
        path: 'path208',
      },
      {
        btnTxt: "follow the road.",
        path: 'path240',
      },
    ]
  }],

  ["path208", {
    storyText: "Did you cover or hide the time machine when you first landed?",
    buttons: [
      {
        btnTxt: "Yes!",
        path: 'path232',
      },
      {
        btnTxt: "No...",
        path: 'path229',
      },
    ]
  }],

  ["path209", {
    storyText: "You drop the sword and any armor you had left in your hurry to follow. the tracks eventually disappear and you realize that the people must have used your time machine to get away. You are now stuck without any resources and you die of starvation in the mountains. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path210", {
    storyText: "Eventually you die of starvation; you do not have enough resources to live more than a couple days by yourself in the wild. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path211", {
    storyText: "The party heads toward the palace and you are unable to follow them through the gates. You decide to:",
    buttons: [
      {
        btnTxt: "turn right.",
        path: 'path216',
      },
      {
        btnTxt: "turn left.",
        path: 'path212',
      },
    ]
  }],

  ["path212", {
    storyText: "As you walk through the city a group of people approach you. They start talking very fast and you don't know what they are saying, but they keep pointing towards the armor and sword you still have. You decide to:",
    buttons: [
      {
        btnTxt: "give away your stuff.",
        path: 'path213',
      },
      {
        btnTxt: "keep moving.",
        path: 'path215',
      },
    ]
  }],

  ["path213", {
    storyText: "They take everything gratefully and start to walk away. You decide to:",
    buttons: [
      {
        btnTxt: "follow them.",
        path: 'path217',
      },
      {
        btnTxt: "go the other direction.",
        path: 'path214',
      },
    ]
  }],

  ["path214", {
    storyText: "You find a market, but you don't have anything to trade with. You try to steal some food, but you are eventually taken to jail and severely beaten. You die a beggar in a city called Saragossa. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path215", {
    storyText: "They take everything they wanted by force, severely beating you in the process and leaving you to die.",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path216", {
    storyText: "You are now in a beautiful marketplace. You are able to trade some of your armor for food. You decide to:",
    buttons: [
      {
        btnTxt: "continue to talk to the people you bought the delicious food from.",
        path: 'path217',
      },
      {
        btnTxt: "walk around the market some more.",
        path: 'path210',
      },
      {
        btnTxt: "leave the market and head towards the sea.",
        path: 'path220',
      },
    ]
  }],

  ["path217", {
    storyText: " You are able to talk to them and work out a trade. In exchange for your armor and sword you work for them and travel with them. After travelling with them for a while, you eventually make it to a country called Samarkand. You decide to:",
    buttons: [
      {
        btnTxt: "stay in Samarkand.",
        path: 'path250',
      },
      {
        btnTxt: "continue travelling with the traders.",
        path: 'path218',
      },
    ]
  }],

  ["path218", {
    storyText: "You spend the rest of your life travelling. You end up getting married and establish yourself as a good trader. But the Christian faith believes that you are going to hell for your fascination with commerce. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path219", {
    storyText: "After marching for a while in silence with the main army, you hear a faint horn blowing. Suddenly the army turns around. As you continue marching in the other direction you see that the army is approaching a battlefield where one army is fleeing and the army is dead. You decide to:",
    buttons: [
      {
        btnTxt: "stay with the army.",
        path: 'path228',
      },
      {
        btnTxt: "turn around and fade into the woods.",
        path: 'path207',
      },
    ]
  }],

  ["path220", {
    storyText: "As you are travelling through the wilderness you run into a group of small wooden buildings. Children are running around, speaking a language you don’t understand. Some women are bustling about and you approach one of them. She backs away. But, a man now approaches you. He starts talking, and you can pick out some words, but you can tell he wants you to follow him. You can see there’s not many other places to go, so you follow him to another bigger building where all of the men are drinking and eating. You can kind of understand some random words that they are saying, or you think you can. The man from the head of the table approaches you and the man who led you here starts to walk away. You decide to:",
    buttons: [
      {
        btnTxt: "talk to the man in charge.",
        path: 'path233',
      },
      {
        btnTxt: "walk out of the building and run away!",
        path: 'path210',
      },
      {
        btnTxt: "sit down at the table with all the people eating.",
        path: 'path234',
      },
    ]
  }],

  ["path221", {
    storyText: "You are now following Roland who leads you into a trap. As you are marching, another army approaches. You decide to:",
    buttons: [
      {
        btnTxt: "stay with Roland.",
        path: 'path222',
      },
      {
        btnTxt: "leave the rearguard",
        path: 'path223',
      },
    ]
  }],

  ["path222", {
    storyText: "You fight to the death against the Spanish. The main army gets there toolate to help. But, the Archbisho said that you would be saved for fighting honorably, so you end up going to heaven. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path223", {
    storyText: "You leave into the woods and watch as Roland's rearguard starts fighting the Spanish. After everyone is dead, the main army approaches. You decide to:",
    buttons: [
      {
        btnTxt: "go join the main army.",
        path: 'path224',
      },
      {
        btnTxt: "continue waiting out of sight.",
        path: 'path225',
      },
    ]
  }],

  ["path224", {
    storyText: "Charlemagne's army thinks you are a traitor once the dust has settled, and you are drawn and quartered with Ganelon and his compatriots. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path225", {
    storyText: "You wait until the main army is gone. You are now living by yourself in the woods, but you see the army coming by again. You decide to:",
    buttons: [
      {
        btnTxt: "stay where you are.",
        path: 'path210',
      },
      {
        btnTxt: "go in the other direction.",
        path: 'path220',
      },
      {
        btnTxt: "join the army as it heads home",
        path: 'path230',
      },
    ]
  }],

  ["path226", {
    storyText: "You get too close to the party and they catch you sneaking around. You find out that the leader of the party is Ganelon. He decides to be genorous and let you either:",
    buttons: [
      {
        btnTxt: "go to the main army.",
        path: 'path219',
      },
      {
        btnTxt: "stay with them.",
        path: 'path224',
      },
    ]
  }],

  ["path227", {
    storyText: "You don't understand a the warrior's French. So, you just end up marching in silence. You decide to:",
    buttons: [
      {
        btnTxt: "go back to the time machine.",
        path: 'path208',
      },
      {
        btnTxt: "stay with the army.",
        path: 'path219',
      },
    ]
  }],

  ["path228", {
    storyText: "The rearguard has been killed by the pagan Spanish and you must avenge them. Charlemagne's army doesn't end up fighting much before they defeat the Spanish. Now you are free to go where you want. You decide to:",
    buttons: [
      {
        btnTxt: "go back to the time machine.",
        path: 'path208',
      },
      {
        btnTxt: "follow the army back home.",
        path: 'path230',
      },
    ]
  }],

  ["path229", {
    storyText: "You didn't cover up the time machine, and it has been stolen. You decide to:",
    buttons: [
      {
        btnTxt: "give up and go live in the mountains.",
        path: 'path210',
      },
      {
        btnTxt: "make your way to the sea.",
        path: 'path220',
      },
      {
        btnTxt: "hurry to follow the tracks left by the time machine.",
        path: 'path209',
      },
      {
        btnTxt: "head towards a nearby road.",
        path: 'path240',
      },
    ]
  }],

  ["path230", {
    storyText: "You begin to learn French and make friends in the army as you travel back to France with the army. Once you get to France, you run into some traders. You decide to:",
    buttons: [
      {
        btnTxt: "stay with one of your new friends.",
        path: 'path232',
      },
      {
        btnTxt: "leave with the traders.",
        path: 'path217',
      },
    ]
  }],

  ["path231", {
    storyText: "You settle down in France and practically become a part of your friend’s family. Eventually you get married and live out the rest of your life serving in the French army. You die in glory on the battlefield and go to paradise for serving the country.",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path232", {
    storyText: "You are at the time machine. you flip through the knobs and find out that everything is working just fine. You decide to:",
    buttons: [
      {
        btnTxt: "go home; you've had your fill of adventure",
        path: 'path001',
      },
      {
        btnTxt: "turn the knob to 1650",
        path: 'path101',
      },
      {
        btnTxt: "turn the knob to 700",
        path: 'path301',
      },
      {
        btnTxt: "turn the knob to 504",
        path: 'path401',
      },
    ]
  }],

  ["path233", {
    storyText: "The head man gestures toward your armor and sword. You decide to:",
    buttons: [
      {
        btnTxt: "take off your armor and offer it.",
        path: 'path235',
      },
      {
        btnTxt: "keep your armor on and clutch your sword; he probably wants to steal from you.",
        path: 'path236',
      },
    ]
  }],

  ["path234", {
    storyText: "The head man looks around, but there is a big enough crowd that he can’t really see you. You find out that everyone is pretty drunk and they don’t really care that you speak weirdly or you don’t look familiar. You start to pick up on some of the things that they are saying as you eat food laying around on the table. A woman comes around and gives everyone some of her drink. At the end of the night, people start to filter out of the hall. You decide to:",
    buttons: [
      {
        btnTxt: "fall asleep under the table.",
        path: 'path238',
      },
      {
        btnTxt: "follow one of the men you have been hanging out with.",
        path: 'path237',
      },
      {
        btnTxt: "leave and follow a nearby road",
        path: 'path240',
      },
    ]
  }],

  ["path235", {
    storyText: "The head man takes it, and smiles. He gestures for you to sit down next to him, though he keeps glancing nervously at your sword. You end up eating with him, and going to his home at the end of the night. Congratulations, you are now signed up as a warrior! The tribal king wants you to fight for him now. He gives you a place to stay and you start to learn the language. He and his knights offer combat training. You decide to:",
    buttons: [
      {
        btnTxt: "accept; he has been gracious to you.",
        path: 'path244',
      },
      {
        btnTxt: "refuse; you can't fight!",
        path: 'path243',
      },
    ]
  }],

  ["path236", {
    storyText: "The head man narrows his eyes and continues to gesture at your resources. You are confused and angry as he starts to shout at you. The men in the hall start to take notice and some of them get up and forcibly push you out of the building. You have nowhere to go, and this Germanic tribe has not accepted you. Because of territorialism, there isn’t another tribe within a reasonable distance and you do not have the stamina to make it back to where you were before. You die of starvation. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path237", {
    storyText: "The man you were with is nice enough to let you stay at his house for as long as you want. You start to learn the language, and you learn from this man how to hunt to support his wife and children. You make friends in the nomadic community as they travel around. You are occasionally called to fight some of the king’s battles, but with the help of your friends you are able to survive. One of his daughters is of a marriageable age, and he wants you to marry her. You decide to:",
    buttons: [
      {
        btnTxt: "marry his daughter",
        path: 'path248',
      },
      {
        btnTxt: "refuse to marry his daughter.",
        path: 'path247',
      },
    ]
  }],

  ["path238", {
    storyText: "Some women come in the next morning to make breakfast and find you sleeping in the mead hall. They scream and call for help. You try to reassure them, but many people come running. You are brought before the head man, who is apparently the king. You are not understood by anyone to determine whether you were attempting to hurt the women and steal or a good person, they throw you in a nearby lake to see if you will drown or float. You decide to:",
    buttons: [
      {
        btnTxt: "swim to stay afloat.",
        path: 'path242',
      },
      {
        btnTxt: "let yourself sink to the bottom.",
        path: 'path239',
      },
    ]
  }],

  ["path239", {
    storyText: "After a little bit of hanging out at the bottom of the lake, someone dives down to rescue you. Since you sunk, they determine that you are a good person, and so they let you stay with someone for the night. Turns out you met this person while you were eating last night. You decide to:",
    buttons: [
      {
        btnTxt: "get supplies the next morning and go back to the city.",
        path: 'path240',
      },
      {
        btnTxt: "stay with the family.",
        path: 'path237',
      },
    ]
  }],

  ["path240", {
    storyText: "As you are travelling you run into a group of people going the same way you are. You decide to:",
    buttons: [
      {
        btnTxt: "stay away; they'll probably hurt you.",
        path: 'path210',
      },
      {
        btnTxt: "approach them.",
        path: 'path241',
      },
    ]
  }],

  ["path241", {
    storyText: "These people are traders from France, just like Charlemagne’s army. They want to baptize you to the Christian faith. You decide to:",
    buttons: [
      {
        btnTxt: "let them baptize you and go with them.",
        path: 'path217',
      },
      {
        btnTxt: "continue on the way you were before.",
        path: 'path210',
      },
    ]
  }],

  ["path242", {
    storyText: "You stayed afloat, and to these people that means you were in the wrong. So, after getting out of the water you are hung for your crimes. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path243", {
    storyText: "The king of the tribe sees that you are useless, so you are kicked out into the village to fend for yourself. As you walk through the village you see one of the people you met on the first night that you ate in the mead hall. You decide to:",
    buttons: [
      {
        btnTxt: "approach him and ask for help.",
        path: 'path237',
      },
      {
        btnTxt: "take what the king gave you and head into the wilderness again.",
        path: 'path240',
      },
    ]
  }],

  ["path244", {
    storyText: "You are actually surprisingly good as combat! You fight many battles with and for the king, until you are a better warrior than he is. You become his best knight, and when he honorably dies on the battlefield one day, you take his place. But, he has a beautiful daughter. You decide to:",
    buttons: [
      {
        btnTxt: "marry the king's daughter.",
        path: 'path249',
      },
      {
        btnTxt: "don't marry the king's daughter.",
        path: 'path245',
      },
    ]
  }],

  ["path245", {
    storyText: "You lose your place as king because some of the villagers still think of you as an outsider. You are forced to live outside their community. You decide to:",
    buttons: [
      {
        btnTxt: "live on your own in the woods.",
        path: 'path246',
      },
      {
        btnTxt: "go back to the time machine.",
        path: 'path208',
      },
    ]
  }],

  ["path246", {
    storyText: "You are eventually let back into the village as a knight, but you have no chance to be warrior king. So, you live with another family. You decide to:",
    buttons: [
      {
        btnTxt: "live as a kind of outsider knight.",
        path: 'path247',
      },
      {
        btnTxt: "find someone to marry.",
        path: 'path248',
      },
    ]
  }],

  ["path247", {
    storyText: "You continue to fight honorably, and die a hero on the battlefield one day. But, you die alone, with no friends or family. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path248", {
    storyText: "You now live in fear that your new wife will poison you with her food, but you are for the most part happy. You have complete control of the household, and eventually you have a few kids with her and settle down. You eventually die honorably in battle. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path249", {
    storyText: "You can now take your place as king. You have some children with your new wife. The boys are all taught how to fight well from a young age so that they can take your place as king. The girls are eventually married off to other tribe’s princes and honorably act as peaceweavers. You die honorably in battle. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path250", {
    storyText: "After a few days of looking around and getting yourself more established in the country, you decide to:",
    buttons: [
      {
        btnTxt: "become a merchant.",
        path: 'path252',
      },
      {
        btnTxt: "become a fisherman.",
        path: 'path251',
      },
      {
        btnTxt: "go on the road again.",
        path: 'path218',
      },
    ]
  }],

  ["path251", {
    storyText: "One day as you are fishing you pull up a huge copper pot from the bottom of the sea. You decide to:",
    buttons: [
      {
        btnTxt: "hurry to sell it at the market.",
        path: 'path253',
      },
      {
        btnTxt: "open it to check what's inside.",
        path: 'path254',
      },
    ]
  }],

  ["path252", {
    storyText: "You learned a lot when you decided to travel with the traders and so you become a successful merchant. Your trade is going well so you can decide to:",
    buttons: [
      {
        btnTxt: "get married.",
        path: 'path261',
      },
      {
        btnTxt: "stay single.",
        path: 'path262',
      },
    ]
  }],

  ["path253", {
    storyText: "With your new money you are able to buy everything you need to either:",
    buttons: [
      {
        btnTxt: "purchase a merchant's business.",
        path: 'path252',
      },
      {
        btnTxt: "buy favor with the king.",
        path: 'path257',
      },
      {
        btnTxt: "get a nice wife.",
        path: 'path261',
      },
    ]
  }],

  ["path254", {
    storyText: "A demon comes out of the bottle. You decide to:",
    buttons: [
      {
        btnTxt: "try talking to it.",
        path: 'path256',
      },
      {
        btnTxt: "turn tail and run away.",
        path: 'path255',
      },
    ]
  }],

  ["path255", {
    storyText: "The demon from the bottle kills you as revenge for being locked up in a jar for centuries. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path256", {
    storyText: "As you talk to the demon you find out its story of endless time spent under the water, stuck in a jar. But, the demon says that it vowed to kill whomever opened his jar. You decide to:",
    buttons: [
      {
        btnTxt: "trick it back into the jar and take it to the king.",
        path: 'path257',
      },
      {
        btnTxt: "trick it back into the jar and throw it into the water.",
        path: 'path258',
      },
      {
        btnTxt: "let the demon go.",
        path: 'path255',
      },
    ]
  }],

  ["path257", {
    storyText: "With your gift you become a well respected advisor to the King. As you ingratiate yourself, the other people in court become jealous and make the King think that you betrayed him. You decide to:",
    buttons: [
      {
        btnTxt: "take what resources you have and go on the run for some months.",
        path: 'path220',
      },
      {
        btnTxt: "try talking to the king.",
        path: 'path260',
      },
    ]
  }],


  ["path258", {
    storyText: "You have very little resources, but you don’t have much social standing either because you are poor. You can either:",
    buttons: [
      {
        btnTxt: "set out on the road again with what little you have.",
        path: 'path220',
      },
      {
        btnTxt: "get married.",
        path: 'path261',
      },
      {
        btnTxt: "resign yourself to being a fisherman.",
        path: 'path259',
      },
      {
        btnTxt: "try to become a merchant.",
        path: 'path252',
      },
    ]
  }],

  ["path259", {
    storyText: "You die as a lonely fisherman, drowned in the water you worked for most of your life. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path260", {
    storyText: "The king doesn't trust you anymore and won't let you live. He sentences you to death by beheading.",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path261", {
    storyText: "At first you are happily married to your wife. She bears you some children and business is going well. But then, you suspect your wife is having an affair. You decide to:",
    buttons: [
      {
        btnTxt: "put a parrot in her room while you're away.",
        path: 'path268',
      },
      {
        btnTxt: "go complain about it at the local butcher's house.",
        path: 'path269',
      },
      {
        btnTxt: "have someone follow her around.",
        path: 'path275',
      },
      {
        btnTxt: "cheat on your wife.",
        path: 'path272',
      },
    ]
  }],

  ["path262", {
    storyText: "You are very wealthy now, but you want some change and so you decide to go travelling again and do some trading while you are away. You decide to:",
    buttons: [
      {
        btnTxt: "go north.",
        path: 'path263',
      },
      {
        btnTxt: "go south.",
        path: 'path264',
      },
    ]
  }],

  ["path263", {
    storyText: "As you are travelling you come across an oasis. As you sit and eat some dates you inadvertently throw a date seed super hard and kill a demon’s son. That demon comes after you, and says that you need to die for what you did. Other people come by and tell stories that stave off of the demon’s anger and he lets you go. You decide to:",
    buttons: [
      {
        btnTxt: "keep travelling.",
        path: 'path220',
      },
      {
        btnTxt: "go home and get married.",
        path: 'path261',
      },
    ]
  }],

  ["path264", {
    storyText: "As you are travelling you approach a town that might be good to do some trading with. As you enter the town you see a mysterious old shop in the middle of the marketplace and are drawn to it. You decide to:",
    buttons: [
      {
        btnTxt: "enter the shop.",
        path: 'path265',
      },
      {
        btnTxt: "not stop, just keep traveling.",
        path: 'path220',
      },
    ]
  }],

  ["path265", {
    storyText: "When you enter the shop you meet a wise old lady with a beautiful jar. She promises you a gift if you will open her jar. You decide to:",
    buttons: [
      {
        btnTxt: "open the jar.",
        path: 'path266',
      },
      {
        btnTxt: "leave the shop, settle down, and get married because the world is so weird to keep traveling.",
        path: 'path261',
      },
      {
        btnTxt: "leave the shop and continue traveling; you don't really like Samarkand any more...",
        path: 'path220',
      },
    ]
  }],

  ["path267", {
    storyText: "When you open the jar a demon comes out. But this demon is so happy that you set him free, so he decides to give you a wonderful gift. The demon gives you the power to understand and talk to animals. However, if you tell anyone about your spell you die. You can now talk to animals! You use this new skill to become a merchant that specializes in trading animals. You are now very wealthy. With this wealth you decide to:",
    buttons: [
      {
        btnTxt: "buy favor with the king.",
        path: 'path257',
      },
      {
        btnTxt: "get married.",
        path: 'path261',
      },
    ]
  }],

  ["path268", {
    storyText: "The parrot copies the sounds that your wife makes with her lover while you are away. Then the parrot repeats those sounds to you. Your worst fears have been realized and you are distraught. You decide to:",
    buttons: [
      {
        btnTxt: "put the parrot in the room one more time, just to be sure.",
        path: 'path271',
      },
      {
        btnTxt: "confront your wife.",
        path: 'path276',
      },
      {
        btnTxt: "go to your neighbor the butcher, he might know how to help!",
        path: 'path269',
      },
    ]
  }],

  ["path269", {
    storyText: "The butcher tells you that in revenge, his daughter can turn your wife into a mule. After a year the wife will turn back into a human and hopefully learn her lesson. You decide to:",
    buttons: [
      {
        btnTxt: "have your wife turned into a mule.",
        path: 'path270',
      },
      {
        btnTxt: "go back home and confront your wife.",
        path: 'path276',
      },
    ]
  }],

  ["path270", {
    storyText: "Once your wife has been a speechless animal or a while she is truly grateful to you. You two grow old and fat together and live happily ever after. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path271", {
    storyText: "When you listen to the bird the next time it sounds like the bird is making the sounds of a storm. You realize that the bird is going crazy, because it was sunny all that day. You decide to:",
    buttons: [
      {
        btnTxt: "get rid of the bird; it's useless anyway!",
        path: 'path272',
      },
      {
        btnTxt: "have someone follow her,because now you are unsure of yourself.",
        path: 'path275',
      },
    ]
  }],

  ["path272", {
    storyText: "You still haven’t made sure that she’s had an affair, but now your marriage is ruined because you are too afraid to talk to her and you are in despair. So, you have decided to cheat on her. Your wife grows jealous and decides to turn your mistress and your mistress’s son into cows. You have no idea where your mistress or son went, so you decide to:",
    buttons: [
      {
        btnTxt: "confront your wife.",
        path: 'path276',
      },
      {
        btnTxt: "go to a witch living nearby who might be able to help!",
        path: 'path273',
      },
    ]
  }],

  ["path273", {
    storyText: "The witch tells you that your mistress and son are cows. She also tells you that she can turn your wife into a deer. You decide to:",
    buttons: [
      {
        btnTxt: "turn your wife into a deer to teach her a lesson.",
        path: 'path270',
      },
      {
        btnTxt: "go find your mistress and son and have them turned into humans.",
        path: 'path274',
      },
      {
        btnTxt: "confront your wife.",
        path: 'path276',
      },
    ]
  }],

  ["path274", {
    storyText: "Once you have gone to your mistress, and realized that if you leave your wife she would die because she doesn’t have any means of supporting herself you decide to:",
    buttons: [
      {
        btnTxt: "leave town and take nothing.",
        path: 'path220',
      },
      {
        btnTxt: "go live with your mistress and make her your wife.",
        path: 'path270',
      },
      {
        btnTxt: "go back to your wife.",
        path: 'path276',
      },
    ]
  }],

  ["path275", {
    storyText: "The person who followed your wife sees her with her lover. When you find out you fly into a rage and attempt to kill her lover. But, you end up only disabling him. She leaves you in order to tend to him, and turns you into stone from the waist down (which keeps you alive). Years later a prince comes and rescues you, killing your wife and her lover. But, you never fully recover. You decide to:",
    buttons: [
      {
        btnTxt: "head for the hills, never to return!",
        path: 'path220',
      },
      {
        btnTxt: "go back to the time machine; you've had enough!",
        path: 'path208',
      },
    ]
  }],

  ["path276", {
    storyText: "You beat your wife for everything that she’s done to you. She becomes penitent after that and serves you for the rest of your life. You eventually die, having lived a mostly full life. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],




  /*
  ------------------------------------------------
  Start of 1320 timeline
  ------------------------------------------------
  */
  ["path301", {
    storyText: "The time machine rattles and shakes as you make your way through time and space to the year 1320 AD. Everything feels weird, and you close your eyes to try and control your newfound motion sickness. When you open your eyes you find yourself in the corner of a dark courtyard. There is a small castle in front of you and large walls behind you. You decide to:",
    buttons: [
      {
        btnTxt: "climb the wall.",
        path: 'path305',
      },
      {
        btnTxt: "head into the castle.",
        path: 'path304',
      },
      {
        btnTxt: "climb back in the time machine.",
        path: 'path303',
      },
      {
        btnTxt: "explore the courtyard.",
        path: 'path330',
      },
    ]
  }],

  ["path303", {
    storyText: "Once you are back in the time machine, you decide to:",
    buttons: [
      {
        btnTxt: "go back home; this whole thing is a little too crazy for you.",
        path: 'path001',
      },
      {
        btnTxt: "turn the knob to 1650",
        path: 'path101',
      },
      {
        btnTxt: "turn the knob to 950",
        path: 'path201',
      },
    ]
  }],

  ["path304", {
    storyText: "As you are in the castle you walk into a large room where a bunch of people are having a feast. A man with a crown sits at the head of the table and sees you walk in. He apparently recognizes you (or thinks he does), and gestures for you to come and sit down at the table with everyone else. You are confused that he recognizes you, and so you look down at yourself. You are a knight, with a sword and uniform. You decide to:",
    buttons: [
      {
        btnTxt: "you sit down at the table and get some food; you're hungry!",
        path: 'path310',
      },
      {
        btnTxt: "walk out of the castle and back towards the courtyard.",
        path: 'path330',
      },
      {
        btnTxt: "go explore the rest of the castle.",
        path: 'path306',
      },
    ]
  }],

  ["path305", {
    storyText: "You are able to get to the other side of the castle wall unnoticed. You look around at the small village outside the castle’s gates and see some small dwelling, an open area that looks like it would be a marketplace on Saturdays, and you see a church. You are also very tired. You decide to:",
    buttons: [
      {
        btnTxt: "exit the town.",
        path: 'path336',
      },
      {
        btnTxt: "go to one of the dwellings.",
        path: 'path317',
      },
      {
        btnTxt: "go sleep in the large common area.",
        path: 'path3161',
      },
      {
        btnTxt: "go to the small church building.",
        path: 'path333',
      },
    ]
  }],


  ["path306", {
    storyText: "As you walk through the castle you see tapestries and lavish rooms. You wind through the halls and stairways until you get to the top of a watch tower, where you stop to survey the land around you. There is a small village outside the castle gates, but as you look farther you see a light glimmering in the distance. As the light gets closer you see that it is a lone rider coming straight for the castle. You decide to:",
    buttons: [
      {
        btnTxt: "go to the village; it looks pretty quiet there.",
        path: 'path305',
      },
      {
        btnTxt: "go to the castle gates to get a look at the rider.",
        path: 'path307',
      },
      {
        btnTxt: "go back to the feast and warn people of the approaching rider.",
        path: 'path309',
      },
    ]
  }],

  ["path307", {
    storyText: "You get to the castle gates just in time to see a rider all in green burst through with a very large battle axe. You decide to:",
    buttons: [
      {
        btnTxt: "run after the rider; he is up to no good.",
        path: 'path308',
      },
      {
        btnTxt: "slip away towards the village; this isn't your problem.",
        path: 'path305',
      },
      {
        btnTxt: "go back to the time machine; you don't want to get mixed into all this.",
        path: 'path303',
      },
    ]
  }],

  ["path308", {
    storyText: "You get to the feast hall right after the rider has entered and you see that the knight is challenging the king, who is apparently King Arthur. You decide to:",
    buttons: [
      {
        btnTxt: "go explore the courtyard.",
        path: 'path330',
      },
      {
        btnTxt: "challenge the rider in King Arthur's place.",
        path: 'path319',
      },
    ]
  }],

  ["path309", {
    storyText: "Once you get back to the feasting area you run up to the king and try to tell him that danger is coming. The King looks at you weirdly and says something that sounds kind of like “Why do you sound like that?” But, it is hard for you to understand what he is saying. As you try explaining to the king again, the rider bursts into the hall and challenges the King, who is apparently King arthur. You decide to:",
    buttons: [
      {
        btnTxt: "challenge the rider to protect the king.",
        path: 'path319',
      },
      {
        btnTxt: "back away.",
        path: 'path311',
      },
      {
        btnTxt: "go sit down at the table with everyone else.",
        path: 'path312',
      },
    ]
  }],

  ["path310", {
    storyText: "As you start eating you hear everyone talking. You can kind of understand what they are saying, though they have a very extreme accent that garbles their speech. But, you are able to talk to them for a little bit before a rider bursts into the hall and challenges King Arthur, the man at the head of the table. You decide to:",
    buttons: [
      {
        btnTxt: "challenge the rider for King Arthur.",
        path: 'path319',
      },
      {
        btnTxt: "stay seated.",
        path: 'path312',
      },
      {
        btnTxt: "try getting the heck out of dodge!",
        path: 'path311',
      },
    ]
  }],

  ["path311", {
    storyText: "You make it out of the large hall with the scary rider. You decide to:",
    buttons: [
      {
        btnTxt: "get out of the castle.",
        path: 'path305',
      },
      {
        btnTxt: "head back to the time machine.",
        path: 'path303',
      },
      {
        btnTxt: "go explore the courtyard.",
        path: 'path330',
      },
    ]
  }],

  ["path312", {
    storyText: "King Arthur starts talking to the rider, who is dressed in all green and has a large battle axe. As he is talking, he gestures toward you so you look at him inquisitively. He tells you to stand up and challenge the rider. You decide to:",
    buttons: [
      {
        btnTxt: "challenge the rider for King Arthur",
        path: 'path319',
      },
      {
        btnTxt: "refuse and stay seated.",
        path: 'path313',
      },
    ]
  }],

  ["path313", {
    storyText: "King Arthur grows angry, and gestures for some of his servants to come and take you away. You are led by his servants to a dungeon. After a little while King Arthur comes in and tells you that you have committed treason and that you will be hung the next day for your treacherous actions. Then he leaves. You decide to:",
    buttons: [
      {
        btnTxt: "attempt escape once he is gone.",
        path: 'path315',
      },
      {
        btnTxt: "call to him, and try to talk.",
        path: 'path318',
      },
      {
        btnTxt: "stay where you are in the cell.",
        path: 'path314',
      },
    ]
  }],

  ["path314", {
    storyText: "The next day you are hung for your crimes. The King is the top of the hierarchy, and you cannot disobey him. After being hung, you drift awake to find yourself on a barren plain with a river running through it. When you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path315", {
    storyText: "You are able to get out of the castle, but now it is during the daytime. By now you have shed any garments that would distinguish you as a knight. You see many people streaming towards a marketplace in the nearby village. You decide to:",
    buttons: [
      {
        btnTxt: "head towards the marketplace.",
        path: 'path3162',
      },
      {
        btnTxt: "get yourself out of town.",
        path: 'path336',
      },
    ]
  }],

  ["path3161", {
    storyText: "That morning in the large open area in the middle of the village people are bustling around setting up their stalls. You also see that the small church nearby is serving some food to beggars You decide to:",
    buttons: [
      {
        btnTxt: "go get some food from the church.",
        path: 'path334',
      },
      {
        btnTxt: "go talk to one of the traders.",
        path: 'path331',
      },
    ]
  }],

  ["path3162", {
    storyText: "You get into the marketplace and start wandering around. There are many people buying food and other goods. But, you also see some people from the feast last night wandering around the market. You decide to:",
    buttons: [
      {
        btnTxt: "go talk to one of the traders.",
        path: 'path331',
      },
      {
        btnTxt: "get away from the people you recognize and leave town.",
        path: 'path336',
      },
    ]
  }],

  ["path317", {
    storyText: "When you knock on the door the people in the dwelling invite you in and let you stay the night. You have a pretty sleepless night lying on the cold, hard ground. They tell you that they will be going to the market the next day if you want to join them. Early in the morning you decide to:",
    buttons: [
      {
        btnTxt: "go check out the market.",
        path: 'path3162',
      },
      {
        btnTxt: "leave town; everyone is nice, but you need to get away.",
        path: 'path336',
      },
    ]
  }],

  ["path318", {
    storyText: "When you call him, he grows even more angry and calls his guards. You spoke out of turn, which is a punishable offense. You are beheaded right then and there. After being beheaded and dying, you drift awake to find yourself on a barren plain with a river running through it. When you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path319", {
    storyText: "You walk up to the rider all in elaborate green garments, and he hands you his battle axe. He tells you that you had to try and behead him now, but in one year you must come and find him again to receive the same punishment. You decide to:",
    buttons: [
      {
        btnTxt: "agree; you will behead him.",
        path: 'path320',
      },
      {
        btnTxt: "refuse to behead him.",
        path: 'path313',
      },
    ]
  }],

  ["path320", {
    storyText: "The green rider lets you cut off his head with his own axe, but then he doesn’t die from it! He picks up his head, takes back his axe, and rides off as you stare at him in amazement. All of the people at the feast start talking very quickly all at once. No one can figure out what happened! In the next few days, they give you a place to stay in the castle. But then they give you a horse, armor, and food, and send you off to go find the Green rider. You decide to:",
    buttons: [
      {
        btnTxt: "abandon that quest; you don't need to find the green guy. Continue traveling",
        path: 'path336',
      },
      {
        btnTxt: "continue tracking the green rider.",
        path: 'path321',
      },
    ]
  }],

  ["path321", {
    storyText: "Congratulations, you are a more honorable person for committing to your oath! As you are travelling you come across a swamp. You decide to:",
    buttons: [
      {
        btnTxt: "go through the swamp.",
        path: 'path322',
      },
      {
        btnTxt: "go around the swamp.",
        path: 'path326',
      },
    ]
  }],

  ["path322", {
    storyText: "As you are trekking through the swamp, a hag jumps out and attacks you. You react quickly, and are able to hold her at sword's point. You decide to:",
    buttons: [
      {
        btnTxt: "kill the hag; she attacked you!",
        path: 'path326',
      },
      {
        btnTxt: "talk to the hag; maybe she'll give you a clue.",
        path: 'path323',
      },
    ]
  }],

  ["path323", {
    storyText: "You say, “I am looking for the Green Rider with the Battle Axe, where can I find him?” She cackled and said, “He is hard to be found, but if he wants to find you, you can rarely err. Just continue going South. Now, what do you want him for?” You decide to:",
    buttons: [
      {
        btnTxt: "cut your losses; kill the hag now!",
        path: 'path326',
      },
      {
        btnTxt: "keep the hag talking -- maybe you can get a more straightforward answer.",
        path: 'path324',
      },
    ]
  }],

  ["path324", {
    storyText: "The hag narrows her eyes and then lungs at you. You were going to continue talking to her, so you aren’t expecting this. She ducks your sword as you slash at her, and then she wraps her poisonous hands around your throat. You die trying to do what is right. After some excruciating pain you drift awake and find yourself in a barren plain with a river running through it. You also see a piece of gold sitting on the ground next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold there.",
        path: 'path325',
      },
    ]
  }],

  ["path325", {
    storyText: "The only place to go is towards the river, so you head over there. There is a small boat there, but when you attempt to get on they ask for payment. You run back to get the gold piece, but it is gone. So, you decide to sneak onto the boat. As the boat is rowing along a three headed dog comes into view. It starts snarling at you, because you did not pay for passage. He grabs you as the boat goes by and flings you back into the plain. You are forever stuck trying to get the gold piece to make it out of that desolate place. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path326", {
    storyText: "You keep travelling out of the area by the swamp. For months you travel, occasionally fighting monsters along the way. You stop at the local inn in almost every town you encounter to see if you can find any leads. You end up chasing rumors, until the whole event with the green rider begins to feel like a dream and you lose focus. One day you stumble into a grove of trees and you see the green rider, with his back facing you. As you think back, it has been exactly one year since the rider showed up in King Arthur’s court, and now your fate has found you. You decide to:",
    buttons: [
      {
        btnTxt: "approach the green rider.",
        path: 'path327',
      },
      {
        btnTxt: "ride away.",
        path: 'path337',
      },
    ]
  }],

  ["path327", {
    storyText: "The green rider turns around and stares at you, then lets out a deep throaty chuckle before saying “you have finally come to meet your fate.” You say, “Yes, I have.” He approaches you and you bare your neck to him. He swings and you flinch away. Then he gets mad at you, saying that you must meet his blow. He swings again and makes a neat, thin slice in your throat. Then he puts away his battle axe and walks away. You have not been dealt any mortal blow, and you feel an immense relief for that. You decide to:",
    buttons: [
      {
        btnTxt: "head back towards King Arthur's court.",
        path: 'path328',
      },
      {
        btnTxt: "keep to the road.",
        path: 'path336',
      },
    ]
  }],

  ["path328", {
    storyText: "After many travels you have gained quite a reputation and King Arthur is happy to have you home. You ride the glory of the Green rider for a long time, until one day people start questioning your abilities again. You decide to:",
    buttons: [
      {
        btnTxt: "go on another quest to establish yourself.",
        path: 'path336',
      },
      {
        btnTxt: "stay home; they can figure it out!",
        path: 'path373',
      },
    ]
  }],

  ["path329", {
    storyText: "You spend the rest of your days not amounting to much, and one night you die in your sleep. Then you feel yourself drifting awake again and find yourself in a barren field with a river running through it. As you sit up you find a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "follow everyone else to the river.",
        path: 'path325',
      },
    ]
  }],

  ["path330", {
    storyText: "The courtyard is pretty bare. However, as you go around a corner, you see a couple sitting there talking together. You decide to:",
    buttons: [
      {
        btnTxt: "go talk to the couple.",
        path: 'path355',
      },
      {
        btnTxt: "leave the couple alone and go explore the village.",
        path: 'path305',
      },
    ]
  }],

  ["path331", {
    storyText: "You are able to strike a deal with the traders, where you can live and work with them. You decide to:",
    buttons: [
      {
        btnTxt: "go live with the traders.",
        path: 'path332',
      },
      {
        btnTxt: "leave the village behind and go traveling on your own.",
        path: 'path336',
      },
      {
        btnTxt: "go get some food from the small church nearby.",
        path: 'path334',
      },
    ]
  }],

  ["path332", {
    storyText: "After living a life full of commerce, you become a good trader and businessman. One day you are mugged while on the road, and the robbers kill you and steal all of your wealth. After you have died, you drift awake and find yourself in a barren plain with a river running through it. As you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path333", {
    storyText: "When you knock on the door to the church, a priest comes to the door and lets you in. You are able to spend the night there and in the morning they are serving food out front. You decide to:",
    buttons: [
      {
        btnTxt: "go out and eat some food.",
        path: 'path334',
      },
      {
        btnTxt: "leave the village.",
        path: 'path336',
      },
    ]
  }],

  ["path334", {
    storyText: "While you are eating a priest comes up and starts talking to you about Christianity, and invites you to stay a night at the church. You decide to:",
    buttons: [
      {
        btnTxt: "stay at the church.",
        path: 'path335',
      },
      {
        btnTxt: "go to the market and strike a deal to live with the traders.",
        path: 'path332',
      },
      {
        btnTxt: "leave town.",
        path: 'path336',
      },
    ]
  }],

  ["path335", {
    storyText: "You end up staying at the church for a while and are converted. You get baptized and become a righteous monk. You repent of all of your sins. When you eventually die as a martyr, you go straight to heaven where you finally understand the working of the trinity, and live out the rest of eternity with God and the Virgin Mary. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path336", {
    storyText: "After traveling for a while you see another castle in the distance. You decide to:",
    buttons: [
      {
        btnTxt: "go towards the castle.",
        path: 'path338',
      },
      {
        btnTxt: "continue on your way.",
        path: 'path337',
      },
    ]
  }],

  ["path337", {
    storyText: "You run into a group of trolls while you are out travelling. The trolls roast and eat you. You die. After you have died, you drift awake and find yourself in a barren plain with a river running through it. As you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path338", {
    storyText: "As you approach the castle a scouting party comes up to you, and escorts you to the castle gates. When you enter the gates a large muscular man stands waiting to talk to you. He asks what you are doing there, and you explain that you hail from King Arthur’s court, and you are just travelling through. As you say this, a large grin breaks across his face and he walks up to you, clapping you on the back like you’re an old friend. He introduces himself as Lord Bertilak of Hautdesert and he leads the way into the castle proper to introduce you to some members of his court. He introduces you to his wife, an old woman at court named Morgan Le Faye, and several of his best warriors. He then shows you to a room where you can stay as a guest. You decide to:",
    buttons: [
      {
        btnTxt: "stay in your room.",
        path: 'path339',
      },
      {
        btnTxt: "leave the castle entirely.",
        path: 'path337',
      },
      {
        btnTxt: "go find Bertilak's wife.",
        path: 'path353',
      },
      {
        btnTxt: "go find Morgan Le Faye.",
        path: 'path340',
      },
    ]
  }],

  ["path339", {
    storyText: "Once you have gotten all settled down and looked through your new room, one of Bertilak’s warriors comes to take you to dinner in the main dining hall. At one point Bertilak’s wife comes around and offers everyone a drink. You converse with all the men and enjoy a wonderful meal, before going to bed for the night. In the morning a warrior comes to tell you that Lord Bertilak is going hunting. You decide to: ",
    buttons: [
      {
        btnTxt: "join Lord Bertilak and go hunting",
        path: 'path345',
      },
      {
        btnTxt: "stay in bed for another minute",
        path: 'path343',
      },
    ]
  }],

  ["path340", {
    storyText: "As you explore the castle you see the old and crippled Morgan le Faye through a crack in the door to a dingy old room in the highest tower. You decide to:",
    buttons: [
      {
        btnTxt: "go find Bertilak's wife instead.",
        path: 'path353',
      },
      {
        btnTxt: "go back to your room.",
        path: 'path339',
      },
      {
        btnTxt: "keep exploring the castle.",
        path: 'path341',
      },
    ]
  }],

  ["path341", {
    storyText: "As you make to walk away, suddenly the door to Morgan Le Faye’s room creaks open and you turn around to see her inviting you in. You decide to:",
    buttons: [
      {
        btnTxt: "leave the castle forever; this is creepy",
        path: 'path337',
      },
      {
        btnTxt: "go into her room.",
        path: 'path342',
      },
      {
        btnTxt: "go back to your room.",
        path: 'path339',
      },
    ]
  }],

  ["path342", {
    storyText: "As you enter you see glass baubles filled with bubbling steaming liquids, and the old lady’s stitching strewn across a wooden chair. “Sit” she invites, and you turn around to see a wooden chair positioned right behind you. You sit down, and suddenly the hissing from the liquids and the very comfortable chair make you very sleepy. You rest your slowly sinking head on the chair, and softly close your eyes. Turns out Morgan Le Faye is a witch, and you just fell under her spell. You are now dead. But after you have died, you drift awake and find yourself in a barren plain with a river running through it. As you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path343", {
    storyText: "As you are lying in bed, Lord Bertilak’s wife comes into your room and starts talking to you. You politely talk to her. As she is getting ready to leave she asks you to kiss her. You decide to:",
    buttons: [
      {
        btnTxt: "kiss her.",
        path: 'path349',
      },
      {
        btnTxt: "refuse to kiss her.",
        path: 'path344',
      },
    ]
  }],

  ["path344", {
    storyText: "You have offended Lord Bertilak, with the decision to not kiss his wife. Refusing to kiss her breaks a chivalric code. You are no longer an honored guest in Lord Bertilak’s house, and you are forced to leave. You decide to:",
    buttons: [
      {
        btnTxt: "go back to the time machine.",
        path: 'path303',
      },
      {
        btnTxt: "try to find another castle or place to go.",
        path: 'path337',
      },
    ]
  }],

  ["path345", {
    storyText: "When you are out hunting with Lord Bertilak you come across a beautiful lake You decide to:",
    buttons: [
      {
        btnTxt: "approach the lake.",
        path: 'path346',
      },
      {
        btnTxt: "continue on your way.",
        path: 'path347',
      },
      {
        btnTxt: "go find Lord Bertilak and show him the lake.",
        path: 'path348',
      },
    ]
  }],

  ["path346", {
    storyText: "You go to the lake and take a few paces into the water after taking off your shoes. The water feels wonderful on your feet and you bend down to look at your reflection in the water. At that moment a water monster jumps out and drags you to the bottom of the lake. You have now drowned to death. But after you have died, you drift awake and find yourself in a barren plain with a river running through it. As you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path347", {
    storyText: "Because you stopped to admire the lake and took no heed of where you were going after that, you get lost in this unknown land. You keep travelling, trying to find your way back to the castle.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path337',
      },
    ]
  }],

  ["path348", {
    storyText: "Lord Bertilak tells you that some nasty water monster lives in that lake, and he is glad that you did not go over there. While you were away, he managed to catch a herd of deers with his best warriors. He made an amazing catch, and you admire his hunting skills as the party makes their way back to the castle. The hunt has now worn you out and you head back to your rooms to lay down.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path343',
      },
    ]
  }],

  ["path349", {
    storyText: "She smiles and leaves you. Later, after you have been lounging in your room, a warrior comes to bring you down to dinner again. Lord Bertilak approaches you. You decide to:",
    buttons: [
      {
        btnTxt: "kiss Lord Bertilak.",
        path: 'path351',
      },
      {
        btnTxt: "talk to Lord Bertilak for a moment and then go sit down to eat.",
        path: 'path350',
      },
    ]
  }],

  ["path350", {
    storyText: "Later that night Lord Bertilak sneaks into your room while you are asleep. He shakes you awake to tell you that you need to leave. By not kissing him after you kissed his wife, you have broken a chivalric code and now you must leave his castle. You are no longer an honored guest. He kicks you out, to go travel on the road again.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path343',
      },
    ]
  }],

  ["path351", {
    storyText: "Lord Bertilak smiles at you, and then invites you to come and join his feast. He recognizes your honor as a knight of King Arthur and invites you to stay in his court for the foreseeable future. You decide to:",
    buttons: [
      {
        btnTxt: "stay in his court.",
        path: 'path352',
      },
      {
        btnTxt: "refuse his offer and continue on your wandering journey.",
        path: 'path337',
      },
    ]
  }],

  ["path352", {
    storyText: "You stay in his court for the next while. The next two days Lord Bertilak goes hunting. The first day he brings back a wild boar, and then on the second day he catches a fox. You begin to learn how to hunt from Lord Bertilak. You eventually get married and spend the rest of your days in court. One night you die in your sleep. But after you have died, you drift awake and find yourself in a barren plain with a river running through it. As you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
  }],

  ["path353", {
    storyText: "You wander the castle for a little while, and you find Bertilak’s wife in a small alcove reading a book. You decide to:",
    buttons: [
      {
        btnTxt: "approach her.",
        path: 'path354',
      },
      {
        btnTxt: "go back to your room.",
        path: 'path340',
      },
    ]
  }],

  ["path354", {
    storyText: "You and the lady make small talk for a while, and as you get up to leave she asks if you will kiss her. You decide to:",
    buttons: [
      {
        btnTxt: "kiss her.",
        path: 'path349',
      },
      {
        btnTxt: "refuse to kiss her.",
        path: 'path344',
      },
    ]
  }],

  ["path355", {
    storyText: "‘Hello,’ you say to the couple. The man says, ‘Hello Gawain, we were just getting away from the feast for a minute, would you like to join us?’",
    buttons: [
      {
        btnTxt: "keep talking to the couple.",
        path: 'path356',
      },
      {
        btnTxt: "go to the feast hall and start eating.",
        path: 'path310',
      },
      {
        btnTxt: "go to the village.",
        path: 'path305',
      },
    ]
  }],

  ["path356", {
    storyText: "56- You say, ‘Yes, I would love to. Who are you again?’     ‘We are Guinevere and Lancelot, you know us Gawain. Also, you are talking in a very strange accent. What are you up to?’      You realize that you are in a bad spot, they are noticing that you are not from the same time period as them. You end the conversation and decide to:",
    buttons: [
      {
        btnTxt: "go back to the time machine.",
        path: 'path303',
      },
      {
        btnTxt: "go to the village.",
        path: 'path305',
      },
    ]
  }],

  ["path357", {
    storyText: "Which afterlife do you believe in?",
    buttons: [
      {
        btnTxt: "Roman",
        path: 'path3591',
      },
      {
        btnTxt: "Christian",
        path: 'path358',
      },
    ]
  }],

  ["path358", {
    storyText: "Have you been baptized?",
    buttons: [
      {
        btnTxt: "Yes",
        path: 'path3592',
      },
      {
        btnTxt: "No",
        path: 'path362',
      },
    ]
  }],

  ["path3591", {
    storyText: "All of the other spirits around you are flowing towards the river, so you decide to follow. As you get close you see a boat, with a rower named Charon announcing that he is collecting gold pieces. You give him your gold piece and get onto the boat. Once the boat is full Charon starts moving the boat down the river. You pass Cerberus as you float down the river styx. Then Minos, Rhadamanthos, and Aecaus come into view. Since you have done nothing extremely bad or extremely good you bathe in the river lethe which makes you forget your past life, and then you are sent to the Plains of Asphodel to wander aimlessly for eternity. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path3592", {
    storyText: "You see an angel coming down the river, as you approach, the gold piece disappears from your hand and you are now being transported to purgatory by the angel. Since you have been baptized, and have done nothing extremely wrong, you can now suffer for your sins and maybe eventually make it to heaven. Purgatory is a large mountain, and you are deposited and the very bottom. You decide to:",
    buttons: [
      {
        btnTxt: "climb the mountain.",
        path: 'path360',
      },
      {
        btnTxt: "stay at the base of the mountain.",
        path: 'path363',
      },
    ]
  }],

  ["path360", {
    storyText: "As you climb the mountain you go through concentric rings where you have to pay for your sins. Once all of your sins have been paid for you can:",
    buttons: [
      {
        btnTxt: "bathe in the river Lethe, forget everything, and go to heaven.",
        path: 'path361',
      },
      {
        btnTxt: "go down the mountain, ruining your chances at heaven, but continuing to explore.",
        path: 'path363',
      },
    ]
  }],

  ["path361", {
    storyText: "You are now in heaven. You finally understand the nature of the trinity, and you spend the rest of your days with the Virgin Mary and other righteous people. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path362", {
    storyText: "After pocketing the gold piece you follow all of the other spirits into the darkness, away from the river. Finally, you approach a gate which you enter to find people who cannot decide on anything, and another river beyond them. When you go towards the river you see a boat with a ferryman named Charon in it. He takes your gold piece as payment for the ride. When he drops you off you find yourself in a city of virtuous pagans. You continue down into Hell, and approach a place where many spirits are being tortured. As you get close, the beast Minos blocks your way. You decide to:",
    buttons: [
      {
        btnTxt: "talk to Minos.",
        path: 'path370',
      },
      {
        btnTxt: "stay where you are with the virtuous pagans.",
        path: 'path369',
      },
    ]
  }],

  ["path363", {
    storyText: "At the base of the mountain you find a pair of legs sticking up. You decide to:",
    buttons: [
      {
        btnTxt: "climb the legs.",
        path: 'path365',
      },
      {
        btnTxt: "climb up the mountain and bathe in the river Lethe.",
        path: 'path361',
      },
      {
        btnTxt: "talk to another spirit nearby.",
        path: 'path364',
      },
    ]
  }],

  ["path364", {
    storyText: "The spirit tells you that climbing those legs will lead you to the depths of hell. You decide to:",
    buttons: [
      {
        btnTxt: "climb the legs anyway.",
        path: 'path365',
      },
      {
        btnTxt: "climb up the mountain and bathe in the river Lethe",
        path: 'path361',
      },
    ]
  }],

  ["path365", {
    storyText: "You start climbing the legs and as you do it becomes increasingly dark and difficult to breathe. You take a moment to step back and you see Satan, with three heads, glaring down at you in all his pitiful glory. You decide to:",
    buttons: [
      {
        btnTxt: "climb Satan back to puratory.",
        path: 'path366',
      },
      {
        btnTxt: "run away from Satan in horror.",
        path: 'path368',
      },
      {
        btnTxt: "investigate Satan more.",
        path: 'path367',
      },
    ]
  }],

  ["path366", {
    storyText: "As you try to climb, you do not have the strength as a spirit/shade to climb back into purgatory. You are now stuck forever in the depths of hell. So, you do the only thing you can, you head up from the bottom of hell.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path368',
      },
    ]
  }],

  ["path367", {
    storyText: "You find that in each of Satan’s mouths is a sinner, being eternally tortured for their crimes. You cannot recognize any of those people by their faces, but you assume that one of them is Judas Iscariot. You realize now that you have nowhere else to go, so you head up from the bottom of hell.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path368',
      },
    ]
  }],

  ["path368", {
    storyText: "As you go up from the worst circle of Hell. You come to a ring of giants, who are all chained in place, all except Antaeus, who lifts you up into Malebolge. You are now in the eighth circle of hell, in a place of terrible suffering. You continue travelling up in an attempt to get away, but you come to a great barrier that you cannot pass. You are now forever stuck in the depths of hell, watching everyone suffer. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path369", {
    storyText: "All of the virtuous pagan adopt you and you spend the rest of eternity in their care. There is only so much you can do and learn, but it is much more enjoyable than the many tortured souls farther into hell. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path370", {
    storyText: "Minos just waves you through the gate after a moment, and you move farther into hell. You hear all of the screams of the tortured souls. You decide to:",
    buttons: [
      {
        btnTxt: "try to turn back.",
        path: 'path371',
      },
      {
        btnTxt: "continue downward.",
        path: 'path372',
      },
    ]
  }],

  ["path371", {
    storyText: "You are unable to go back up a circle; Minos blocks any attempt and as you continue to try he beats you and then sends you on your way.",
    buttons: [
      {
        btnTxt: "Next",
        path: 'path372',
      },
    ]
  }],

  ["path372", {
    storyText: "You descend past Cerberus, plutus, styx, the city of dis, phlegethon, and Geryon. You finally give up and live the rest of eternity in hell. THE END",
    buttons: [
      {
        btnTxt: "Start Over",
        path: "startPath",
      }
    ],
  }],

  ["path373", {
    storyText: "73- As your reputation slowly fades and people don’t believe in your abilities anymore, you lose your position as knight. When you continue refusing to fight and maintain your reputation you do not receive a wife. You lose your position as knight. Finally you die disgraced. But after you have died, you drift awake and find yourself in a barren plain with a river running through it. As you sit up you see a gold piece sitting next to you. You decide to:",
    buttons: [
      {
        btnTxt: "pick up the gold piece.",
        path: 'path357',
      },
      {
        btnTxt: "leave the gold piece behind; it's unimportant.",
        path: 'path325',
      },
    ]
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
        path: 'path433',
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
      {
        btnTxt: "Start Over",
        path: 'path',
      },
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
    storyText: "Asking around, you discover that the senate meets as a committee once every three days. They discuss the affairs of the state, but never make a decree until discussing the issue on three separate occasions. Initially thinking this to be wildly inefficient, you find that their process of ”sleeping on it” allows them to effectively address all conflicts in the island in a swift and positive manner. Having had your fill of government, you decide to: ",
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
        path: 'path201',
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
        btnTxt: "Stay inside and hope the fire extinguishes itself",
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
    storyText: " Unfortunately, it would seem that the sign was telling the truth (imagine that). You get lost in the Italian wilderness and travel for 50 years, looking for the time machine. One day, as you crest a ridge you notice the shining glint of a large metal object, waaay down at the bottom of a basin. In a start you realize that it is a time machine - not yours, but a time machine all the same. You sprint towards your salvation - as fast as your old and feeble knees can take you - and trip on a rock. Rolling down the rest of the way, crashing through brush and tree, you finally slow to a stop and are too injured to move. You die 2 days later, eying your mechanism of escape, but never being able to reach it.\n\nTHE END",
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