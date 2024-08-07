const Card = require("../../Card");
const { PRIORITY_ITEM_GIVER_DEFAULT } = require("../../const/Priority");

module.exports = class GiveBlade extends Card {
  constructor(role) {
    super(role);

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
