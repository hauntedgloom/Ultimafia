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
          labels: ["giveItem", "gun"],
          priority: PRIORITY_ITEM_GIVER_DEFAULT,
          run: function () {
            // Gives a blade to the samurai and their opponent
            this.actor.holdItem("Gun");
            this.target.holdItem("Gun");
          },
        },
      },
    };
  }
};
