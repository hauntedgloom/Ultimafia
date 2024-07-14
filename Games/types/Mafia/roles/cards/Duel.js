const Card = require("../../Card");

module.exports = class Duel extends Card {
  constructor(role) {
    super(role);

    // Setting winner
    this.actor.data.winner = "";

    // Setting hp
    this.actor.data.hp = 150;
    this.target.data.hp = 150;

    // Setting defense
    this.actor.data.def = 10;
    this.target.data.def = 10;

    this.actor.data.atk = 15;
    this.target.data.atk = 15;

    // Setting crit
    this.actor.data.crit = 1.0;
    this.target.data.crit = 1.0;

    /*
    this.listeners = {
      state: function (stateInfo) {
        if (!this.player.alive) {
          return;
        }

        if (!stateInfo.name.match(/Day/)) {
          return;
        }

        this.game.queueAlert(
          "A samurai has come to town to prove their worth! Losing against them could bring disastrous consequences…"
        );
      },
    };*/

    this.meetings = {
      Duel: {
        states: ["Night"],
        flags: ["voting"],
        action: {
          labels: ["duel"],
          run: function () {
            this.target.holdItem("Blade");
            this.actor.holdItem("Blade");
          },
          shouldMeet: function () {
            //If a battle happened, samurai can't pick again
            return this.actor.data.hp == 150;
          },
        },
      },
    };
  }
};
