import $ from "jquery";


function checkAndLog (data, status, xhr) {
  console.log("something fucked up")
  console.log(data)
  console.log(status)
  console.log(xhr)
};

$( document ).ready(function getForms (id){
  var results = $.ajax({
    url: "http://json-data.herokuapp.com/forms",
    dataType: 'json',
    success: addFormToPage,
    error: checkAndLog
  });
  console.log("Data is being fetched...");
});

var addFormToPage = function(data) {
console.log("Data Fetched", data)
data.forEach(function(datum){
$(".formbody").append(formTemplate(datum))
})
};


var formTemplate = function(data) {
  console.log('data', data)

return   `<div class="form"> <form id ="${data.id}"><i class="fa ${data.icon}"></i> <input type="${data.type}" class="${data.id}" placeholder="      ${data.label}"></input></form></div>`
}


// <i class="fa fa-envelope-o"></i>
// Hey, just drop an if statement in the forEach prototype to direct the
// function to the correct template literal based on ${data.type}. First
// you have to create another template though. Remember to properly define variables
// so you don't have anymore damn undefineds
