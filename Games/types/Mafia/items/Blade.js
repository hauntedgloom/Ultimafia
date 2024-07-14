const Item = require("../Item");

module.exports = class Blade extends Item {
  constructor() {
    super("Blade");
    this.reveal = true;
    this.meetingName = "Use Move";

    this.meetings = {
      [this.meetingName]: {
        actionName: "Attack",
        states: ["Day"],
        flags: ["voting", "instant", "noVeg"],
        action: {
          labels: ["kill", "blade"],
          item: this,
          run: function () {
            attack.run();
          },
        },
      },
    };
  }
};

//Shows a list of moves samurai and their opponent can choose
let attack = {
  actionName: "Attack",
  // Can only be done in the day
  states: ["Day"],
  flags: ["voting", "instant", "noVeg"],
  action: {
    labels: ["kill", "attack"],
    run: function () {
      this.game.queueAlert(`${this.actor.name} uses slash.`);
      this.actor.item.drop();
      this.target.kill("basic", this.actor);
    },
  },
};
