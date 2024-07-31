document.addEventListener('DOMContentLoaded', (event) => {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (button.classList.contains('operator')) {
                if (buttonValue === 'AC') {
                    inputBox.value = '';
                } else if (buttonValue === 'DEL') {
                    inputBox.value = inputBox.value.slice(0, -1);
                } else if (buttonValue === '%') {
                    inputBox.value += '%';
                } else {
                    inputBox.value += ` ${buttonValue} `;
                }
            } else if (button.classList.contains('equalBtn')) {
                try {
                    inputBox.value = eval(inputBox.value.replace(/%/g, '/100'));
                } catch {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += buttonValue;
            }
        });
    });
});
