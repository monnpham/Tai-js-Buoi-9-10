function Nhanvien() {
    this.taikhoan = ""
    this.ten = ""
    this.email = ""
    this.matkhau = ""
    this.ngaylam = ""
    this.luongcoban = 0
    this.chucvu = ""
    this.giolam = 0
    this.tongluong = function () {
        var output
        if (this.chucvu === "Sếp")
            output = this.luongcoban * 3
        if (this.chucvu === "Trưởng phòng")
            output = this.luongcoban * 2
        if (this.chucvu === "Nhân viên")
            output = this.luongcoban
        return output
    }
    this.loainv = function () {
        var output
        if (this.giolam >= 192) {
            output = "Xuất Sắc"
        } else if (this.giolam >= 176) {
            output = "Giỏi"
        } else if (this.giolam >= 160) {
            output = "Khá"
        } else output = "Trung Bình"
        return output
    }
    this.hideshow = true
}

