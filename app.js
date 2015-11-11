
var images = [];

var picture1 = document.getElementById('picture1');
var picture2 = document.getElementById('picture2');



function failCakes(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  images.push(this);
};

var baby = new failCakes("baby", "images/baby.png");
var buzz = new failCakes("buzz", "images/buzz.png");
var clown = new failCakes("clown", "images/clown.png");
var deadbaby = new failCakes("deadbaby", "images/deadbaby.jpg");
var literal = new failCakes("literal", "images/literal.png");
var love = new failCakes("love", "images/love.jpg");
var melting = new failCakes("melting", "images/melting.png");
var olympics = new failCakes("olympics", "images/olympics.png");
var proofread = new failCakes("proofread", "images/proofread.png");
var remember = new failCakes("remember", "images/remember.png");
var shoes = new failCakes("shoes", "images/shoes.png");
var sprinkles = new failCakes("sprinkles", "images/sprinkles.png");
var toenail = new failCakes("toenail", "images/toenail.png");

var randomNum = function () {
  return Math.floor(Math.random() * images.length);
  console.log(randomNum);
};

var calcNewNum = function (num1) {
  var num2;
  do {
    num2 = randomNum();
  } while (num1 === num2)
  return num2;
};

var vote = function (index) {
  console.log(images[index].name + ' had ' + images[index].votes + ' votes.');
  images[index].votes++;
  console.log(images[index].name + ' now has ' + images[index].votes + ' votes.');
  myChart.segments[index].value = images[index].votes;
  myChart.update();

  displayImages();
};

var makeChart = function() {

  var pieLabels = [];
  var pieVotes = [];

  for (var i = 0; i < images.length; i++) {
    pieLabels.push(images[i].name);
    pieVotes.push(images[i].votes);
  }

  console.log(pieLabels, pieVotes);

  function randomColor() {
    var hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var result = '#';
    for (var i = 0; i < 6; i++) {
      result += hexDigits[Math.floor(Math.random()*hexDigits.length)];
    }
    return result;
  }
  var pieData = [];
    for (var i in pieLabels) {
      pieData.push({
        value: pieVotes[i],
        label: pieLabels[i],
        color: randomColor(),
        highlight: '#eeeeee'
      })
  }
      return pieData;
};


var num1, num2;

var displayImages = function () {
  num1 = randomNum();
  num2 = calcNewNum(num1);
  var temp = document.getElementById('temp');

  picture1.setAttribute('src', images[num1].path);
  picture2.setAttribute('src', images[num2].path);


};

picture1.addEventListener('click', function(){
    vote(num1);
    console.log('You voted for ' + images[num1].name);
  });

  picture2.addEventListener('click', function(){
    vote(num2);
    console.log('You voted for ' + images[num2].name);
    });

displayImages();

var context = document.getElementById("canvas").getContext("2d");
var myChart = new Chart(context).Pie(makeChart());

