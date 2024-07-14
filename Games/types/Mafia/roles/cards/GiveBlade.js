const Card = require("../../Card");
const { PRIORITY_ITEM_GIVER_DEFAULT } = require("../../const/Priority");

// SUCCESSFUL PRE-STAT
module.exports = class GiveBlade extends Card {
  constructor(role) {
    super(role);

    //this.actor.data.winner = "";

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
