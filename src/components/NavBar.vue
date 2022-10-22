<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <b-navbar class="fixed-top shadow-sm" toggleable="lg" type="light" variant="white">
      
      <b-img class="icon-bandesal" src="../assets/LogoBANDESAL_.png"></b-img>
      <label class="mt-2 mr-2 d-none d-xl-block d-xxl-block title"
        >BANDESAL</label
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- R ight aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item
              :to="{ name: 'home' }"
              class="mr-4 mb-1 text-center btn-style"
              exact
            >
              INICIO
            </b-nav-item>
            <b-nav-item-dropdown
              class="text-center btn-style mr-3 mb-1"
              text="ESTADOS FINANCIEROS"
              right
            >
              <b-nav-item
                :to="{ name: 'balance' }"
                class="text-center text-item"
                exact
              >
                BALANCE GENERAL
              </b-nav-item>
              <b-nav-item
                :to="{ name: 'estado' }"
                class=" text-center text-item "
                exact
              >
                ESTADO DE RESULTADOS
              </b-nav-item>
              <b-nav-item
                :to="{ name: 'indicadores' }"
                class="text-center text-item "
                exact
              >
                INDICADORES
              </b-nav-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              class="text-center btn-style mr-5 mb-1"
              text="ANÁLISIS FINANCIERO" 
              right
            >

            <b-nav-item
                :to="{ name: 'vertical' }"
                class="text-center text-item"
                exact
              >
              ANÁLISIS VERTICAL
              </b-nav-item>
              <b-nav-item
                :to="{ name: 'horizontal' }"
                class=" text-center text-item "
                exact
              >
              ANÁLISIS HORIZONTAL
              </b-nav-item>
              <b-nav-item
                :to="{ name: 'dupont' }"
                class="text-center text-item "
                exact
              >
              ANÁLISIS DUPONT
              </b-nav-item>

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
  font-weight: bold;
  color: #6c757d;
  border: none;
}
.btn-style:hover {
  background: white;
  color: var(--gray-dark);
}
.btn-style:focus {
  box-shadow: none;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: var(--gray);
  margin-left: 60px;
}

.text-item{
  font-size: 12px;
  color: gray;
}

.icon-bandesal{
  position: absolute;
  width: 50px;
  height: 50px;
  left: 25px;
  top: 10px;
}
</style>
