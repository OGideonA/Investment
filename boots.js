const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Market Successfully Added", "success");
  });
}
const logout = () => {
  window.location.href = "login.html";
};
var currentDate = new Date();

var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
var currentDay = currentDate.getDate();
present=currentYear + "-0" + currentMonth + "-" + currentDay


const Name = document.getElementById("Name");
const Spend = document.getElementById("Spend");
const Company = document.getElementById("Company");
const Business = document.getElementById("Business");
const License = document.getElementById("License");
const Users = document.getElementById("Users");
const Active = document.getElementById("Active");
const Renewal = document.getElementById("Renewal");
const Submit = document.getElementById("submit");
const table = document.getElementById("table");
const final = document.querySelectorAll(".final");
const PROFIT = document.querySelectorAll(".PROFIT");
const LOSS = document.querySelectorAll(".LOSS");
const BALANCE = document.querySelectorAll(".BALANCE");
const price = document.querySelectorAll(".price");
const progress = document.getElementById("progress");
const date = document.getElementById("date");
const finals = document.getElementById("finals");
const profits = document.getElementById("profits");
const lose = document.getElementById("lose");
const bal = document.getElementById("bal");
Total = [];

date.innerHTML = `<input type="Date" max="${present}" required class="form-control" id="Renewal">
<label for="Renewal"  >Renewal Date</label>`;
price.forEach((prices) => {
  Total.push(prices.innerText.split(",").join(""));
});

const add = () => {
  number = 0;
  Total.forEach((element) => {
    number += Number(element);
  });
  prof = (number - Math.floor(Math.random() * 10000000))
  los = (number - Math.floor(Math.random() * 10000000));
  bale = (number - Math.floor(Math.random() * 10000000));
  final.forEach((digit) => (digit.innerText = number.toLocaleString("en-US")));
  PROFIT.forEach((digit) => (digit.innerText = prof.toLocaleString("en-US")));
  LOSS.forEach((digit) => (digit.innerText = los.toLocaleString("en-US")));
  BALANCE.forEach((digit) => (digit.innerText = bale.toLocaleString("en-US")));
  finals.innerText=(number+Math.floor(Math.random() * 5000000)).toLocaleString("en-US")
  profits.innerText=(prof+Math.floor(Math.random() * 5000000)).toLocaleString("en-US")
  lose.innerText=(los+Math.floor(Math.random() * 5000000)).toLocaleString("en-US")
  bal.innerText=(bale+Math.floor(Math.random() * 5000000)).toLocaleString("en-US")
};
add();
Submit.onclick = () => {
  console.log("clicked");
  spending = Number(Spend.value).toLocaleString("en-US");
  table.innerHTML += `
  <tr>
              <td scope="row">${Name.value}</td>
              <td class="bg-secondary">$${spending}</td>
              <td>${Company.value}</td>
              <td>${Business.value}</td>
              <td>${License.value}</td>
              <td>${Users.value}</td>
              <td>${Active.value}</td>
              <td>${Renewal.value}</td>
            </tr>
  `;
  appendAlert("Market Successfully Added", "success");
  Total.push(Spend.value);
  add();
};
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

document.getElementById("year").innerText = new Date().getFullYear();
