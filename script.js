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

    function hourColor() {
        description.each(function () {
            var rowHour = $(this).attr('id');
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

        var task = $(this).siblings('.description').val();
        var time = $(this).siblings('.description').attr('id');
        console.log(task)

        localStorage.setItem(time, task);
    });

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
