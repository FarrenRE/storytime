const dialogue = [
	{
		"author": "Stormgren",
		"message": "I suppose the chief object of your visit is to register a formal protest against the Federation scheme. Am I correct?"
  },
  {
    "author": "Wainwright",
    "message": "That is my main purpose, Mr. Secretary. As you know, for the last five years we have tried to awaken the human race to the danger that confronts it. The task has been a difficult one, for the majority of people seem content to let the Overlords run the world as they please. Nevertheless, more than fifteen million patriots, in every country, have signed our petition."
  },
	{
		"author": "Stormgren",
		"messageOptions": [
			{
				"message": "That is not a very impressive figure.",
				"weight": "-1"
      },
			{
				"message": "I see, please continue.",
				"weight": "0"
			},
			{
				"message": "Their voices shall not be ignored!",
				"weight": "1"
			}
		]
	},
	{
		"author": "Wainwright",
    "message": "And for every person who has signed, there are many who feel grave doubts about the wisdom, not to mention the rightness, of this Federation plan. Even Supervisor Karellen, for all his powers, cannot wipe out a thousand years of history at the stroke of a pen.",
		"flavor": {
      "-1": "It is a figure that cannot be ignored.",
      "0": "It is a figure that cannot be ignored.",
			"1": "I'm glad that you see it so... patriotically."
		}
  },
	{
		"author": "Stormgren",
		"messageOptions": [
			{
				"message": "Karellen stands nothing to gain from such an action.",
				"weight": "-1"
      },
			{
				"message": "What does anyone know of Karellen's powers?",
				"weight": "0"
			},
			{
				"message": "Nor will he. Humanity will prevail over Karellen's alien desires.",
				"weight": "1"
			}
		]
  },
	{
		"author": "Wainwright",
    "message": "I do not necessarily quarrel with Federation as an ultimate objective—though many of my supporters might not agree. But it must come from within—not be superimposed from without. We must work out our own destiny. There must be no more interference in human affairs!",
		"flavor": {
      "-1": "Nothing but to cement his position as humankind’s de facto leader.",
      "0": "Far too little, which is why we must insist that we retain what agency we can.",
			"1": "Yes, indeed!"
		}
  },
	{
		"author": "Stormgren",
		"messageOptions": [
      {
        "message": "Let me ask you a question:",
        "weight": "0"
      }
    ]
  },
	{
		"author": "Stormgren",
		"messageOptions": [
			{
				"message": "What freedom have we lost compared to that which the Overlords have given us for the first time in human history?",
				"weight": "-1"
      },
			{
				"message": "Can you deny that the Overlords have brought security, peace, and prosperity to the world?",
				"weight": "0"
			},
			{
				"message": "What chance do we have against the omnipotence of the Overlords?",
				"weight": "1"
			}
		]
  },
	{
		"author": "Wainwright",
    "message": "",
		"flavor": {
      "-1": "Freedom to control our own lives, under God’s guidance.",
      "0": "That is true. But they have taken our liberty. Man does not live by bread alone!",
			"1": "Whatever chance lies with you, Mr. Secretary. You must take the fate of humankind in your own hands."
		}
  },
	{
		"author": "Stormgren",
		"messageOptions": [{
      "message": "Despite what he has done for humanity?",
      "weight": "0"
    }]
  },
	{
		"author": "Wainwright",
		"message": "Yes—despite that. I do not know which we resent more—Karellen’s omnipotence, or his secrecy. If he has nothing to hide, why will he never reveal himself? Next time you speak with the Supervisor, Mr. Stormgren, ask him that!"
  }
];

export {
  dialogue
}
