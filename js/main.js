
var arrgoc = []
document.querySelector('#btnThemNV').onclick = function () {
    var arrThongTin = [], check = false
    var TK = document.getElementById('tknv').value,
        Name = document.getElementById('name').value,
        Emain = document.getElementById('email').value,
        MK = document.getElementById('password').value,
        BD = document.getElementById('datepicker').value,
        LUONG = document.getElementById('luongCB').value,
        CV = document.getElementById('chucvu').value,
        GL = document.getElementById('gioLam').value
    while (!check) {
        if (!validateAccount(TK)) {
            check = false
            break
        }
        if (!validateEmployeeName(Name)) {
            check = false
            break
        }

        if (!validateEmail(Emain)) {
            check = false
            break
        }
        if (!validatePassword(MK)) {
            check = false
            break
        }
        if (!validateSalary(LUONG)) {
            check = false
            break
        }
        if (!validateCV(CV)) {
            check = false
            break
        }
        if (!validateGL(GL)) {
            check = false
            break
        }
        check = true
    }

    var xeploai = 0, Tongluong = 0, xeploai, chuoi = ""
    arrThongTin.push(TK)
    arrThongTin.push(Name)
    arrThongTin.push(Emain)
    arrThongTin.push(BD)
    arrThongTin.push(CV)
    if (CV === "Sếp")
        Tongluong = LUONG * 3
    if (CV === "Trưởng phòng")
        Tongluong = LUONG * 2
    if (CV === "Nhân viên")
        Tongluong = LUONG
    arrThongTin.push(Tongluong)
    if (GL >= 192) {
        xeploai = "nhân viên xuất sắc"
    } else if (GL >= 176) {
        xeploai = "nhân viên giỏi"
    } else if (GL >= 160) {
        xeploai = "nhân viên khá"
    } else xeploai = "nhân viên trung bình"
    arrThongTin.push(xeploai)
    arrThongTin.push(GL)
    arrThongTin.push(LUONG)
    arrThongTin.push(MK)

    if (check)
        arrgoc.push(arrThongTin)
    for (var i = 0; i < arrgoc.length; i++) {
        chuoi += "<tr>"
        for (var j = 0; j < arrgoc[i].length - 3; j++) {
            chuoi += ("<th>" + arrgoc[i][j] + "</th>")
            console.log("aaaaaaaaaa:    " + arrgoc[i][j])
        }
        document.querySelector("#tableDanhSach").innerHTML = chuoi
    }
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




function validateCV(cv) {
    // Check if the chức vụ is empty
    if (cv === "Chọn ") {
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
        alert("Vui lòng nhập trong khoảng 1 000 000 - 20 000 000.");
        return false;
    }
    return true
}

function validateAccount(account) {
    for (var i = 0; i < arrgoc.length; i++) {
        if (arrgoc[i][0] === account) {
            alert("tài khoản đã tồn tại.");
            return false
        }
    }
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