var images = [];

function failCakes(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  images.push(this);
};

var random = function () {
  return Math.floor(Math.random() * images.length);
  console.log(random);
}

random();


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

calcNewIndex = function (index1) {
  do {
    var index2 = random();
  } while (index1 === index2)
  return index2;
}

vote = function (index) {
  console.log(images[index].name + ' had ' + images[index].votes + ' votes.');
  images[index].votes++;
  console.log(images[index].name + ' now has ' + images[index].votes + ' votes.');
  picture1.parentNode.removeChild(picture1);
  picture2.parentNode.removeChild(picture2);
  displayPhotos();
}

var picture1 = document.getElementById('img1');
var picture2 = document.getElementById('img2');

displayPhotos = function () {
  var index1 = random();
  var index2 = calcNewIndex(index1);
  var temp = document.getElementById('temp');


picture1 = document.createElement('img');
picture2 = document.createElement('img');
picture1.setAttribute('id', 'img1');
picture2.setAttribute('id', 'img2');

picture2.setAttribute('src', images[index2].path);

picture1.setAttribute('src', images[index1].path);
picture1.setAttribute('width', '300');
picture2.setAttribute('width', '300');
temp.appendChild(picture1);
temp.appendChild(picture2);

picture1.addEventListener('click', function(){
  vote(index1) //  a random number
});
picture2.addEventListener('click', function(){
  vote(index2)
  });

}
displayPhotos();


