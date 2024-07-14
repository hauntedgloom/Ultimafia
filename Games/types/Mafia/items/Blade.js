const Item = require("../Item");

module.exports = class Blade extends Item {
  constructor() {
    super("Blade");
    this.reveal = true;
    this.meetingName = "Use Move";

    this.meetings = {
      [this.meetingName]: {
        actionName: "Battle",
        states: ["Day"],
        flags: ["voting", "instant", "noVeg"],
        action: {
          labels: ["kill", "blade"],
          item: this,
          run: function () {
            if (!this.actor.alive || !this.target.alive) return;

            // Stores their move selection
            let userVote = this.meeting.votes[this.actor.id];
            let enemyVote = this.meeting.votes[this.target.id];

            // If neither the user or target voted then return
            if (!userVote || !enemyVote) {
              return;
            } else if (userVote == enemyVote) {
              this.game.queueAlert("You both killed each other.");
            }
          },
        },
        inputType: "custom",
        targets: ["Attack"],
      },
    };
  }
};

//Shows a list of moves samurai and their opponent can choose
let moves = [
  {
    // Basic attack move, deals 3-10 base damage.
    Attack: {
      actionName: "Attack",
      // Can only be done in the day
      states: ["Day"],
      flags: ["voting", "instant", "noVeg"],
      msg: "",
      action: {
        labels: ["attack"],
        run: function () {
          this.game.queueAlert(`${this.actor.name} uses slash.`);
          if (this.dominates()) {
            this.target.kill("basic", this.actor);
            this.actor.item.drop();
          }
        },
      },
    },
  },
];
