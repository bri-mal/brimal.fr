const terminal = document.getElementById('terminal');
const inputContainer = document.getElementById('input-line');
let inputField = document.getElementById('input-field');

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const input = inputField.value;
        if (input) {
            handleCommand(input);
            inputField.value = '';
            terminal.scrollTop = terminal.scrollHeight;
        }
    }
});

function handleCommand(input) {
    const output = document.createElement('div');
    output.classList.add('output');

    switch (input.toLowerCase()) {
        case 'help':
            output.innerHTML = `<span>Available commands:</span><br>- help<br>- about<br>- github<br>- clear`;
            break;
        case 'about':
            output.innerHTML = `<span>Hello! How can I assist you?</span>`;
            break;
        case 'clear':
            terminal.innerHTML = '';
            terminal.appendChild(inputContainer);
            inputField.focus();
            return;
        case 'github':
            output.innerHTML = `<span>Redirecting to GitHub...</span>`;
            window.open('https://github.com/bri-mal', '_blank');
            break;
        default:
            output.innerHTML = `<span>Unknown command : ${input} - type help ;)</span>`;
    }

    terminal.insertBefore(output, inputContainer);
}
