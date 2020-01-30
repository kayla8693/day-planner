$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do');
    var saveBtn = $(".saveBtn");
    var currentDay = $("#currentDay");
    var currentHour = moment().hour();
    var hour = $('.hour');
    var description = $('.description');

    console.log(currentHour)
    
    currentDay.text(today);
    hourColor();
    renderTask();

    function hourColor() {
        description.each(function () {
            var rowHour = $(this).attr('id');
            if (rowHour < currentHour) {
                $(this).attr('class', 'past col-md-10');
            }
            else if (rowHour > currentHour) {
                $(this).attr('class', 'future col-md-10')
            }
            else {
                $(this).attr('class', 'present col-md-10')
            };
        });
    };

    function renderTask() {
        var task = localStorage.getItem('task')
        description.text(task);
    };

    saveBtn.on('click', function () {

        // event.preventDefault();
        var task = description.val();
        console.log(task)

        localStorage.setItem('task', task);
        renderTask();
    });

});