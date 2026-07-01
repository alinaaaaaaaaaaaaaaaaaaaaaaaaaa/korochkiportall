let zayavki = JSON.parse(localStorage.getItem("zayavki")) || [];

if (document.getElementById("loginForm")) {
document.getElementById("loginForm").addEventListener("submit", function(e) {
e.preventDefault();

let login = document.getElementById("login").value;
let password = document.getElementById("password").value;

if (login === "user123" && password === "123456") {
window.location.href = "zayavki.html";
} else if (login === "Admin" && password === "KorokNET") {
window.location.href = "admin.html";
} else {
alert("Ошибка входа");
}
});
}

if (document.getElementById("zayavkaForm")) {
document.getElementById("zayavkaForm").addEventListener("submit", function(e) {
e.preventDefault();

let course = document.getElementById("course").value;
let date = document.getElementById("date").value;
let payment = document.getElementById("payment").value;

zayavki.push({
course: course,
date: date,
payment: payment,
status: "Новая"
});

localStorage.setItem("zayavki", JSON.stringify(zayavki));

window.location.href = "zayavki.html";
});
}

if (document.getElementById("list")) {
let list = document.getElementById("list");

zayavki.forEach(z => {
let li = document.createElement("li");
li.textContent = z.course + " | " + z.date + " | " + z.payment + " | " + z.status;
list.appendChild(li);
});
}

if (document.getElementById("adminTable")) {
let table = document.getElementById("adminTable");

zayavki.forEach((z, i) => {
let tr = document.createElement("tr");

let td1 = document.createElement("td");
td1.textContent = z.course + " | " + z.date + " | " + z.payment;

let td2 = document.createElement("td");
td2.textContent = z.status;

let td3 = document.createElement("td");

let ok = document.createElement("button");
ok.textContent = "Подтвердить";
ok.onclick = () => {
z.status = "Идет обучение";
localStorage.setItem("zayavki", JSON.stringify(zayavki));
location.reload();
};

let no = document.createElement("button");
no.textContent = "Отклонить";
no.onclick = () => {
z.status = "Отклонена";
localStorage.setItem("zayavki", JSON.stringify(zayavki));
location.reload();
};

td3.appendChild(ok);
td3.appendChild(no);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

table.appendChild(tr);
});
}