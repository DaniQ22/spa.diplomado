<template>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md">
            <a class="navbar-brand" href="#">HotelesDR</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/hotels" class="nav-link" aria-current="page">Hoteles</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tipohabi" class="nav-link" aria-current="page">Tipo Habitaciones</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/pagacom" class="nav-link" aria-current="page">Acomodaciones</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>