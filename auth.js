function register(e) {
    e.preventDefault();
    const user = {
        id: Date.now(),
        name: name.value,
        email: email.value,
        password: password.value,
        role: "user"
    };
    DB.users.push(user);
    saveDB();
    localStorage.setItem("session", JSON.stringify(user));
    location.href = "dashboard.html";
}

function login(e) {
    e.preventDefault();
    const user = DB.users.find(
        u => u.email === email.value && u.password === password.value
    );
    if (!user) return alert("Invalid credentials");
    localStorage.setItem("session", JSON.stringify(user));
    location.href = user.role === "admin" ? "admin.html" : "dashboard.html";
}

function logout() {
    localStorage.removeItem("session");
    location.href = "index.html";
}

function currentUser() {
    return JSON.parse(localStorage.getItem("session"));
}
