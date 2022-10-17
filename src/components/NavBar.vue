<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" type="light" variant="white">
      <label class="mt-2 mr-2 d-none d-xl-block d-xxl-block title"
        >ANÁLISIS FINANCIERO</label
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- R ight aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item
              :to="{ name: 'Home' }"
              class="mr-4 mb-1 text-center btn-style"
              exact
            >
              INICIO
            </b-nav-item>
            <b-nav-item-dropdown
              class="text-center btn-style mr-3 mb-1"
              text="PRINCIPAL"
              right
            >
              <b-dropdown-item href="#">BALANCE GENERAL</b-dropdown-item>
              <b-dropdown-item href="#">ESTADO DE RESULTADOS </b-dropdown-item>
              <b-dropdown-item href="#">INDICADORES</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              class="text-center btn-style mr-5 mb-1"
              text="SECUNDARIO"
              right
            >
              <b-dropdown-item href="#">ANÁLISIS VERTICAL</b-dropdown-item>
              <b-dropdown-item href="#">ANÁLISIS HORIZONTAL</b-dropdown-item>
              <b-dropdown-item href="#">ANÁLISIS DUPONT</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
:root {
  --gray: #6c757d;
  --gray-dark: #343a40;
  --dark: #343a40;
  --primary: #ffebc9;
  --secondary: ;
}
.btn-style {
  background: white;
  color: #6c757d;
  border: none;
  border-bottom: 3px solid white;
}
.btn-style:hover {
  background: white;
  color: var(--gray-dark);
  border-bottom: 3px solid #7c5cfc;
}
.btn-style:focus {
  box-shadow: none;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: var(--gray);
  margin-left: 20px;
}
</style>
