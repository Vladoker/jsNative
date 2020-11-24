$(document).ready(function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false);

  xhr.send();
  if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
  } 
  else {
    let users = JSON.parse(xhr.responseText);
    
    for (let user of users) {
      $('<div class = "col-md-4 nameBlock">' + user.name + '</div>')
        .prependTo($('#usersItems')).click(function () {
         $("#btnSend")[0].disabled = false;
          $("#tableName").text(user.name);
          $("#tableSurName").text(user.username);
          $("#tableAddress").text(user.address.suite);
          $("#tableMail").text(user.email);
          $("#tablePhone").text(user.phone);
          $("#tableWebsite").text(user.website);
          $("#tableId").text(user.id);
        });

    }
  
  }

  $("#btnSend").on("click", function(){
   

   xhr.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" + $("#tableId").text(), false);
   xhr.send();
   if (xhr.status != 200) {
    // обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } 
    else {
      let result = JSON.parse(xhr.responseText);

      $("#descUser").css("display", "flex");
      $("#UserTitle").text(result[0].title);
      $("#usrDesc").text(result[0].body);
    }

  });
});


