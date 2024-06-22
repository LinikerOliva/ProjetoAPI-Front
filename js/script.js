function loadUserDataFromLocalStorage() {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
        const usuario = JSON.parse(userDetails);
        const userNameElement = document.getElementById('user-name');
        const userEmailElement = document.getElementById('user-email');
        const userTypeElement = document.getElementById('user-type');
        
        userNameElement.textContent = `Bem-Vindo, ${usuario.nome}`;
        userEmailElement.textContent = `E-mail: ${usuario.email}`;
        userTypeElement.textContent = `Tipo de Conta: ${usuario.is_admin}`;

        // Mostrar ou ocultar links conforme o tipo de conta
        updateAdminLinksDisplay(usuario.is_admin);
    }
}


    async function checkLoginStatus() {
        const token = localStorage.getItem('token');
        const logoutLink = document.getElementById('logoutLink');
        const userNameElement = document.getElementById('user-name');
        const userEmailElement = document.getElementById('user-email');
        const userTypeElement = document.getElementById('user-type');

        if (token) {
            try {
                const usuarioId = pegarUsuarioId(); // Obter o id do usuário da função
                const response = await fetch(`http://127.0.0.1:5000/usuarios/${usuarioId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();
                const usuario = data.usuario;

                if (usuario) {
                    userNameElement.textContent = `Olá, ${usuario.nome}`;
                    userEmailElement.textContent = `E-mail: ${usuario.email}`;
                    userTypeElement.textContent = `Tipo de Conta: ${usuario.is_admin}`;

                    // Mostrar ou ocultar links conforme o tipo de conta
                    updateAdminLinksDisplay(usuario.is_admin);

                    localStorage.setItem('userDetails', JSON.stringify(usuario));
                }
            } catch (error) {
                console.error('Erro ao obter dados do usuário:', error);
            }

            document.getElementById('loginLink').style.display = 'none';
            document.getElementById('cadastroLink').style.display = 'none';
            logoutLink.style.display = 'inline-block';
            logoutLink.addEventListener('click', async function (event) {
                event.preventDefault();
                await logout();
            });
        } else {
            // Limpar os detalhes do usuário da interface se não houver token
            userNameElement.textContent = 'Olá';
            userEmailElement.textContent = '';
            userTypeElement.textContent = '';
            updateAdminLinksDisplay(false);

            document.getElementById('loginLink').style.display = 'inline-block';
            document.getElementById('cadastroLink').style.display = 'inline-block';
            logoutLink.style.display = 'none';
        }
    }

    // Função para atualizar a exibição dos links de administrador
    function updateAdminLinksDisplay(isAdmin) {
        const filmesLink = document.getElementById('filmesLink');
        const usuariosLink = document.getElementById('usuariosLink');
        if (isAdmin === 'Administrador') {
            filmesLink.style.display = 'inline-block';
            usuariosLink.style.display = 'inline-block';
        } else {
            filmesLink.style.display = 'none';
            usuariosLink.style.display = 'none';
        }
    }

    // Função para pegar o ID do usuário da URL
    function pegarUsuarioId() {
        const url = window.location.href;
        const urlObj = new URL(url);
        const params = new URLSearchParams(urlObj.search);
        return params.get('user_id');
    }

    // Função para fazer logout
    async function logout() {
        try {
            const response = await fetch('http://127.0.0.1:5000/logout');
            const data = await response.json();
            console.log(data.message);
            localStorage.removeItem('token');
            localStorage.removeItem('userDetails'); // Remover os detalhes do usuário do localStorage ao fazer logout
            checkLoginStatus(); // Atualiza a interface após o logout
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    }