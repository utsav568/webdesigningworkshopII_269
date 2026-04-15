
    function calculate() {
      let a = parseFloat(document.getElementById("num1").value);
      let b = parseFloat(document.getElementById("num2").value);
      
      document.getElementById("sum").innerHTML = "Sum: " + (a + b);
      document.getElementById("difference").innerHTML = "Difference: " + (a - b);
      document.getElementById("product").innerHTML = "Product: " + (a * b);
    }
