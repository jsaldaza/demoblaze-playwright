Feature: Login

    Scenario: Login exitoso con credenciales válidas
        Given el usuario está en la página de inicio
        When hace clic en Login
        And ingresa credenciales válidas
        Then debería ver su nombre de usuario en la barra superior
