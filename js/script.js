$(document).ready(function () {
  $(".box").on("click", function () {
    //When we click on an element that has a 'box' class, this even will be fired.
    var classNames = $(this).attr("class").split(" ");
    var boxClass = className[0];
    var className = classNames[1];
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      //If this object is already red, turn it black
      $("." + className).css("background-color", "#000");
    } else {
      //Else turn all elements with a box class balck and then change the color of all elements
      //with the same class name as the clicked elelement to red
      $("." + boxClass).css("background-color", "#000");
      $("." + className).css("background-color", "red");
    }
  });
});
