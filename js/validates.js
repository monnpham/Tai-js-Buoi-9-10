function validateAccount(account) {
    // Check if the account is empty
    if (account === "") {
        alert("Vui lòng nhập tài khoản.");
        return false;
    }

    // Check if the account length is between 4 and 6 characters
    if (account.length < 4 || account.length > 6) {
        alert("Tài khoản phải có độ dài từ 4 đến 6 ký Số.");
        return false;
    }

    // Check if the account contains only digits
    if (!/^[0-9]+$/.test(account)) {
        alert("Tài khoản chỉ được chứa các chữ số.");
        return false;
    }
    return true;
}

function validateEmployeeName(name) {
    // Check if the name is empty
    if (name === "") {
        alert("Vui lòng nhập tên nhân viên.");
        return false;
    }

    // Check if the name contains only letters
    if (!/^[a-zA-Z]+$/.test(name)) {
        alert("Tên nhân viên chỉ được chứa các chữ cái.");
        return false;
    }

    return true;
}


function validateEmail(email) {
    // Check if the email is empty
    if (email === "") {
        alert("Vui lòng nhập email.");
        return false;
    }

    // Check if the email format is correct
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
        alert("Email không đúng định dạng.");
        return false;
    }

    return true;
}
function validatePassword(password) {
    // Check if the password is empty
    if (password === "") {
        alert("Vui lòng nhập mật khẩu.");
        return false;
    }

    // Check if the password length is between 6 and 10 characters
    if (password.length < 6 || password.length > 10) {
        alert("Mật khẩu phải có độ dài từ 6 đến 10 ký tự.");
        return false;
    }

    // Check if the password contains at least 1 number, 1 uppercase letter, and 1 special character
    const regex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,10}$/;
    if (!regex.test(password)) {
        alert("Mật khẩu phải chứa ít nhất 1 số, 1 ký tự in hoa và 1 ký tự đặc biệt.");
        return false;
    }
    return true;
}
function validateGL(gl) {
    // Check if the salary is empty
    if (gl === "") {
        alert("Vui lòng nhập giờ làm.");
        return false;
    }
    if (Number(gl) < 80) {
        alert("Vui lòng nhập làm trong tháng 80 - 200 giờ.");
        return false;
    }
    return true
}

function validateNL(nl) {
    // Check if the chức vụ is empty
    if (nl === "") {
        alert("!Ngày làm vui lòng không để trống.");
        return false;
    }
    return true
}

function validateCV(cv) {
    // Check if the chức vụ is empty
    if (cv === "Chọn chức vụ") {
        alert("Vui lòng chọn chức vụ.");
        return false;
    }
    return true
}
function validateSalary(salary) {
    // Check if the salary is empty
    if (salary === "") {
        alert("Vui lòng nhập lương.");
        return false;
    }
    if (salary < 1000000 || salary > 20000000) {
        alert("Vui lòng nhập lương trong khoảng 1 000 000 - 20 000 000.");
        return false;
    }
    return true
}

// check account exit
function validateAccountExit(acc, arrSt) {
    var nv = new Nhanvien()
    for (var i = 0; i < arrSt.length; i++) {
        nv = arrSt[i]
        if (nv.taikhoan === acc && nv.taikhoan != "") {
            alert("Tài khoản đã tồn tại.")
            return false
        }
    }
    return true
}

