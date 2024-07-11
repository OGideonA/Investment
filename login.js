const logout = () => {
    user = document.getElementById("Name").value;
    pass = Number(document.getElementById("passcode").value);
    if (user == "gideon" && pass == 5418) {
      location.href = "boots.html";
    } else {
      alert("Can't find matching details");
      document.getElementById("Name").value = "";
      document.getElementById("passcode").value = "";
    }
  };
  
  history.pushState(null, null, location.href);
  window.addEventListener("popstate", function () {
    history.pushState(null, null, location.href);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      logout();
    }
  });
  