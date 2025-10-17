function addNumbers(): void {
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const resultDisplay = document.getElementById('result') as HTMLElement;

    const n1 = parseFloat(num1Input.value);
    const n2 = parseFloat(num2Input.value);

    if (isNaN(n1) || isNaN(n2)) {
        resultDisplay.textContent = "Please enter valid numbers!";
        return;
    }

    const sum: number = n1 + n2;
    resultDisplay.textContent = `Result: ${sum}`;
}

// Add event listener safely after DOM loads
const addButton = document.getElementById('addBtn') as HTMLButtonElement;
addButton.addEventListener('click', addNumbers);
