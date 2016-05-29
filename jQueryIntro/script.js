// basic
// document.getElementById("mainArticle").className = "highlight";
// document.getElementById("mainArticle").className = "hightlight";

// use jQuery - basic
// jQuery("#mainArticle").addClass("highlight");
// jQuery("#mainArticle").addClass("highlight");

// find all elements with a particular class
// jQuery(".tourDescription").addClass("highlight");
// jQuery(".tourDescription").addClass("highlight");

// find all elements with a particular tag
//jQuery("li").addClass("highlight");
// jQuery("li").addClass("highlight");

// find the last li
//jQuery("li:last").addClass("highlight");
// jQuery("li:last").addClass("highlight");

// find any paragraph that contain the word "packages"
//jQuery("p:contains('packages')").addClass("highlight");
// jQuery("p:contains('packages')").addClass("highlight");

// EFFECTS

// hide all paragraphs.
//$("p").hide(4000);
// $("p").hide(4000);

//$("p").fadeOut(4000);
// $("p").fadeOut(4000);

// EVENTS

// simple click
//$("#pageID").click(function() {
//   $("#pageID").text("You clicked me!");
//});

// $("#pageID").click(function(){
// 	$("#pageID").text("You clicked me!");
// });

// add $(this) to refer to current element
//$("h2").click(function() {
//   $(this).text("You clicked me!");
//});

// $("h2").click(function(){
// 	$(this).text("You clicked me!");
// });

// add effects - this makes each paragraph fade out when clicked.
//$("p").click(function() {
//  $(this).fadeOut(2000);
//});

// $("p").click(function(){
// 	$(this).fadeOut(2000);
// });

// Page load events - instead of window.onload()
//$(document).ready(function () {
//  $("#pageID").text("The DOM is fully loaded.");
//});

// $(document).ready(function() {
// 	$("#pageID").text("The DOME Is fully loaded");
// });

// you don't have to worry about accidentally calling it multiple times.
//$(document).ready(function () {
//   $("h1").css("color","red");
//});

$(document).ready(function() {
	$("h1").css("color", "red");
});