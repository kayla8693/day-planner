var currentHour = moment().minutes();
console.log(currentHour);

var a = moment().format();
console.log(a);

var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");
currentDay.text(a);
