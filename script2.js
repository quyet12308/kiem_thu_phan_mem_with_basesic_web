function tinhDelta() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = 'Vui lòng nhập đầy đủ giá trị a, b, c.';
    } else if (a === 0) {
        result.innerHTML = 'Phương trình không phải là phương trình bậc 2.';
    } else {
        var delta = b * b - 4 * a * c;
    
        document.getElementById("result").innerHTML = "Delta = " + delta;
    }
    
  }
  
  function tinhNghiem() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = 'Vui lòng nhập đầy đủ giá trị a, b, c.';
    } else if (a === 0) {
        result.innerHTML = 'Phương trình không phải là phương trình bậc 2.';
    } else {
        var delta = b * b - 4 * a * c;
    
        if (delta < 0) {
        document.getElementById("result").innerHTML = "Phương trình vô nghiệm";
        } else if (delta === 0) {
        var x = -b / (2 * a);
        document.getElementById("result").innerHTML = "Phương trình có nghiệm kép x = " + x;
        } else {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").innerHTML = "Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2;
        }
    }
    
  }