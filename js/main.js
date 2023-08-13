
var arrStaff = []
var arr
// Kiểm tra xem key đã tồn tại trong LocalStorage hay chưa
if (localStorage.getItem("Staff") == null)
    localStorage.setItem("Staff", "");
else {
    if (localStorage.getItem("Staff") !== null)
        arr = JSON.parse(localStorage.getItem("Staff"))
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            arrStaff.push(arr[i])
        }
        document.querySelector("#tableDanhSach").innerHTML = renderTableNV(arrStaff)
    }

}


document.querySelector('#btnThem').onclick = function () {
    newtabnv()
}

document.querySelector('#btnTimNV').onclick = function () {
    var lnv = document.querySelector('#searchName').value
    var nv = []
    if (lnv === "Loại nhân viên") {
        document.querySelector("#tableDanhSach").innerHTML = renderTableNV(arrStaff)
    } else {
        for (var i = 0; i < arrStaff.length; i++) {
            if (arrStaff[i].hideshow) {
                if (arrStaff[i].loainv === lnv)
                    nv.push(arrStaff[i])
            }

        }
        document.querySelector("#tableDanhSach").innerHTML = renderTableNV(nv)
    }

}


document.querySelector('#btnThemNV').onclick = function () {
    btnThemNV.style.display = 'block';

    var st = new Nhanvien()
    var check = true
    do {
        st.taikhoan = document.querySelector('#tknv').value
        if (arrStaff.length > 0) {
            if (!validateAccountExit(st.taikhoan, arrStaff)) {
                check = false
                break
            }
        }
        if (!validateAccount(st.taikhoan)) {
            check = false
            break
        }
        st.ten = document.querySelector('#name').value
        if (!validateEmployeeName(st.ten)) {
            check = false
            break
        }
        st.email = document.querySelector('#email').value
        if (!validateEmail(st.email)) {
            check = false
            break
        }
        st.matkhau = document.querySelector('#password').value
        if (!validatePassword(st.matkhau)) {
            check = false
            break
        }
        st.ngaylam = document.querySelector('#datepicker').value
        if (!validateNL(st.ngaylam)) {
            check = false
            break
        }
        st.luongcoban = document.querySelector('#luongCB').value
        if (!validateSalary(st.luongcoban)) {
            check = false
            break
        }
        st.chucvu = document.querySelector('#chucvu').value
        if (!validateCV(st.chucvu)) {
            check = false
            break
        }
        st.giolam = document.querySelector('#gioLam').value
        if (!validateGL(st.giolam)) {
            check = false
            break
        }
        st.tongluong = st.tongluong()
        st.loainv = st.loainv()
        if (check) {
            arrStaff.push(st)
            alert("Thêm Nhân Viên Thành Công")
        }
    }
    while (!check)
    localStorage.setItem("Staff", JSON.stringify(arrStaff))
    if (arrStaff.length > 0)
        document.querySelector("#tableDanhSach").innerHTML = renderTableNV(arrStaff)

}

function removeStaff(st) {
    arrStaff[st].hideshow = false
    arrStaff[st].taikhoan = ""
    localStorage.setItem("Staff", JSON.stringify(arrStaff))
    document.querySelector("#tableDanhSach").innerHTML = renderTableNV(arrStaff)
    alert("Xóa Nhân Viên Thành Công")
}

function updateStaff(st) {
    document.getElementById("btnThem").click()
    document.querySelector('#tknv').value = arrStaff[st].taikhoan
    document.querySelector('#name').value = arrStaff[st].ten
    document.querySelector('#email').value = arrStaff[st].email
    document.querySelector('#password').value = arrStaff[st].matkhau
    document.querySelector('#datepicker').value = arrStaff[st].ngaylam
    document.querySelector('#luongCB').value = arrStaff[st].luongcoban
    document.querySelector('#chucvu').value = arrStaff[st].chucvu
    document.querySelector('#gioLam').value = arrStaff[st].giolam
    var newUpdate = new Nhanvien()
    document.querySelector('#btnCapNhat').onclick = function () {
        var check = true, savetk = arrStaff[st].taikhoan
        do {
            newUpdate.taikhoan = document.querySelector('#tknv').value
            arrStaff[st].taikhoan = ""
            if (arrStaff.length > 0) {
                if (!validateAccountExit(newUpdate.taikhoan, arrStaff)) {
                    check = false
                    arrStaff[st].taikhoan = savetk
                    break
                } else {
                    arrStaff[st].taikhoan = savetk
                }
            }

            if (!validateAccount(newUpdate.taikhoan)) {
                check = false
                break
            }
            newUpdate.ten = document.querySelector('#name').value
            if (!validateEmployeeName(newUpdate.ten)) {
                check = false
                break
            }
            newUpdate.email = document.querySelector('#email').value
            if (!validateEmail(newUpdate.email)) {
                check = false
                break
            }
            newUpdate.matkhau = document.querySelector('#password').value
            if (!validatePassword(newUpdate.matkhau)) {
                check = false
                break
            }
            newUpdate.ngaylam = document.querySelector('#datepicker').value
            if (!validateNL(newUpdate.ngaylam)) {
                check = false
                break
            }
            newUpdate.luongcoban = document.querySelector('#luongCB').value
            if (!validateSalary(newUpdate.luongcoban)) {
                check = false
                break
            }
            newUpdate.chucvu = document.querySelector('#chucvu').value
            if (!validateCV(newUpdate.chucvu)) {
                check = false
                break
            }
            newUpdate.giolam = document.querySelector('#gioLam').value
            if (!validateGL(newUpdate.giolam)) {
                check = false
                break
            }

            if (check) {
                newUpdate.tongluong = newUpdate.tongluong()
                newUpdate.loainv = newUpdate.loainv()
                arrStaff.push(newUpdate)
                alert("Cập nhật nhân Viên Thành Công")
                arrStaff[st].hideshow = false
                arrStaff[st].taikhoan = ""
                localStorage.setItem("Staff", JSON.stringify(arrStaff))
                document.querySelector("#tableDanhSach").innerHTML = renderTableNV(arrStaff)
                document.getElementById("btnDong").click()
            }
        } while (!check)

        localStorage.setItem("Staff", JSON.stringify(arrStaff))
        if (arrStaff.length > 0)
            document.querySelector("#tableDanhSach").innerHTML = renderTableNV(arrStaff)
    }
}


function renderTableNV(arrNV) {
    var output = ''
    for (var i = 0; i < arrNV.length; i++) {
        var nv = arrNV[i]
        if (Number(nv.tongluong) > 0 || nv.loainv == "") {
            if (nv.hideshow) {
                output += `
            <tr>
            <td>${nv.taikhoan}</td>
            <td>${nv.ten}</td>
            <td>${nv.email}</td>
            <td>${nv.ngaylam}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongluong}</td>
            <td>${nv.loainv}</td>
            <td>
                <button class="btn btn_btn control1 " onclick="removeStaff('${i}')">Xóa</button><button class="btn btn_btn control2" onclick="updateStaff('${i}')">Cập Nhật</button>    
            </td>
            </tr> 
        `}
        } else {
            if (nv.hideshow) {
                output += `
                <tr>
                <td>${nv.taikhoan}</td>
                <td>${nv.ten}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaylam}</td>
                <td>${nv.chucvu}</td>
                <td>${nv.tongluong()}</td>
                <td>${nv.loainv()}</td>
                <td>
                    <button class="btn btn_btn control1 " onclick="removeStaff('${i}')">Xóa</button><button class="btn btn_btn control2" onclick="updateStaff('${i}')">Cập Nhật</button>    
                </td>
                </tr> 
            `
            }
        }

    }
    return output
}
function newtabnv() {
    document.querySelector('#tknv').value = null
    document.querySelector('#name').value = null
    document.querySelector('#email').value = null
    document.querySelector('#password').value = null
    document.querySelector('#datepicker').value = null
    document.querySelector('#luongCB').value = null
    document.querySelector('#chucvu').value = "Chọn chức vụ"
    document.querySelector('#gioLam').value = null
}