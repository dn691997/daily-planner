function realtimeClock() {
  const rtClock = new Date();
  //display clock
  document.getElementById("clock").innerHTML = rtClock;
  const time = setTimeout(realtimeClock, 500);
}

//Save button
$(".saveBtn").on("click", function () {
  var timeShown = $(this).siblings(".time").text();
  var textInput = $(this).siblings("textarea").val();
  localStorage.setItem(timeShown, textInput);
});

var getStorage = function () {
  $(".time").each(function () {
    var timeShown = $(this).text();
    var textInput = localStorage.getItem(timeShown);
    $(this).siblings("textarea").val(textInput);
  });
};

getStorage();
