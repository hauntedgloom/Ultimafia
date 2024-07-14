const Item = require("../Item");

// Setting global stats for the player and target
let actorHP = 150;
let targetHP = 150;
let actorATK = 15;
let actorDEF = 10;
let actorCRIT = 1.0;
let targetDEF = 10;

module.exports = class Blade extends Item {
  //SUCCESSFUL PRE STAT
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
          run: this.run.bind(this),
          performAction: this.performAction.bind(this),
        },
        inputType: "custom",
        targets: ["Attack", "Defend", "Charge"],
      },
    };
  }

  run() {
    if (!this.actor.alive || !this.target.alive) return;

    let turn = 1;
    // While the actor or target is alive
    while (actorHP > 0 && targetHP > 0) {
      this.game.queueAlert(`Turn ${turn}`);
      // Shows HP of Actor (No Dupliates)
      this.game.queueAlert(`${this.actor.name} HP: ${actorHP}`);

      // Stores their move selection
      let userVote = this.meeting.votes[this.actor.id];
      let enemyVote = this.meeting.votes[this.target.id];

      // If neither the user or target voted then return
      if (!userVote || !enemyVote) {
        return;
      }

      // Set a state for deciding if an attack has been made
      let attackMade = false;

      // Decide whose action goes first
      let firstMove = Math.floor(Math.random() * 2);

      // User goes first
      if (firstMove === 0) {
        this.performAction(this.actor, this.target, userVote, attackMade);
        //Changes the state for attack made incase a defend happens.
        attackMade = true;
        this.performAction(this.target, this.actor, enemyVote, attackMade);
      } else {
        // Target goes first
        this.performAction(this.target, this.actor, enemyVote, attackMade);

        //Changes the state for attack made incase a defend happens
        attackMade = true;
        this.performAction(this.actor, this.target, userVote, attackMade);
      }
      //Increase the turn after actions have been used
      turn++;
    }

    // If the actor or target died, set the winner
    if (actorHP > 0) {
      this.target.kill("basic", this.actor);
    } else {
      this.actor.kill("basic", this.target);
    }

    //Sets win condition for samurai
    if (this.actor.role == "Samurai") {
      this.actor.data.winner = actorHP > 0 ? this.actor.name : this.target.name;
      this.game.queueAlert(`${this.actor.data.winner} has won the duel!`);
    }

    // Remove items from both players
    this.actor.item.drop();
  }

  // Function for handling both players actions
  performAction(user, enemy, choice, attackMade) {
    let selection = moves.find((move) => move[choice]);
    if (selection) {
      //If an attack hasn't been made assess the messages for defend
      if (!attackMade && choice == "Defend") {
        let defend = moves.find((move) => move.Defend);
        if (defend) {
          let critFailure = " Unable to defend from crits.";
          defend.Defend.action.run.msg += critFailure;
        }
      }
      selection[choice].action.run.call({ user, enemy });
      this.game.queueAlert(selection[choice].msg);
    }
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
          let damage = Math.floor(Math.random() * 4) + 10;
          targetHP -= damage;
          msg = `${this.actor.name} uses slash. ${this.target.name} loses ${
            damage * (1 + actorCRIT) * (1 - targetDEF / 100) + actorATK
          } HP!`;
        },
      },
    },
  },
  {
    // Basic defense increase move stored as a multiplier
    Defend: {
      actionName: "Defend",
      // Can only be done in the day
      states: ["Day"],
      flags: ["voting", "instant", "noVeg"],
      msg: "",
      action: {
        labels: ["defend"],
        run: function () {
          let damageBlocked = Math.floor(Math.random() * 6) * 10;
          actorDEF += damageBlocked;
          msg = `${this.actor.name} uses defend! Defense is increased.`;
        },
      },
    },
  },
  {
    // Basic attack boost move stored as a multiplier
    Charge: {
      actionName: "Charge",
      // Can only be done in the day
      states: ["Day"],
      flags: ["voting", "instant", "noVeg"],
      msg: "",
      action: {
        labels: ["charge"],
        run: function () {
          actorCRIT += 0.25;
          msg = `${this.actor.name} uses charge! Attack power increased.`;
        },
      },
    },
  },
];
