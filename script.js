// began w/ using jquery and created a function - within function called dayjs and formatting to display current day
$(document).ready(function () {
    var now = dayjs().format('MMMM, ddd D. h:mm A')
    $("#currentDay").text(now)

// this function allows the use of the save button, input is saved to local storage where it remains even if the page is refreshed
    $(".saveBtn").on("click", function () {
        var currentHour = $(this).parent().attr("id")
        var textValue = $(this).siblings(".description").val()

        localStorage.setItem(currentHour, textValue)
    })

// using jQuery again, the house selected is the given a value 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))
    $("#hour-18 .description").val(localStorage.getItem("hour-18"))
    $("#hour-19 .description").val(localStorage.getItem("hour-19"))
    $("#hour-20 .description").val(localStorage.getItem("hour-20"))
    $("#hour-21 .description").val(localStorage.getItem("hour-21"))

// to change colors based on time, I created this function using dayjs again 
    function styleUpdate() {
        var daytime = dayjs().hour()

// time block function below allows for past, present and future to be applied
        $(".time-block").each(function () {
            var divHour = parseInt($(this).attr("id").split("-")[1]);
            if (divHour < daytime) {
                $(this).addClass("past")
            } else if (divHour === daytime) {
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
                divHour > daytime
                $(this).removeClass("past present")
                $(this).addClass("future")
            }
        })
    }

    // styleUpdate function called after time-block function is executed 
    styleUpdate()
})

