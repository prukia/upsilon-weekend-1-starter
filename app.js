$(function () {
  console.log('document is ready');

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    appendDom(formData);

    clearForm();
  });
});

function appendDom(emp) {

  var $emp = $('<tr>');// create a div jQuery object
  $emp.append('<td>' + emp.employeeFirstName + '</td>'); // add our employee data
  $emp.append('<td>' + emp.employeeLastName + '</td>');
  $emp.append('<td>' + emp.employeeIdNumber + '</td>');
  $emp.append('<td>' + emp.employeeJobTitle + '</td>');
  $emp.append('<td>' + emp.employeeAnnualSalary + '</td>');
  $emp.append('</tr>');

  $('#new').append($emp); // append our div to the DOM

  var $emp1 = $('<div class="monthlySalary"></div>');
  var monthlySalary = (emp.employeeAnnualSalary/12);
//you can put parseFloat and toFixed on line 35
  monthlySalary = parseFloat(monthlySalary).toFixed(2);

  $emp1.append('<p>' + monthlySalary + '</p>');
  $('#monthlySalary').append($emp1);

  //to get two decimals places only

  console.log(monthlySalary);
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}
