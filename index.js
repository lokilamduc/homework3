//bài 1
document.getElementById("sapxep").onclick = function () {
  let number1 = +document.getElementById("number1").value;
  let number2 = +document.getElementById("number2").value;
  let number3 = +document.getElementById("number3").value;
  if (number1 >= number2) {
    let tmp1 = number1;
    number1 = number2;
    number2 = tmp1;
  }
  if (number2 >= number3) {
    let tmp2 = number2;
    number2 = number3;
    number3 = tmp2;
  }
  document.getElementById("result1-wrapper").style.display = "block";
  document.getElementById("result1").innerHTML =
    number1 + " " + number2 + " " + number3;
};

//bài 2
function ex1() {
  // let bo = document.getElementById("bo").value;
  // let me = document.getElementById("me").value;
  // let anh = document.getElementById("anh").value;
  // let em = document.getElementById("em").value;
  let familyName = document.getElementById("familyName").value;
  let sayHello;
  switch (familyName) {
    case "B":
      sayHello = "bố có khỏe không";
      break;
    case "M":
      sayHello = "Mẹ có khỏe không";
      break;
    case "A":
      sayHello = "dạo này anh sao rồi";
      break;
    case "E":
      sayHello = "em ăn học có tốt không";
      break;
    default:
      sayHello = "không hợp lệ!";
      break;
  }
  document.getElementById("result2-wrapper").style.display = "block";
  document.getElementById("result2").innerHTML = "câu chào hỏi: " + sayHello;
}

//bài 3
document.getElementById("ketqua").onclick = function () {
  let number_1 = +document.getElementById("number_1").value;
  let number_2 = +document.getElementById("number_2").value;
  let number_3 = +document.getElementById("number_3").value;
  let countOdd = 0;
  let countEven = 0;
  if (number_1 % 2 == 0) {
    countEven++;
  } else {
    countOdd++;
  }
  if (number_2 % 2 == 0) {
    countEven++;
  } else {
    countOdd++;
  }
  if (number_3 % 2 == 0) {
    countEven++;
  } else {
    countOdd++;
  }
  document.getElementById("result3-wrapper").style.display = "block";
  document.getElementById("result3").innerHTML =
    "Có " + countEven + " số chẵn và " + countOdd + " số lẻ";
};

//bài 4

document.getElementById("dudoan").onclick = function () {
  let canh1 = +document.getElementById("canh1").value;
  let canh2 = +document.getElementById("canh2").value;
  let canh3 = +document.getElementById("canh3").value;
  let result4 = 0;

  if (canh1 === canh2 && canh2 === canh3) {
    result4 = "tam giác đều";
  } else {
    if (
      canh1 ^ (2 == canh2) ^ (2 + canh3) ^ 2 ||
      canh2 ^ (2 == canh1) ^ (2 + canh3) ^ 2 ||
      canh3 ^ (2 == canh1) ^ (2 + canh2) ^ 2
    ) {
      result4 = "tam giác vuông";
    }
    if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
      result4 = "tam giác cân";
    } else {
      result4 = "tam giác thường";
    }
  }
  document.getElementById("result4-wrapper").style.display = "block";
  document.getElementById("result4").innerHTML = "dự đoán: " + result4;
};

// //bài 5

document.getElementById("daybefore").onclick = function () {
  let yesterdayDate = today.valueAsDate;
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  let day = yesterdayDate.getDate();
  let month = yesterdayDate.getMonth() + 1;
  let year = yesterdayDate.getFullYear();
  daybefore = month + "/" + day + "/" + year;
  document.getElementById("result5-wrapper").style.display = "block";
  document.getElementById("result5").innerHTML = daybefore;
};

document.getElementById("dayafter").onclick = function () {
  let tomorrowDate = today.valueAsDate;
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  let day = tomorrowDate.getDate();
  let month = tomorrowDate.getMonth() + 1;
  let year = tomorrowDate.getFullYear();
  dayafter = month + "/" + day + "/" + year;
  document.getElementById("result5-wrapper").style.display = "block";
  document.getElementById("result5").innerHTML = dayafter;
};

//bài 6
document.getElementById("tinhngay").onclick = function () {
  let ngay = 0;
  let thang = +document.getElementById("thang").value;
  let nam = +document.getElementById("nam").value;
  if (thang > 12 && thang < 1) {
    alert("Tháng phải lớn hơn 0 và nhỏ hơn 13");
  } else if (nam < 1900) {
    alert("năm phải lớn hơn 1900");
  }
  if (nam % 4 == 0) {
    switch (thang) {
      case 1:
        ngay = 31;
        break;
      case 2:
        ngay = 29;
        break;
      case 3:
        ngay = 31;
        break;
      case 4:
        ngay = 30;
        break;
      case 5:
        ngay = 31;
        break;
      case 6:
        ngay = 30;
        break;
      case 7:
        ngay = 31;
        break;
      case 8:
        ngay = 31;
        break;
      case 9:
        ngay = 30;
        break;
      case 10:
        ngay = 31;
        break;
      case 11:
        ngay = 30;
        break;
      case 12:
        ngay = 31;
        break;
    }
  } else {
    switch (thang) {
      case 1:
        ngay = 31;
        break;
      case 2:
        ngay = 28;
        break;
      case 3:
        ngay = 31;
        break;
      case 4:
        ngay = 30;
        break;
      case 5:
        ngay = 31;
        break;
      case 6:
        ngay = 30;
        break;
      case 7:
        ngay = 31;
        break;
      case 8:
        ngay = 31;
        break;
      case 9:
        ngay = 30;
        break;
      case 10:
        ngay = 31;
        break;
      case 11:
        ngay = 30;
        break;
      case 12:
        ngay = 31;
        break;
    }
  }
  document.getElementById("result6-wrapper").style.display = "block";
  document.getElementById("result6").innerHTML = "Có " + ngay + " ngày";
};

//bài 7
document.getElementById("docso").onclick = function () {
  let numberEl = +document.getElementById("numberEl").value;
  if (numberEl < 100 || numberEl > 999) {
    alert("Dữ liệu không hợp lệ");
  }
  let a1 = numberEl % 10;
  let text1 = "1";
  switch (a1) {
    case 1:
      text1 = "một";
      break;
    case 2:
      text1 = "hai";
      break;
    case 3:
      text1 = "ba";
      break;
    case 4:
      text1 = "bốn";
      break;
    case 5:
      text1 = "năm";
      break;
    case 6:
      text1 = "sáu";
      break;
    case 7:
      text1 = "bảy";
      break;
    case 8:
      text1 = "tám";
      break;
    case 9:
      text1 = "chín";
      break;
  }
  numberEl = numberEl / 10;
  numberEl = Math.floor(numberEl);
  let a2 = numberEl % 10;
  let text2 = "1";
  switch (a2) {
    case 1:
      text2 = "một";
      break;
    case 2:
      text2 = "hai";
      break;
    case 3:
      text2 = "ba";
      break;
    case 4:
      text2 = "bốn";
      break;
    case 5:
      text2 = "năm";
      break;
    case 6:
      text2 = "sáu";
      break;
    case 7:
      text2 = "bảy";
      break;
    case 8:
      text2 = "tám";
      break;
    case 9:
      text2 = "chín";
      break;
  }
  numberEl = numberEl / 10;
  numberEl = Math.floor(numberEl, 0);
  let a3 = numberEl;
  let text3 = "";
  switch (a3) {
    case 1:
      text3 = "một";
      break;
    case 2:
      text3 = "hai";
      break;
    case 3:
      text3 = "ba";
      break;
    case 4:
      text3 = "bốn";
      break;
    case 5:
      text3 = "năm";
      break;
    case 6:
      text3 = "sáu";
      break;
    case 7:
      text3 = "bảy";
      break;
    case 8:
      text3 = "tám";
      break;
    case 9:
      text3 = "chín";
      break;
  }
  if (a1 == 0 && a2 == 0) {
    document.getElementById("result7-wrapper").style.display = "block";
    document.getElementById("result7").innerHTML = text3 + " trăm ";
  } else if (a1 == 0 && a2 != 0) {
    document.getElementById("result7-wrapper").style.display = "block";
    document.getElementById("result7").innerHTML =
      text3 + " trăm " + text2 + " mươi ";
  } else if (a1 != 0 && a2 == 0) {
    document.getElementById("result7-wrapper").style.display = "block";
    document.getElementById("result7").innerHTML = text3 + " trăm  lẻ " + text1;
  } else {
    document.getElementById("result7-wrapper").style.display = "block";
    document.getElementById("result7").innerHTML =
      "đọc thành chữ là: " + text3 + " trăm " + text2 + " mươi " + text1;
  }
};

//bài 8
document.getElementById("tim").onclick = function () {
  let x1 = +document.getElementById("x1").value;
  let y1 = +document.getElementById("y1").value;
  let x2 = +document.getElementById("x2").value;
  let y2 = +document.getElementById("y2").value;
  let x3 = +document.getElementById("x3").value;
  let y3 = +document.getElementById("y3").value;
  let x4 = +document.getElementById("x4").value;
  let y4 = +document.getElementById("y4").value;
  console.log(y4);
  let d1 = (x1 - x4) * (x1 - x4) + (y1 - y4) * (y1 - y4);
  d1 = Math.sqrt(d1, 2);
  console.log(d1);
  let d2 = (x2 - x4) * (x2 - x4) + (y2 - y4) * (y2 - y4);
  d2 = Math.sqrt(d2, 2);
  let d3 = (x3 - x4) * (x3 - x4) + (y3 - y4) * (y3 - y4);
  d3 = Math.sqrt(d3, 2);
  if (d1 > d2 && d1 > d3) {
    let ten1 = document.getElementById("ten1").value;
    document.getElementById("result8-wrapper").style.display = "block";
    document.getElementById("result8").innerHTML =
      " sinh viên xa trường nhất: " + ten1;
  }
  if (d2 > d1 && d2 > d3) {
    let ten2 = document.getElementById("ten2").value;
    document.getElementById("result8-wrapper").style.display = "block";
    document.getElementById("result8").innerHTML =
      " sinh viên xa trường nhất: " + ten2;
  }
  if (d3 > d1 && d3 > d2) {
    let ten3 = document.getElementById("ten3").value;
    document.getElementById("result8-wrapper").style.display = "block";
    document.getElementById("result8").innerHTML =
      " sinh viên xa trường nhất: " + ten3;
  }
};
