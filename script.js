
var days = document.querySelectorAll('.event')


days.forEach(day => {
    var date = dayjs(day.dataset.date).format('MMMM, ddd D. h:mm A')
    var dateEl = day.querySelector('.date')
    dateEl.innerText = date
} )


$(document).ready(function(){
    var now = dayjs().format('MMMM, ddd D. h:mm A')
    $("#currentDay").text(now)

    $(".saveBtn").on("click", function(){
        var currentHour = $(this).parent().attr("id")
        var textValue = $(this).siblings(".description").val()

        localStorage.setItem(currentHour, textValue)
    

    })

    // will be repeating for ea time block div 

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





function styleUpdate(){
    var daytime = dayjs().hour()




$(".time-block").each(function(){
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

styleUpdate()



})

