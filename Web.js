<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
        .form-group button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .form-group button:hover {
            background-color: #218838;
        }
        .link {
            text-align: center;
            margin-top: 10px;
        }
        .link a {
            color: #007bff;
            text-decoration: none;
        }
        .link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container" id="login-form">
        <h2>Iniciar Sesión</h2>
        <div class="form-group">
            <label for="login-username">Nombre de Usuario</label>
            <input type="text" id="login-username" required>
        </div>
        <div class="form-group">
            <label for="login-password">Contraseña</label>
            <input type="password" id="login-password" required>
        </div>
        <div class="form-group">
            <button onclick="login()">Iniciar</button>
        </div>
        <div class="link">
            <a href="#" onclick="showRegisterForm()">¿No tienes una cuenta? Regístrate</a>
        </div>
        <div class="link">
            <a href="#" onclick="recoverCredentials()">¿Olvidaste tu usuario o contraseña?</a>
        </div>
    </div>

    <div class="container" id="register-form" style="display: none;">
        <h2>Registro</h2>
        <div class="form-group">
            <label for="register-username">Nombre de Usuario</label>
            <input type="text" id="register-username" required>
        </div>
        <div class="form-group">
            <label for="register-password">Contraseña</label>
            <input type="password" id="register-password" required>
        </div>
        <div class="form-group">
            <button onclick="register()">Registrar</button>
        </div>
        <div class="link">
            <a href="#" onclick="showLoginForm()">¿Ya tienes una cuenta? Inicia sesión</a>
        </div>
    </div>

    <script>
        const users = {}; // Simula una base de datos simple en memoria

        function showRegisterForm() {
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('register-form').style.display = 'block';
        }

        function showLoginForm() {
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'block';
        }

        function register() {
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;

            if (username in users) {
                alert('El nombre de usuario ya está en uso.');
            } else {
                users[username] = password;
                alert('Usuario registrado con éxito.');
                showLoginForm();
            }
        }

        function login() {
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            if (users[username] && users[username] === password) {
                alert('Inicio exitoso.');
            } else {
                alert('Nombre de usuario o contraseña incorrectos.');
            }
        }

        function recoverCredentials() {
            const username = prompt('Introduce tu nombre de usuario:');
            if (username in users) {
                alert('Tu contraseña es: ' + users[username]);
            } else {
                alert('Nombre de usuario no encontrado.');
            }
        }
    </script>
</body>
</html>
