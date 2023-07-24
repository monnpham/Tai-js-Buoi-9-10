var Nhanvien = {
    taikhoan: "",
    ten: "",
    email: "",
    matkhau: "",
    ngaylam: "",
    luongcoban: 0,
    chucvu: "",
    giolam: 0,
    tongluong: 0,
    loainv: "",
}
var consoleNV = ""

document.querySelector('#btnThemNV').onclick = function () {
    var check = false
    while (!check) {
        var tk = document.getElementById('tknv').value

        if (Nhanvien.taikhoan === tk) {
            alert("tài khoản đã tồn tại.");
            return false;
        } Nhanvien.taikhoan = tk
        if (!validateAccount(Nhanvien.taikhoan)) {
            check = false
            break
        }

        Nhanvien.ten = document.querySelector('#name').value
        if (!validateEmployeeName(Nhanvien.ten)) {
            check = false
            break
        }
        Nhanvien.email = document.querySelector('#email').value
        if (!validateEmail(Nhanvien.email)) {
            check = false
            break
        }
        Nhanvien.matkhau = document.querySelector('#password').value
        if (!validatePassword(Nhanvien.matkhau)) {
            check = false
            break
        }
        Nhanvien.ngaylam = document.querySelector('#datepicker').value
        if (!validateNL(Nhanvien.ngaylam)) {
            check = false
            break
        }
        Nhanvien.luongcoban = document.querySelector('#luongCB').value
        if (!validateSalary(Nhanvien.luongcoban)) {
            check = false
            break
        }
        Nhanvien.chucvu = document.querySelector('#chucvu').value
        if (!validateCV(Nhanvien.chucvu)) {
            check = false
            break
        }
        Nhanvien.giolam = document.querySelector('#gioLam').value
        if (!validateGL(Nhanvien.giolam)) {
            check = false
            break
        }
        check = true
        if (Nhanvien.chucvu === "Sếp")
            Nhanvien.tongluong = Nhanvien.luongcoban * 3
        if (Nhanvien.chucvu === "Trưởng phòng")
            Nhanvien.tongluong = Nhanvien.luongcoban * 2
        if (Nhanvien.chucvu === "Nhân viên")
            Nhanvien.tongluong = Nhanvien.luongcoban

        if (Nhanvien.giolam >= 192) {
            Nhanvien.loainv = "xuất sắc"
        } else if (Nhanvien.giolam >= 176) {
            Nhanvien.loainv = "giỏi"
        } else if (Nhanvien.giolam >= 160) {
            Nhanvien.loainv = "khá"
        } else Nhanvien.loainv = "trung bình"
        document.querySelector("#tableDanhSach").innerHTML = consNV(consoleNV)
        consoleNV += consNV(consoleNV)
        alert("Thêm Nhân Viên Thành Công");
    }


}

