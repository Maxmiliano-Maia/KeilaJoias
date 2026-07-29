// ========================================
// CADASTRO
// ========================================

const registerForm = document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("register-name").value.trim();
        const email = document.getElementById("register-email").value.trim();
        const password = document.getElementById("register-password").value;

        let users = fakeFirebase.getUsers();

        const exists = users.find(u => u.email === email);

        if (exists) {
            alert("Este e-mail já está cadastrado.");
            return;
        }

        const user = {
            id: Date.now(),
            name: name,
            email: email,
            password: password,
            premium: false
        };

        users.push(user);

        fakeFirebase.saveUsers(users);

        alert("Conta criada com sucesso!");

        window.location.href = "login.html";

    });

}

// ========================================
// LOGIN
// ========================================

const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;

        const message = document.getElementById("login-message");

        const users = fakeFirebase.getUsers();

        const user = users.find(u =>
            u.email === email &&
            u.password === password
        );

        if (!user) {
            if (message) {
                message.style.color = "red";
                message.textContent = "E-mail ou senha inválidos.";
            } else {
                alert("E-mail ou senha inválidos.");
            }
            return;
        }

        fakeFirebase.setCurrentUser(user);

        if (message) {
            message.style.color = "green";
            message.textContent = "Login realizado!";
        }

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 300);

    });

}


// ========================================
// DASHBOARD
// ========================================

if (window.location.pathname.includes("dashboard.html")) {

    const user = fakeFirebase.getCurrentUser();

    if (!user) {

        window.location.href = "login.html";

    }

}



// ========================================
// LOGOUT
// ========================================

const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {

    logoutBtn.onclick = function () {

        fakeFirebase.logout();

        window.location.href = "index.html";

    };

}