const terminal = document.getElementById('terminal');
const inputContainer = document.getElementById('input-line');
let inputField = document.getElementById('input-field');

inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const input = inputField.value.trim();  // Trim to remove extra spaces
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
            output.innerHTML = `<span>Available commands:</span><br>- help<br>- about<br>- clear<br>- github`;
            break;
        case 'about':
            output.innerHTML = `<span>Hello! How can I assist you?</span>`;
            break;
        case 'clear':
            terminal.innerHTML = ''; // Clear terminal
            terminal.appendChild(inputContainer); // Re-attach input container
            inputField.focus(); // Refocus on input field
            return; // Exit the function early since no further action is needed
        case 'github':
            output.innerHTML = `<span>Redirecting to GitHub...</span>`;
            window.open('https://github.com/bri-mal', '_blank');
            break;
        default:
            output.innerHTML = `<span>Unknown command: ${input} - type 'help' for available commands.</span>`;
    }

    terminal.insertBefore(output, inputContainer); // Insert output before the input container
}
