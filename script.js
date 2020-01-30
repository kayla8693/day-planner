$(document).ready(function () {
    // moment.js used to get today's date and current hour
    var today = moment().format('dddd, MMMM Do YYYY');
    var saveBtn = $(".saveBtn");
    var currentDay = $("#currentDay");
    var currentHour = moment().hour();
    var description = $('.description');

    console.log(currentHour)
    
// gets todays date from variable
    currentDay.text(today);
// calls function to check rowtime + change color based on that
    hourColor();

    function hourColor() {
// for each element with .description...
        description.each(function () {

// rowHour = the id of each element, which is the element's hour #
            var rowHour = $(this).attr('id');

// attach all classes back to the element
            if (rowHour < currentHour) {
                $(this).attr('class', 'past col-md-10 description');
            }
            else if (rowHour > currentHour) {
                $(this).attr('class', 'future col-md-10 description')
            }
            else {
                $(this).attr('class', 'present col-md-10 description')
            };
        });
    };


    saveBtn.on('click', function () {
// task = any sibling of this button w .description's value, which = user input
        var task = $(this).siblings('.description').val();
// time = any sibling of this button w .description's id, which is the hour
        var time = $(this).siblings('.description').attr('id');
        console.log(task)

        localStorage.setItem(time, task);
    });

// gets task from local storage + sets it to text of its appropriate hour
    $('#9').text(localStorage.getItem('9'));
    $('#10').text(localStorage.getItem('10'));
    $('#11').text(localStorage.getItem('11'));
    $('#12').text(localStorage.getItem('12'));
    $('#13').text(localStorage.getItem('13'));
    $('#14').text(localStorage.getItem('14'));
    $('#15').text(localStorage.getItem('15'));
    $('#16').text(localStorage.getItem('16'));
    $('#17').text(localStorage.getItem('17'));

});
