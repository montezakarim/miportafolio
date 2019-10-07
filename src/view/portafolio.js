export default () => {
  const containerPortafolio = document.createElement('div');
  const templatePortafolio = `
  <section id="portafolio">
    <div class="carousel">            
      <a class="carousel-item" href="https://github.com/montezakarim/LIM010-Cipher" target="_blank">
        <div class="overlay">
          <h5>Safe Text </h5>
          <p>Funcionalidad, diseño y desarrollo, animaciones, HTML, CSS y responsive.<span>Ver más ></span></p>
        </div>
        <img src="img/cipher.JPG">
      </a>
      <br>
      <br>
      <a class="carousel-item" href="https://github.com/montezakarim/LIM010-data-lovers" target="_blank">
        <div class="overlay">
          <h5>Sitio Web Pokemon Go Data</h5>
          <p>JavaScript, diseño layout y desarrollo, HTML, CSS, resposivo. <span>Ver más ></span></p>
        </div>
        <img src="img/pokemonGo.JPG">
      </a>     
      <br>
      <br>
      <a class="carousel-item" href="https://github.com/montezakarim/LIM010-social-network" target="_blank">
        <div class="overlay">
          <h5>Sitio Web Easy Start Red Social</h5>
          <p>Diseño de layout, animaciones, HTML, CSS, SPA, diseño responsivo, JavaScript, Firebase. <span>Ver más ></span></p>
        </div>
        <img src="img/easystar.JPG">
      </a>
    </div>
  </section>`;
  containerPortafolio.innerHTML = templatePortafolio;
  return containerPortafolio;
};
