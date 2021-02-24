// constructor
function Member (name, src) {
    this.name = name;
    this.src = src;
}

// instances from constructor
const shawntell = new Member("Shawntell Sanchez", "shawncy.jpg");
const matt = new Member("Matt Palmer", "matt.jpg");
const jordan = new Member("Jordan Parr", "jordan.jpg");
const chris = new Member("Chris Hibberd", "chris.jpg");
const jenn = new Member("Jenn Pickett", "jenn.jpg");
const cutler = new Member("Cutler Christensen", "cutler.jpg");
const ashley = new Member("Ashley Dawson", "ashley.jpg");
const brice = new Member("Brice Gibson", "brice.jpg");

// put all instances into an array
const members = [shawntell, matt, jordan, chris, jenn, cutler, ashley, brice];

// event listener that causes the button click to start things
$("#random-button").on("click", function() {
    animatePress();

    // creates index for the members array
    let randomMemberIndex = [Math.floor(Math.random() * members.length)];    
    
        if (members.length > 0) {
            // renders member values to dom
            $("#title").html("<h1>Choose The Next Team Member</h1>");
            $("#name-field").html("<h1>" + members[randomMemberIndex].name + "</h1>");
            $("#img-div").html("<img id='img-field' src='images/" + members[randomMemberIndex].src + "'>");
            // removes chosen item from array so it doesn't get picked again
            members.splice(randomMemberIndex, 1);
        } else {
            $("#title").html("<h1>All Team Members Have Been Selected</h1>");
            $("#name-field").html("press any key to begin again");
            $("#img-div").html("");
            startOver();
    }
});

// button animation
function animatePress() {

    $("#random-button").addClass("pressed");
  
    setTimeout(function () {
      $("#random-button").removeClass("pressed");
    }, 150);
  };

  // press any key to refresh the page once array is empty
  function startOver() {
      $(document).keypress(function() {
        location.reload();        
      });
      $(document).on("mousedown", function() {
          location.reload();
      });
  }
  