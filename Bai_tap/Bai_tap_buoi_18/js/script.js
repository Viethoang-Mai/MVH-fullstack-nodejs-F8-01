var content = document.getElementById("para");
var text = content.textContent;
var i = 0;
var a = text.split(" ");
var a2 = text.split(" ");
setInterval(function () {
    if (i === a.length) {
        i = 0;
    }
    if (i !== 0) {
        a[i - 1] = a2[i - 1];
    }
    a[i] = `<span style="color: red">${a[i]}</span> `;
    content.innerHTML = a.join(" ");
    i++;
}, 500);
