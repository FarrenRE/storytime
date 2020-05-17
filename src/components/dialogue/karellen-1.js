const initialDialogue = [
  {
    message: "My name is Karellen. I come in peace.",
    author: "Karellen"
  },
  {
    message: "My name is Rikki Stormgren...",
    author: "Stormgren"
  }
];

const userDialogue = [
  [
    {
      message: "Nice to meet you.",
      value: "-1"
    },
    {
      message: "What do you want?",
      value: "0"
    },
    {
      message: "Begone, alien scum!",
      value: "1"
    }
  ],
  [
    {
      message: "I think you're right.",
      value: "-1"
    },
    {
      message: "Hmmm, let me consider.",
      value: "0"
    },
    {
      message: "You... you're mad!!",
      value: "1"
    }
  ],
  [
    {
      message: "Agreed!",
      value: "-1"
    },
    {
      message: "Maybe...",
      value: "0"
    },
    {
      message: "Heavens, no!",
      value: "1"
    }
  ]
];

const botDialogue = [
  {
    flavor: {
      "-1": ": )",
      "0": ": |",
      "1": ": ("
    },
    message: "My proposal is this: Proin scelerisque finibus sapien, vel malesuada dui sollicitudin sed. In hac habitasse platea dictumst. Duis porttitor ante et libero tempus, at elementum velit congue. Cras consequat interdum volutpat."
  },
  {
    flavor: {
      "-1": ": )",
      "0": ": |",
      "1": ": ("
    },
    message: "Furthermore: Proin scelerisque finibus sapien, vel malesuada dui sollicitudin sed. In hac habitasse platea dictumst. Duis porttitor ante et libero tempus, at elementum velit congue. Cras consequat interdum volutpat."
  },
  {
    flavor: {
      "-1": ": )",
      "0": ": |",
      "1": ": ("
    },
    message: "At last: Proin scelerisque finibus sapien, vel malesuada dui sollicitudin sed. In hac habitasse platea dictumst. Duis porttitor ante et libero tempus, at elementum velit congue. Cras consequat interdum volutpat."
  }
];

export {
  initialDialogue,
  userDialogue,
  botDialogue
}