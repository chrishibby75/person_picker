function Member (name, src) {
    this.name = name;
    this.src = src;
}
var shawntell = new Member("Shawntell Sanchez", "shawncy.jpg");
var matt = new Member("Matt Palmer", "matt.jpg");
var jordan = new Member("Jordan Parr", "jordan.jpg");
var chris = new Member("Chris Hibberd", "chris.jpg");
var david = new Member("David Orme", "david.jpg");
var jenn = new Member("Jenn Pickett", "jenn.jpg");
var cutler = new Member("Cutler Christensen", "cutler.jpg");
var ashley = new Member("Ashley Dawson", "ashley.jpg");
var brice = new Member("Brice Gibson", "brice.jpg");

var members = [shawntell, matt, jordan, chris, david, jenn, cutler, ashley, brice]

$("#random-button").on("click", function() {
    var randomMember = members[Math.floor(Math.random() * members.length)];
    // console.log(randomMember.name);

    $("#name-field").html("<h1>" + randomMember.name + "</h1>");
    $("#img-div").html("<img id='img-field' src='images/" + randomMember.src + "'>");
});
