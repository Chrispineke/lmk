const user = JSON.parse(localStorage.getItem("session"));

if (!user) location.href = "login.html";

if (location.pathname.includes("admin") && user.role !== "admin") {
    alert("Admins only");
    location.href = "dashboard.html";
}
