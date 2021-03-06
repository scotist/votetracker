if (localStorage.images) {
  var images = JSON.parse(localStorage.images);
} else {
  var images = [];
  new failCakes("baby", "images/baby.png");
  new failCakes("buzz", "images/buzz.png");
  new failCakes("clown", "images/clown.png");
  new failCakes("deadbaby", "images/deadbaby.jpg");
  new failCakes("literal", "images/literal.png");
  new failCakes("love", "images/love.jpg");
  new failCakes("melting", "images/melting.png");
  new failCakes("olympics", "images/olympics.png");
  new failCakes("proofread", "images/proofread.png");
  new failCakes("remember", "images/remember.png");
  new failCakes("shoes", "images/shoes.png");
  new failCakes("sprinkles", "images/sprinkles.png");
  new failCakes("toenail", "images/toenail.png");
}

var pieData = {
  value: 1,
  color: "#F74648",
  highlight: "#FF5a5e",
  label: "Chart"
};

var picture1 = document.getElementById('picture1');
var picture2 = document.getElementById('picture2');

function failCakes(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  images.push(this);
};

var tracker = {
  randomNum: function () {
    return Math.floor(Math.random() * images.length);
    console.log(randomNum);
  },

  calcNewNum: function (num1) {
    var num2;
    do {
      num2 = tracker.randomNum();
    } while (num1 === num2)
      return num2;
  },

  vote: function (index) {
    console.log(images[index].name + ' had ' + images[index].votes + ' votes.');
    images[index].votes++;
    console.log(images[index].name + ' now has ' + images[index].votes + ' votes.');
    displayImages();
  }
}

var makeChart = function() {
  var pieLabels = [];
  var pieVotes = [];
  for (var i = 0; i < images.length; i++) {
    pieLabels.push(images[i].name);
    pieVotes.push(images[i].votes);
  }
  function randomColor() {
    var hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var result = '#';
    for (var i = 0; i < 6; i++) {
      result += hexDigits[Math.floor(Math.random()*hexDigits.length)];
    }
    return result;
  }
  pieData = [];
    for (var i in pieLabels) {
      pieData.push({
        value: pieVotes[i],
        label: pieLabels[i],
        color: randomColor(),
        highlight: '#eeeeee'
      })
  }
  var oldcanv = document.getElementById('canvas');
  document.getElementById('main').removeChild(oldcanv);
  var canv = document.createElement('canvas');
  canv.id = 'canvas';
  canv.height = '400';
  canv.width = '400';
  document.getElementById('main').appendChild(canv);
  context = canv.getContext('2d');
  new Chart(context).Pie(pieData);
};

var num1, num2;

var displayImages = function () {
  num1 = tracker.randomNum();
  num2 = tracker.calcNewNum(num1);
  var temp = document.getElementById('temp');

  picture1.setAttribute('src', images[num1].path);
  picture2.setAttribute('src', images[num2].path);
};

picture1.addEventListener('click', function(){
    tracker.vote(num1);
    makeChart();
    localStorage.setItem('images', JSON.stringify(images));
  });

picture2.addEventListener('click', function(){
    tracker.vote(num2);
    makeChart();
    localStorage.setItem('images', JSON.stringify(images));
  });

displayImages();
makeChart();

var context = document.getElementById("canvas").getContext("2d");
var myChart = new Chart(context).Pie(pieData);
