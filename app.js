var images = [];

function failCakes(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  images.push(this);
};

var baby = new failCakes("baby", src="images/baby.png");
var buzz = new failCakes("buzz", src="images/buzz.png");
var clown = new failCakes("clown", src="images/clown.png");
var deadbaby = new failCakes("deadbaby", src="images/deadbaby.jpg");
var literal = new failCakes("literal", src="images/literal.png");
var love = new failCakes("love", src="images/love.jpg");
var melting = new failCakes("melting", src="images/melting.png");
var olympics = new failCakes("olympics", src="images/olympics.png");
var proofread = new failCakes("proofread", src="images/proofread.png");
var remember = new failCakes("remember", src="images/remember.png");
var shoes = new failCakes("shoes", src="images/shoes.png");
var sprinkles = new failCakes("sprinkles", src="images/sprinkles.png");
var toenail = new failCakes("toenail", src="images/toenail.png");



var random = function () {
  return Math.floor(Math.random() * images.length);
  console.log(random);
}

random();


var option1 = document.createElement("img");
option1.src = images[random()].path;
document.getElementById("option1").appendChild(option1);

var option2 = document.createElement("img");
option2.src = images[random()].path;
document.getElementById("option2").appendChild(option2);
