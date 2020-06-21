// constructor
function Member (name, src) {
    this.name = name;
    this.src = src;
}

// instances from constructor
var shawntell = new Member("Shawntell Sanchez", "shawncy.jpg");
var matt = new Member("Matt Palmer", "matt.jpg");
var jordan = new Member("Jordan Parr", "jordan.jpg");
var chris = new Member("Chris Hibberd", "chris.jpg");
var david = new Member("David Orme", "david.jpg");
var jenn = new Member("Jenn Pickett", "jenn.jpg");
var cutler = new Member("Cutler Christensen", "cutler.jpg");
var ashley = new Member("Ashley Dawson", "ashley.jpg");
var brice = new Member("Brice Gibson", "brice.jpg");

// put all instances into an array
var members = [shawntell, matt, jordan, chris, david, jenn, cutler, ashley, brice]

// event listener that causes the button click to start things
$("#random-button").on("click", function() {
    animatePress();

    // creates index for the members array
    var randomMemberIndex = [Math.floor(Math.random() * members.length)];

    // renders member values to dom
    $("#name-field").html("<h1>" + members[randomMemberIndex].name + "</h1>");
    $("#img-div").html("<img id='img-field' src='images/" + members[randomMemberIndex].src + "'>");

    // removes chosen item from array so it doesn't get picked again
    members.splice(randomMemberIndex, 1);


    if (members.length === 0) {
        $("#title").html("<h1>All team members have been selected</h1>");
        $("#name-field").html("refresh page to start over");
        $("#img-div").html("");
    } else {
        $("#title").html("<h1>Choose The Next Team Member</h1>")
    }

});

// button animation
function animatePress() {

    $("#random-button").addClass("pressed");
  
    setTimeout(function () {
      $("#random-button").removeClass("pressed");
    }, 150);
  };
