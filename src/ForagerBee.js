var ForagerBee = function(age, color, food, job) {
  HoneyMakerBee.call(this, age, color, food, job);
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function() {
	this.treasureChest.push('treasure');
}


