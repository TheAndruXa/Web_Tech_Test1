let result;
        let check;

        const elementAmount = document.getElementById("amount");
        const elementResult = document.getElementById("result");

        function verify() {
            console.log("Размен суммы");
            let amount = parseInt(elementAmount.value);
            console.log("Сумма:", amount);

            // Проверка возможности размена
            if (amount % 2 !== 0) {
                result = "Невозможно разменять нечётную сумму";
                check = false;
            } else {
                // Размен суммы
                let count500 = Math.floor(amount / 500);
                amount %= 500;

                let count100 = Math.floor(amount / 100);
                amount %= 100;

                let count10 = Math.floor(amount / 10);
                amount %= 10;

                let count2 = Math.floor(amount / 2);
                amount %= 2;

                if (amount === 0) {
                    result = `500₽ x ${count500}, 100₽ x ${count100}, 10₽ x ${count10}, 2₽ x ${count2}`;
                    check = true;
                } else {
                    result = "Невозможно разменять сумму заданными номиналами";
                    check = false;
                }
            }

            elementResult.value = result;
        }

        function send() {
            if (check) {
                document.getElementById("CurrencyExchange").submit();
            } else {
                alert("Есть недостатки. Повторите ввод");
            }
        }

        const elementVerify = document.getElementById("verify");
        elementVerify.addEventListener('click', verify);

        const elementSend = document.getElementById("send");
        elementSend.addEventListener('click', send);