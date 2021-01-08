
var days = document.querySelectorAll('.event')



// console.log(days)

days.forEach(day => {
    var date = dayjs(day.dataset.date).format('MMMM, ddd D. h:mm A')
    var dateEl = day.querySelector('.date')
    dateEl.innerText = date
} )

// var calendar = require('dayjs/plugin/calendar')
// dayjs.extend(calendar)



// dayjs().calendar(dayjs('2008-01-01'))
// dayjs().calendar(null, {
//   sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
//   nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
//   nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
//   lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
//   lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
//   sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
// }) 

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

