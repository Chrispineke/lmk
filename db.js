const DB = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    posts: [],
    products: [],
    messages: []
};

function saveDB() {
    localStorage.setItem("users", JSON.stringify(DB.users));
}
