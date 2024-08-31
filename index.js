//Tạo ra 1 mảng lưu trữ tên các bạn nữ trong lớp : Linh, Quyên, Lan, Hằng, Hạ
let arrSinhVienNu = ["Linh", "Quyên", "Lan", "Hằng", "Hạ", "Hà"];
// Xác định tổng số phần tử có trong mảng
let doDaiMang = arrSinhVienNu.length;
console.log(doDaiMang);
// Truy câp tới phần tử trong mảng thông qua vị trí index
let sinhVienLan = arrSinhVienNu[2];
console.log(sinhVienLan);
// Thay thế 1 phần tử trong mảng
arrSinhVienNu[1] = "Thư";
console.log(arrSinhVienNu);

// vị trí index của vị trí cuối cùng có thể tìm thấy thông qua (tổng độ dài mảng - 1)

// Một số phương thức thao tác với mảng
arrSinhVienNu.push("Huệ"); // Thêm phần tử ở cuối mảng: gọi biến.push
console.log(arrSinhVienNu);
let sinhVienHue = arrSinhVienNu.pop(); // lấy ptu cuối ra khỏi mảng, ptu đó sẽ lưu vào biến sinhVIenHue
console.log(arrSinhVienNu);
console.log(sinhVienHue);

arrSinhVienNu.unshift("Cường"); // Thêm phần tử đầu mảng
console.log(arrSinhVienNu);
arrSinhVienNu.shift(); //lấy ptu đầu ra khỏi mảng
console.log(arrSinhVienNu);

// Thao tac sử dụng vòng lặp để duyệt mảng

// Nhà hàng C thực hiện chạy phương án bán hàng, rồi các món hàng được bán bao gôm: mì sủi cảo, bún mọc, bún giò heo, xá xíu, với các món vừa kể trên có giá lần lượt là 40000, 55000, 32000, 48000. Thực hiện tính tổng giá cho tất cả món ăn

let arrTienMonAn = [40000, 55000, 32000, 48000, 100000];
let tongTienMonAn = 0;
for (let index = 0; index < arrTienMonAn.length; index++) {
  console.log(arrTienMonAn[index]);
  tongTienMonAn += arrTienMonAn[index];
}
console.log(tongTienMonAn);

// Kỹ thuật rest parameter trong function
function tinhDiemTrungBinh(...listDiem) {
  console.log(listDiem);
  let total = 0;
  for (let index = 0; index < listDiem.length; index++) {
    total += listDiem[index];
  }
  return total / listDiem.length;
}
// Khải Đỗ: 9, 10, 8
tinhDiemTrungBinh(9, 10, 8);
// Khải Trần : 7 , 8,7,9,5
tinhDiemTrungBinh(7, 8, 7, 9, 5);

// hiển thị mảng lên html
// let danhSachSinhVien = ["Nhân", "Thư", "Binh"];
// document.getElementById("ketQua1").innerHTML = danhSachSinhVien;
let danhSachSinhVien = [];
let theInput = document.getElementById("nhapTen");
let theKetQua = document.getElementById("ketQua1");
document.querySelector(".btn-dark").onclick = function () {
  let nhapTen = theInput.value;
  danhSachSinhVien.unshift(nhapTen);
  // dom tới thẻ div có id ketQua1 và hiên thị lên giao diện
  theKetQua.innerHTML = danhSachSinhVien;
};

document.querySelector(".btn-success").onclick = function () {
  let nhapTen = theInput.value;
  danhSachSinhVien.push(nhapTen);
  theKetQua.innerHTML = danhSachSinhVien;
};

/**
 * IndexOf và lastIndexOf
 */
let arrMonAn = [
  "Bún chả",
  "Mì cay",
  "Mì hoành thánh",
  "Bánh bao hồng kong",
  "Mì cay",
  "Tôm hùm sốt bơ",
];
// tìm kiếm phần tử đầu tiên thỏa điều kiện từ vị trí bắt đầu
let viTriMiCay = arrMonAn.indexOf("Mì cay", 5);
console.log(viTriMiCay);
// tìm kiếm phần tử đầu tiên thỏa điều kiện từ vị trí kết thúc
let viTriBanhBao = arrMonAn.lastIndexOf("Bánh bao hồng kong", 2);
console.log(viTriBanhBao);

// Ở cửa hảng spa thú cưng, có một số con mèo lần lượt là: Bánh bao, shopee, Quýt, Na, Cà lem. Bây giờ sẽ thực hiện công việc khách hàng muốn tìm kiếm vị trí của shopee trong mảng. Sau 1 thời gian hoạt động , cửa hàng có thêm 1 số thú cưng nữa là Bánh bao, Monney, Xá xíu. Thực hiện tìm kiếm con mèo Bánh bao cuối cung thỏa điều kiện
let arrThuCung = [
  "Bánh bao",
  "shopee",
  "Quyt",
  "Na",
  "Cà Lem",
  "Bánh bao",
  "Money",
  "Xá xíu",
];
document.querySelector(".btn-primary").onclick = function () {
  let viTriShopee = -1;
  for (let index = 0; index < arrThuCung.length; index++) {
    if (arrThuCung[index] == "Shopee") {
      console.log(index);
      viTriShopee = index;
      break;
    }
  }
  alert(`Vị trí shopee trong mảng là ${viTriShopee}`);
};
document.querySelector(".btn-warning").onclick = function () {
  let viTriBanhBao = -1;
  for (let index = arrThuCung.length - 1; index >= 0; index--) {
    console.log(index);
    if (arrThuCung[index] == "Bánh bao") {
      viTriBanhBao = index;
      break;
    }
  }
  alert(`Vị trí Bánh bao trong mảng là ${viTriBanhBao}`);
};
// reverse (đảo ngược mảng)
let mangXeHoi = ["BMW", "Toyota", "Ferrari", "Mercedes"];
let newMangXeHoi = mangXeHoi.reverse();
console.log(newMangXeHoi);

// sort (sắp xếp mảng)
let soNgauNhien = [9, 0, 15, 1, 32, 3];
let tenMonAn = ["Mì", "Bún", "Bánh cuốn", "Màn thầu", "Canh", "Xôi"];
tenMonAn.sort().reverse();
console.log(tenMonAn);
// soNgauNhien.sort(function(a,b){
//     return a - b; // sắp xếp tăng dần
//     return b -a; // sắp xếp giảm dần
// })
soNgauNhien.sort((a, b) => b - a);
console.log(soNgauNhien);

// Đảo nguoc chuỗi
// Khách hàng cung cấp 1 nội dung chuỗi bất kì, yêu cầu developer sẽ thực hiện đảo ngược chuỗi cho họ, vd "cybersoft" ==> "tfosrebyc"
// Tìm kiếm cú pháp giúp thực hiện bóc tách 1 chuỗi thành mảng để đảo ngược và tìm kiếm cú pháp giúp từ mảng trở thành chuỗi
function reverseString(string) {
  console.log(string);
  // split là phương thức giúp di chuển đổi từ 1 chuỗi thành mảng, giá trị nhận vào là phần ngăn cách đẻ tạo phần tử
  // join là cú pháp kết hợp các phần tử trong mảng thành chuỗi
  let arrString = string.split("").reverse().join("");
  console.log(arrString);
}

// ["a", "b", "c"]
//
reverseString("Cybersoft"); // ["C","y","b"]

// Phương thức slice và splice
// Khách hàng cung cấp cho lập trình viên 1 mảng có 3 phần tử xe hơi, khi hiển thị lên giao diện khách chỉ muốn hiển thị 4 ptu đầu tiên
// NHà hang cung cấp 1 mảng các món ăn trong quán sau 1 thời gian buôn bán nhà hàng loại bỏ 1 món đi yêu cầu lập trình viên tim món đó trong mảng và xóa đí

// tạo giúp 1 mảng có 10 ptu xe hoi
let arrXeHoi = [
  "BMW",
  "Toyota",
  "Mercedes",
  "Ferrari",
  "Lamborghini",
  "Audi",
  "Mazda",
  "Kia",
  "Hyundai",
  "Ford",
];
let newArrXeHoi = arrXeHoi.slice(3, 7); // lấy ds lựa chọn hiển thị
let newArrXeHoi2 = arrXeHoi.slice(1, arrXeHoi - 1);
console.log(newArrXeHoi2);

// splice thuộc tính thêm,xóa, thay thế món an
let arrMonAnMoi = [
  "Bún chả",
  "Mì cay",
  "Mì hoành thánh",
  "Bánh bao hồng kong",
  "Tôm hùm sốt bơ",
];
function xoaMonAn(tenMon) {
  // vị trí index của phần tử cần xóa
  // số lượng phần tử cần xóa
  // let index = arrMonAnMoi.indexOf(tenMon);
  // console.log(index);
  let index = -1;
  for (let i = 0; i < arrMonAnMoi.length; i++) {
    // NOTE: mảng.length
    if (arrMonAnMoi[i] == tenMon) {
      index = i;
    }
  }
  console.log(index);
  // kiểm tra index != -1 thì mới xóa
  arrMonAnMoi.splice(index, 1);
  console.log(arrMonAnMoi);
}
xoaMonAn("Mì cay");
let arrKyTu = ["a", "b", "c"];
arrKyTu.splice(2, 0, "e", "f", "r", "k"); // start, deleteCount, rest parameter
console.log(arrKyTu);

function spliceItem(start, deleteCount, ...item) {
  console.log(start);
  console.log(deleteCount);
  console.log(item);
}
spliceItem(2, 0, "e", "f", "r", "k");

// Phương thức concat giúp kết hợp nhiều mảng với nhau tạo 1 mảng lớn
let arrTraiCAy = ["Táo", "Cam", "Lê", "Dưa Hấu", "Dừa"];
let arrTraiCAy2 = ["Xoài", "Chuối", "Dừa"];
let arrTongHop = arrTraiCAy2.concat(arrTraiCAy); // Nếu mảng đầu.concat(mảng 2) thì được xếp từ 0 trở lên, ngược lại mảng 2 được gọi truoc thì dược xếp ngược lại
console.log(arrTongHop);

let arrPokemon = ["pikachu", "Charmander", "Bulbasaur", "Squirtle"];
// for (let index = 0; index < arrPokemon.length; i++) {
//   console.log(index);
//   console.log(arrPokemon[index]);
// }

// for...in : for in giúp duyêt mảng và trả về  kết quả là vị trí index của từng phần tử
for (let index in arrPokemon) {
  if (arrPokemon[index] == "Charmander") {
    console.log(index);
  }
}

// for... of: giúp duyệt mảng và trả về là kết quả phần tử trong mảng
for (let pokemon of arrPokemon) {
  console.log(pokemon);
}

// phương thức filter
let arrSoNguyenNgauNhien = [
  87, 90, 45, 67, 34, 23, 56, 78, 89, 90, 130, 140, 150, 160,
];
// Khách hàng yêu cầu thực hiện lọc và trả về các số đáp ứng điều kiện lớn hơn 90
let arrKetQua = arrSoNguyenNgauNhien.filter((item, index) => {
  // console.log(item);// hiển thị các phân tu trong mảng arrSoNgauNhien
  return item > 90; // nếu như k có sẽ trả về false
});
console.log(arrKetQua);

// Với yêu cầu khách hàng đang có ở trên, k sử dụng filter, thực hiện xử lí và lọc ra tất cả sản phẩm mà người dùng cần. Ở đây yêu cầu lọc và tìm kiếm mỗi lúc sẽ khác nhau, có lúc kiếm lơn hon, có lúc nhỏ hơn...
function filterTheoYeuCau(arr, callbackfunction) {
  let newArr = [];
  for (let index in arr) {
    // if(arr[index] > dieuKienLonHon){ // default parameter
    //   newArr.push(arr[index]);
    // }
    let kiemTraKetQua = callbackfunction(arr[index], index); // true | false
    if (kiemTraKetQua) {
      newArr.push(arr[index]);
    }
  }
  console.log(newArr);
}
// loc cho a các số nguyên < 8
function locSoNguyenBeHon80(soNguyen, index) {
  let check = soNguyen < 80;
  return check;
}
// filterTheoYeuCau(arrSoNguyenNgauNhien, locSoNguyenBeHon80);
filterTheoYeuCau(arrSoNguyenNgauNhien, (soNguyen, index) => soNguyen > 80);

// foreach va map
// map tái cấu trúc
let arrSinhVienNam = ["Khải", "Sang", "Phúc", "Bình", "Lâm", "Hoàng"];
let newArrSinhVienNam = arrSinhVienNam.map((item, index) => {
  // trả về 1 phần tử muốn thêm vào mảng mới
  return "Sinh viên " + item; // Sinh viên Khải
});
console.log(newArrSinhVienNam);

// forEach giúp duyêt mảng

// Các số điểm của trường ==> đếm xem có bao nhiêu sinh viên có điểm
let arrSoDiem = [6, 3, 9, 7, 1, 5];
let count = 0;
arrSoDiem.forEach((item, index) => {
  if (item > 6) {
    count++;
  }
});
console.log(count);

