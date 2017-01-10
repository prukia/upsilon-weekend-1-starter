var totalMonthlySalary = 0;

$(function () {
  console.log('document is ready');


  $('#employeeData').on('click', '.delete', function () {
    $(this).parent().parent().remove();
  });

//delete button has to be outside of submit button
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

  $('#employeesData').on('click', '.delete', function () {
    $(this).parent().parent().remove();
  });


  var $emp = $('<tr>');// create a div jQuery object
  $emp.append('<td>' + emp.employeeFirstName + '</td>'); // add our employee data
  $emp.append('<td>' + emp.employeeLastName + '</td>');
  $emp.append('<td>' + emp.employeeIdNumber + '</td>');
  $emp.append('<td>' + emp.employeeJobTitle + '</td>');
  $emp.append('<td>' + '$' + emp.employeeAnnualSalary + '</td>');
  $emp.append('<td><button class="delete">Delete this employee</button></td>')
  $emp.append('</tr>');


  $('#new').append($emp); // append our div to the DOM

  // var $emp1 = $('<div class="monthlySalary"></div>');

  totalMonthlySalary = Number(totalMonthlySalary);
  totalMonthlySalary += (emp.employeeAnnualSalary/12);

  //better to us toLocaleString("en-US", {style: 'currency', currency: 'USD'}
  //then parseFloat then you wouldn't need to do line 51
  totalMonthlySalary = parseFloat(totalMonthlySalary).toFixed(2);

  // $emp1.append('<p>' + '$' + monthlySalary + '</p>');
  //instead of appending .text
  $('#monthlySalary').text('Monthly Salary Expenditures: $' + totalMonthlySalary);


  // $('#monthlySalary').text(totalMonthlySalary.toLocaleString("en-US", {style: 'currency', currency: 'USD'}));
  //to get two decimals places only

  console.log(totalMonthlySalary);
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}





//stretch goals work on making this function work.
