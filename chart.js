function send() {
    DB.messages.push(msg.value);
    render();
}

function render() {
    messages.innerHTML = DB.messages.map(
        m => `<p>${m}</p>`
    ).join("");
}
