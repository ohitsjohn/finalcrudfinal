$(() => $("#createButton").click(createUser));

function createUser() {

  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    address: $("input[name=address]")
      .val()
      .trim(),
    position: $("input[name=position]")
      .val()
      .trim(),
  };

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}