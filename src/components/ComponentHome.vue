<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container-fluid cont-principal">
    <div class="row">
      <div class="col-3">
        <div class="row mb-3 ml-3 title">
          ¿Como hace tu vida mas facil un software financiero?
        </div>
        <div class="row ml-3">
          Las ventajas de un software financiero son enormes, porque facilitan
          el trabajo del área, optimiza tus procesos, ahorra tiempo, genera
          ganancias y brinda la información necesaria para la toma de
          decisiones.
        </div>
        <div class="row">
          <b-img
            class="img-left"
            src="../assets/undraw_programming_re_kg9v.svg"
            fluid
            alt="Responsive image"
          ></b-img>
        </div>
      </div>
      <div class="col-6">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets5.lottiefiles.com/packages/lf20_JltT5PDsjU.json"
          style="width: 450px"
          class="img"
        >
        </lottie-player>
      </div>
      <div class="col-3">
        <div class="row mb-3 title-2">
          ¿Que funcionalidades te ofrece este software financiero?
        </div>
        <div class="row text-list">
          Balance General <br />
          Estado de Resultados <br />
          Indicadores <br />
          Análisis Vertical <br />
          Análisis Horizontal <br />
          Análisis Dupont
        </div>
        <div class="row">
          <b-img
            class="img-right"
            src="../assets/undraw_mind_map_re_nlb6.svg"
            fluid
            alt="Responsive image"
          ></b-img>
        </div>
        <div class="row">
          <button class="btn-creadores" v-b-toggle.sidebar-right>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-code"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"
              />
            </svg>
            Integrantes
          </button>
          <b-sidebar id="sidebar-right" title="" right shadow>
            <div class="px-3 py-2">
              <div class="row mt-5 card-integrantes">
                <div class="col-5">
                  <b-img
                    src="../assets/Diego.jpg"
                    fluid
                    class="img-creadores"
                  ></b-img>
                </div>
                <div class="col">
                  <div class="row mt-3 name-principal">Juan Diego</div>
                  <div class="row">Valencia Echeverria</div>
                </div>
              </div>
              <div class="row card-integrantes">
                <div class="col-5">
                  <b-img
                    src="../assets/milton.jpg"
                    fluid
                    class="img-creadores"
                  ></b-img>
                </div>
                <div class="col">
                  <div class="row mt-3 name-principal">Milton Jeremias</div>
                  <div class="row">Martinez Galindo</div>
                </div>
              </div>
              <div class="row card-integrantes">
                <div class="col-5">
                  <b-img
                    src="../assets/kelvin.jpg"
                    fluid
                    class="img-creadores"
                  ></b-img>
                </div>
                <div class="col">
                  <div class="row mt-3 name-principal">Kelvin Edenilson</div>
                  <div class="row">Rojas Chillin</div>
                </div>
              </div>
            </div>
          </b-sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cont-principal {
  display: block;
  margin-top: 90px;
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.title {
  display: block;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
}

.title-2 {
  display: block;
  font-size: 25px;
  font-weight: bold;
  text-align: right;
  margin-right: 30px;
}

.img-left {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  margin-top: 40px;
}

.btn-creadores {
  position: absolute;
  bottom: -40px;
  right: 30px;
  background-color: white;
  border: none;
  height: 30px;
  padding: 5px;
  color: gray;
}

.btn-creadores:hover {
  color: black;
  border: none;
}

.img-creadores {
  width: 120px;
  border-radius: 100%;
}

.card-integrantes {
  margin-bottom: 30px;
}

.text-list {
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.img-right {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.name-principal{
  font-weight: bold;
  color: gray;
}
</style>
