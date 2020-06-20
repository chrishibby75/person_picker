function Member (name, src) {
    this.name = name;
    this.src = src;
}
var shawntell = new Member("Shawntell Sanchez", "images/shawncy.jpg");
var matt = new Member("Matt Palmer", "images/matt.jpg");
var jordan = new Member("Jordan Parr", "images/jordan.jpg");
var chris = new Member("Chris Hibberd", "images/chris.jpg");
var david = new Member("David Orme", "images/david.jpg");
var jenn = new Member("Jenn Pickett", "images/jenn.jpg");
var cutler = new Member("Cutler Christensen", "images/cutler.jpg");
var ashley = new Member("Ashley Dawson", "images/ashley.jpg");

var members = [shawntell, matt, jordan, chris, david, jenn, cutler, ashley]

$("#random-button").on("click", function() {
    var randomMember = members[Math.floor(Math.random() * members.length)];
    console.log(randomMember.name);

    $("#name-field").html("<h1>" + randomMember.name + "</h1>");
    $("#img-field").attr("src", randomMember.src);
})
