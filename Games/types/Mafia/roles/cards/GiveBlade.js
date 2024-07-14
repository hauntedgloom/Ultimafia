const Card = require("../../Card");
const { PRIORITY_ITEM_GIVER_DEFAULT } = require("../../const/Priority");

module.exports = class GiveBlade extends Card {
  constructor(role) {
    super(role);

    this.actor.data.winner = "";
    this.actor.data.hp = 150;
    this.target.data.hp = 150;

    this.actor.data.atk = 15;
    this.target.data.atk = 15;

    this.actor.data.def = 10;
    this.target.data.def = 10;

    this.actor.data.crit = 1.0;
    this.target.data.crit = 1.0;

    this.meetings = {
      "Give Blade": {
        states: ["Night"],
        flags: ["voting"],
        action: {
          labels: ["giveItem", "blade"],
          priority: PRIORITY_ITEM_GIVER_DEFAULT,
          run: function () {
            this.target.holdItem("Blade");
            this.actor.holdItem("Blade");
          },
        },
      },
    };
  }
};
