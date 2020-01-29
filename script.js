var body = document.body;


var a = moment().format('dddd, MMMM Do');

var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");
currentDay.text(a);
var hour = $('.hour');
var description = $('.description');
console.log(description)



console.log(moment().fromNow());
console.log(moment().hour())
hourColor();

renderTask();


function hourColor() {
    if (hour.val() !== moment().hour()) {
        description.attr('class', 'future col-md-10')
    }

    if (hour.val() == moment().hour()) {
        description.attr('class', 'present')
    }
}


function renderTask() {
    var task = localStorage.getItem('task')
    description.text(task);

};

saveBtn.on('click', function () {
    event.preventDefault();

    var task = description.val();
    console.log(task)

    localStorage.setItem('task', task);
    renderTask();
});