function dangnhap() {
    let username = "quoctrieu";
    let password = "zzz123";
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    if (user.value === username && pass.value === password) {
        window.location.href = "1.html";
        localStorage.setItem("user", "admin");
    } else {
        document.getElementById("text").innerHTML ="Mật khẩu hoặc tài khoản sai!.Yêu cầu nhập đúng tài khoản và mật khẩu"
    }
}