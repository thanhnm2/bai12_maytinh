let Vat_ly = +prompt('moi ban nhap diem mon ly: ');
let Hoa_hoc = +prompt('Moi ban nhap diem hoa hoc: ');
let Sinh_hoc = +prompt('Moi ban nhap diem sinh hoc:');
let trung_binh = (Vat_ly + Hoa_hoc + Sinh_hoc)/3;
let tong = trung_binh*3;
document.write(trung_binh + '</br>');
document.write(tong);
