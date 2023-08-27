 function addBy() {
            const num1 = parseFloat(document.getElementById("firstNumber").value);
            const num2 = parseFloat(document.getElementById("secondNumber").value);
            if (!isNaN(num1) && !isNaN(num2)) {
                document.getElementById("result").innerHTML = num1 + num2;
            } else {
                document.getElementById("result").innerHTML = "Invalid input";
            }
        }

        function subtractBy() {
            const num1 = parseFloat(document.getElementById("firstNumber").value);
            const num2 = parseFloat(document.getElementById("secondNumber").value);
            if (!isNaN(num1) && !isNaN(num2)) {
                document.getElementById("result").innerHTML = num1 - num2;
            } else {
                document.getElementById("result").innerHTML = "Invalid input";
            }
        }

        function multiplyBy() {
            const num1 = parseFloat(document.getElementById("firstNumber").value);
            const num2 = parseFloat(document.getElementById("secondNumber").value);
            if (!isNaN(num1) && !isNaN(num2)) {
                document.getElementById("result").innerHTML = num1 * num2;
            } else {
                document.getElementById("result").innerHTML = "Invalid input";
            }
        }

        function divideBy() {
            const num1 = parseFloat(document.getElementById("firstNumber").value);
            const num2 = parseFloat(document.getElementById("secondNumber").value);
            if (!isNaN(num1) && !isNaN(num2)) {
                if (num2 !== 0) {
                    document.getElementById("result").innerHTML = num1 / num2;
                } else {
                    document.getElementById("result").innerHTML = "Cannot divide by zero";
                }
            } else {
                document.getElementById("result").innerHTML = "Invalid input";
            }
        }