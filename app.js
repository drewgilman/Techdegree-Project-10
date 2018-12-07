// const employeeGrid = document.querySelectorAll('.employeeGrid');

$.getJSON(
  'https://randomuser.me/api/?nat=us&results=12',
  {dataType: 'json'},
  function (data){
    let employeeList = "<ul>";
    $.each(data.results, function(index, employee){
      employeeList += `<li class="employee"><img src="${employee.picture.medium}" class="employee-photo">
        <h2>${employee.name.first} ${employee.name.last}</h2>
        <p>${employee.email}</p>
        <p>${employee.location.city}</p></li>`;
    });
    employeeList += '</ul>';
    $('.employeeGrid').html(employeeList);

    const modal = document.getElementById('myModal');
    const x = document.getElementsByClassName("close")[0];
    const li = document.querySelectorAll('.employee');
    $.each(li, function(i){
      li[i].addEventListener('click', (e)=>{
        modal.style.display = "block";
      });

    });
    x.onclick = function() {
      modal.style.display = "none";
    }
  }
);


// make blank modal
// populate modal with content
