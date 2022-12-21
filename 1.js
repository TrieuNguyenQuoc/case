function dangnhap() {
    let username = "trieu";
    let password = "zzz123";
    let user = document.getElementById("userName");
    let pass = document.getElementById("passWord");
    if (user.value === username && pass.value === password) {
        window.location.href = "1.html";
        localStorage.setItem("user", "admin");
    } else {
        document.getElementById("text").innerHTML = "ERROR"
    }
}
function repage() {
    window.localStorage.removeItem("user")
    window.location.href = "2.html"
}

function oderFB() {
    window.location.href = "https://www.facebook.com/Tam.by.trang/";
}