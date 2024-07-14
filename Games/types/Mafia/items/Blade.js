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
          inputType: "custom",
          targets: ["Attack", "Defend", "Charge"],
          shouldMeet: function () {
            return this.actor.alive && this.target.alive;
          },
          action: {
            item: this,
            labels: ["kill", "blade"],
            run: function () {
              let actor = this.actor;
              let target = this.target;
  
              if (!actor.alive || !target.alive) return;
  
              let turn = 1;
              while (actor.data.hp > 0 && target.data.hp > 0) {
                this.game.queueAlert(`Turn ${turn}`);
                this.game.queueAlert(`${actor.name} HP: ${actor.data.hp}`);
  
                let actorMove = this.meeting.votes[actor.id];
                let targetMove = this.meeting.votes[target.id];
  
                if (!actorMove || !targetMove) {
                  return;
                }
  
                let attackMade = false;
  
                let firstMove = Math.floor(Math.random() * 2);
  
                if (firstMove === 0) {
                  this.performAction(actor, target, actorMove, attackMade);
                  attackMade = true;
                  this.performAction(target, actor, targetMove, attackMade);
                } else {
                  this.performAction(target, actor, targetMove, attackMade);
                  attackMade = true;
                  this.performAction(actor, target, actorMove, attackMade);
                }
  
                turn++;
              }
  
              if (actor.data.hp > 0) {
                target.kill("basic", actor);
              } else {
                actor.kill("basic", target);
              }
  
              if (actor.role.name === "Samurai") {
                actor.data.winner = actor.data.hp > 0 ? actor.name : target.name;
                this.game.queueAlert(`${actor.data.winner} has won the duel!`);
              }
  
              actor.item.drop();
            },
          },
        },
      };
    }
  
    performAction(user, enemy, choice, attackMade) {
      let moves = [
        {
          Attack: {
            actionName: "Attack",
            states: ["Day"],
            flags: ["voting", "instant", "noVeg"],
            run: function () {
              let damage = Math.floor(Math.random() * 4) + 10;
              enemy.data.hp -= damage;
              this.game.queueAlert(`${user.name} uses slash. ${enemy.name} loses ${damage} HP!`);
            },
          },
        },
        {
          Defend: {
            actionName: "Defend",
            states: ["Day"],
            flags: ["voting", "instant", "noVeg"],
            run: function () {
              let damageBlocked = Math.floor(Math.random() * 6) * 10;
              user.data.def += damageBlocked;
              this.game.queueAlert(`${user.name} uses defend! Defense is increased.`);
            },
          },
        },
        {
          Charge: {
            actionName: "Charge",
            states: ["Day"],
            flags: ["voting", "instant", "noVeg"],
            run: function () {
              user.data.crit += 0.25;
              this.game.queueAlert(`${user.name} uses charge! Attack power increased.`);
            },
          },
        },
      ];
  
      let selection = moves.find((move) => move[choice]);
      if (selection) {
        if (!attackMade && choice === "Defend") {
          let defend = moves.find((move) => move.Defend);
          if (defend) {
            let critFailure = " Unable to defend from crits.";
            defend.Defend.run.msg += critFailure;
          }
        }
        selection[choice].run.call(this);
        this.game.queueAlert(selection[choice].msg);
      }
    }
  }
