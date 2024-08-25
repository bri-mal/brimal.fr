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
        case 'date':
            const now = new Date();
            output.innerHTML = `<span>${now.toString()}</span>`;
            break;
        case 'echo':
            const echoText = input.slice(5); // Capture the text after 'echo '
            output.innerHTML = `<span>${echoText}</span>`;
            break;
        case 'theme':
            document.body.classList.toggle('dark-theme');
            output.innerHTML = `<span>Theme toggled.</span>`;
            break;
        case 'version':
            output.innerHTML = `<span>Current version: 1.0.0</span>`;
            break;                             
        default:
            output.innerHTML = `<span>Unknown command: ${input} - type 'help' for available commands.</span>`;
    }

    terminal.insertBefore(output, inputContainer); // Insert output before the input container
}
