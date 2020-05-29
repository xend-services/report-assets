
   
//    window.addEventListener("load", function() {
  
    
//     let filterBtn = $("#applyfilterbtn");
//     let filterModal = $("#exampleModalLong");
//     let modalBackdrop = $(".modal-backdrop");
//     let dateTimePicker = $("#dateTimePicker");
//     let activeFilterCarousel = $(".carouselSpan");
//     //FILTER BUTTON
//     filterBtn.on("click",   function () {
//         filterModal.hide();
//         modalBackdrop.remove();
//         activeFilterCarousel.html(dateTimePicker.val());
        
//     });
    
   
//     let dateSuffixed = {"1":"1st", "2":"2nd", "3":"3rd", "4":"4th", "5":"5th", "6":"6th", "7":"7th", "8":"8th", "9":"9th", "10":"10th",
//                 "11":"11th", "12":"12th", "13":"13th", "14":"14th", "15":"15th","16":"16th", "17":"17th", "18":"18th", "19":"19th", "20":"20th",
//                     "21":"21st","22":"22nd","23":"23rd","24":"24th", "25":"25th", "26":"26th","27":"27th", "28":"28th", "29":"29th", "30":"30th","31":"31st"};

    
//     let date = new Date();
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let Today = days[date.getDay()];
//     let yesterday = days[days.indexOf(Today) - 1];
//     let dateToday = date.getDate();
//     let dateYesterday = dateToday - 1;
//     let thisYear = date.getFullYear();
//     let lastYear = thisYear - 1;
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let thisMonth = months[date.getMonth()];
//     let lastMonth = months[months.indexOf(thisMonth) - 1];
//     let todaysDateWithSuffix = dateSuffixed[dateToday];
//     let yesterdaysDateWithSuffix = dateSuffixed[dateYesterday];

//      //GENERIC FUNCTION TO DISPLAY DATE
//      function showDate (day, date, week, month, year) {
//         filterModal.hide();
//        return activeFilterCarousel.html(`${day} ${date} ${week} ${month} ${year}`);
//     }

//     //CURRENT WEEK FUNCTION
//     function CalculateCurrentWeek () {
//     let curr = new Date; 
//     let first = curr.getDate() - curr.getDay(); 
//     let last = first + 6;
//     let firstday = new Date(curr.setDate(first)).toUTCString().split(" ").slice(0, 4).join(" ");
//     let lastday = new Date(curr.setDate(last)).toUTCString().split(" ").slice(0, 4).join(" ");
//         return `${firstday} - ${lastday}`;
//     }

//     //LAST WEEK FUNCTION    
//     function CalculateLastWeek () {
//         let currentDate = new Date; 
//         let firstDayCurrentWeek = currentDate.getDate() - currentDate.getDay(); 
//         let lastDayLastWeek = firstDayCurrentWeek - 1;
//         let firstDayLastWeek = new Date(currentDate.setDate(lastDayLastWeek)).toUTCString().split(" ").slice(1, 2) - 6;
//         let lastWeekBegin = new Date(currentDate.setDate(firstDayLastWeek)).toUTCString().split(" ").slice(0, 4).join(" ");
//         let lastWeekEnd = new Date(currentDate.setDate(firstDayLastWeek + 6)).toUTCString().split(" ").slice(0, 4).join(" ");
//             return `${lastWeekBegin} - ${lastWeekEnd}`;
//     }


//     //DATE DISPLAY
//     let dateDisplay = $(".carouselSpan");
//     dateDisplay.html(`${Today} ${todaysDateWithSuffix} ${thisMonth}, ${thisYear}`);

//     //TODAY BUTTON
//     let todayBtn = $("#todaybtn");
//     todayBtn.on('click', function() {
//         showDate(Today, todaysDateWithSuffix, "" , thisMonth, thisYear);
//     });

//     //YESTERDAY BUTTON
//     let yesterdaybtn = $("#yesterdaybtn");
//     yesterdaybtn.on("click", function() {
//         showDate(yesterday, yesterdaysDateWithSuffix, "" , thisMonth, thisYear);
//     });

//     //THIS MONTH
//     let thisMonthBtn = $("#thisMonthBtn");
//     thisMonthBtn.on("click", function() {
//         showDate("", "", "", thisMonth, thisYear);
//     });

//     //LAST MONTH
//     let lastMonthBtn = $("#lastMonthBtn");
//     lastMonthBtn.on("click", function() {
//         showDate("", "", "", lastMonth, thisYear);
//     })

//     //THIS YEAR
//     let thisYearBtn = $("#thisYearBtn");
//     thisYearBtn.on("click", function() {
//         showDate("","","","",thisYear);
//     });

//     //LAST YEAR
//     let lastYearBtn = $("#lastYearBtn");
//     lastYearBtn.on("click", function() {
//         showDate("","","","",lastYear);
//     });

//     let thisWeek = $("#thisweek");
//     thisWeek.on("click", function () {
//     showDate("", "", CalculateCurrentWeek(), "", "");
//     });

//     let lastWeek = $("#lastweek");
//     lastWeek.on("click", function() {
//        showDate("", "", CalculateLastWeek(), "", "");
//     });

//    });
   
   
  


