
export default () => {
  const containerPortafolio = document.createElement('div');
  const templatePortafolio = `
  <section id="portafolio">
    <div class="carousel"> 
      <div class="column"> 
        <a class="carousel-item" href="https://montezakarim.github.io/LIM010-Cipher/src/" target="_blank">
          <img src="img/cipher.JPG">
        </a>
        <div class="overlay">
          <h5>Safe Text </h5>
          <p>Aplicación web que le permita a un usuario cifrar y descifrar un mensaje.
            Propuesta de una solución, diseño y desarrollo, etiquetas semánticas y formularios en HTML5,
            modelo de cajas y selectores en CSS3, métodos de selección y eventos del DOM, manipulación de strings, control de flujo y funciones en JS.
            <a href="https://github.com/montezakarim/LIM010-Cipher" style="text-decoration:none"><span> GitHub </span></a>
          </p>
        </div>
      </div>
      <div class="column"> 
        <a class="carousel-item" href="https://montezakarim.github.io/LIM010-data-lovers/src/" target="_blank">
          <img src="img/pokemonGo.JPG">
        </a>
        <div class="overlay">
          <h5>Sitio Web POKEMON GO Data Lovers </h5>
          <p>La plataforma permite brindar apoyo informativo a los usuarios de este juego a través una aplicación similar a la pokedex 
          que muestra información relevante de los pokemones de la región Kanto y permita que los usuarios puedan interactuar con dicha 
          información y conocer las características de aquellos pokemones que inclusive no están atrapados.
          Reforcé objetivos de aprendizaje de UX, HTML5, CSS3, DOM y JavaScript, Pruebas unitarias con Jest, Git y GitHub, trabajo colaborativo y adaptabilidad.
            <a href="https://github.com/montezakarim/LIM010-data-lovers" style="text-decoration:none"><span> GitHub </span></a>
          </p>
        </div>
      </div>
      <div class="column"> 
        <a class="carousel-item" href="https://montezakarim.github.io/LIM010-social-network/src/" target="_blank">
          <img src="img/easystar.JPG">
        </a>
        <div class="overlay">
          <h5>Red Social Easy Start </h5>
          <p>Red Social, Single-Page Application (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos.
          Arquitectura de la página, modularización, MVC, HTML5, CSS3, DOM,, Web APIs y JavaScript(Callback y Promesas), sistema de rutas, Firebase, test con Jest, Git y GitHub, trabajo colaborativo y adaptabilidad.
            <a href="https://github.com/montezakarim/LIM010-social-network" style="text-decoration:none"><span> GitHub </span></a>
          </p>
        </div>
      </div>
      <div class="column"> 
        <a class="carousel-item" href="https://github.com/montezakarim/md-links" target="_blank">
          <img src="https://github.com/montezakarim/LIM010-fe-md-links/blob/master/md/markdown.png?raw=true">
        </a>
        <div class="overlay">
          <h5> md-links </h5>
          <p>Este proyecto permitió crear una librería para leer los links de archivos Markdown. Está implementada en JavaScript y 
          ejecutada en Node.js.   
          Herramientas JavaScript(Callback, promesas, recursión, módulos Js), Node(sistema de archivos, package.json, crear modules, npm scripts, CLI), testing(Jest, para múltiples sistemas operativos, testeo asíncrono), Git - GitHub.
            <a href="https://github.com/montezakarim/md-links" style="text-decoration:none"><span> GitHub </span></a>
          </p>
        </div>
      </div>
    </div>
  </section>`;
  containerPortafolio.innerHTML = templatePortafolio;
  return containerPortafolio;
};
