
var images = [];
var picture1 = document.getElementById('img1');
var picture2 = document.getElementById('img2');

function failCakes(name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  images.push(this);
  // tracker.images.push(this);
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


calcNewNum = function (num1) {
  do {
    var num2 = random();
  } while (num1 === num2)
  return num2;
}

vote = function (index) {
  console.log(images[index].name + ' had ' + images[index].votes + ' votes.');
  images[index].votes++;
  console.log(images[index].name + ' now has ' + images[index].votes + ' votes.');
  picture1.parentNode.removeChild(picture1);
  picture2.parentNode.removeChild(picture2);
  displayImages();
}



displayImages = function () {
  var num1 = random();
  var num2 = calcNewNum(num1);
  var temp = document.getElementById('temp');


  picture1 = document.createElement('img');
  picture2 = document.createElement('img');
  picture1.setAttribute('id', 'img1');
  picture2.setAttribute('id', 'img2');

  picture1.setAttribute('src', images[num1].path);
  picture2.setAttribute('src', images[num2].path);

  picture1.setAttribute('width', '300');
  picture2.setAttribute('width', '300');
  temp.appendChild(picture1);
  temp.appendChild(picture2);


  picture1.addEventListener('click', function(){
    vote(num1);
    console.log('You voted for ' + images[num1].name);
  });

  picture2.addEventListener('click', function(){
    vote(num2);
    console.log('You voted for ' + images[num2].name);
    });

  var pieLabels = [];
  var pieVotes = [];

  for (var i = 0; i < images.length; i++) {
    pieLabels.push(images[i].name);
    pieVotes.push(images[i].votes);
  }

console.log(pieLabels, pieVotes);

  // var pieData = [
  //   {
  //     value: 30,
  //     color:"#F7464A",
  //     highlight: "#FF5A5E",
  //     label: 'red'
  //   },
  //   {
  //     value: 30,
  //     color: "#46BFBD",
  //     highlight: "#5AD3D1",
  //     label: 'dead'
  //   }
  // ];
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

// Get the context of the canvas element we want to select
var myChart = document.getElementById("myChart").getContext("2d");
new Chart(myChart).Pie(pieData);
//var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);

}

displayImages();

// var tracker = {
//   images: []
// };

// tracker.random = function () {
//   return Math.floor(Math.random() * images.length);
//   console.log(random);
// };

// tracker.calcNewNum = function (num1) {
//   do {
//     var num2 = tracker.random();
//   } while (num1 === num2)
//   return num2;
// };

// tracker.vote = function (index) {
//   console.log(images[index].name + ' had ' + images[index].votes + ' votes.');
//   images[index].votes++;
//   console.log(images[index].name + ' now has ' + images[index].votes + ' votes.');
//   picture1.parentNode.removeChild(picture1);
//   picture2.parentNode.removeChild(picture2);
//   displayImages();
// };

// tracker.displayImages = function () {
//   var num1 = tracker.random();
//   var num2 = tracker.calcNewNum(num1);
//   var temp = document.getElementById('temp');


//   picture1 = document.createElement('img');
//   picture2 = document.createElement('img');
//   picture1.setAttribute('id', 'img1');
//   picture2.setAttribute('id', 'img2');

//   picture1.setAttribute('src', images[num1].path);
//   picture2.setAttribute('src', images[num2].path);

//   picture1.setAttribute('width', '300');
//   picture2.setAttribute('width', '300');
//   temp.appendChild(picture1);
//   temp.appendChild(picture2);

//   picture1.addEventListener('click', function(){
//     vote(num1);
//     console.log('You voted for ' + images[num1].name);
//   });

//   picture2.addEventListener('click', function(){
//     vote(num2);
//     console.log('You voted for ' + images[num2].name);
//     });

// };

// tracker.random();
// tracker.calcNewNum();
// tracker.vote();
// tracker.displayImages();

// END TRACKER OBJECT

// chart stuff goes here
// var pieLabels = [];
// var pieVotes = [];
// for (var i = 0; i < 12; i++) {
//   pieLabels.push(images[i].name);
//   pieVotes.push(images[i].votes);
// }

// console.log(pieLabels, pieVotes);



// The following is sample data. We need to take the data from images.name and images.path and push it to a new array for the chart



// end chart stuff


