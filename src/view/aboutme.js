export default () => {
  const containerAboutme = document.createElement('div');
  const templateAboutme = `
  <section id="sobreMi">
    <div class="foto">
      <img src="https://github.com/montezakarim/miportafolio/blob/master/src/img/perfil1.pnggi" alt="foto de perfil">
    </div>
    <div class="der">
      <h4>Sobre Mí</h4>
      <br>
      <p>
        Soy Karim Monteza, egresada de Laboratoria como Front-end Developer, con background en Administración de empresas. Apasionada, creativa, organizada y responsable. 
        En el trayecto en Laboratoria he desarrollado varios proyectos de desarrollo web, he aprendido el manejo de diferentes herramientas y he fortalecido mis habilidades en comunicación, trabajo colaborativo y metodologías ágiles. Me encanta el mundo tech, solucionar problemas y aprender cada día. Desde que empecé a programar y a construir plataformas web me motiva a estar en constante aprendizaje, especializarme y además de mejorar mis habilidades asumiendo nuevos retos profesionales. Más adelante quiero ser desarrolladora full-stack y liderar proyectos.
        <br>
        Me encantaría ser parte de un equipo que busca dar las mejores soluciones a los problemas y mejorar la calidad de vida de las personas para un mundo mejor.
      </p>
      <br>
      <h5>Habilidades</h5>
        <div class="icons">
          <a href="#"><i class="fab fa-js"></i></a>
          <a href="#"><i class="fab fa-html5"></i></a>
          <a href="#"><i class="fab fa-css3"></i></a>
          <a href="#"><i class="fab fa-sass"></i></a>          
          <a href="#"><i class="fab fa-node-js"></i></a>
          <a href="#"><i class="fab fa-react"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>  
          <a href="#"><i class="fas fa-users"></i></a>
      </div>
      <br>
      <div id="pdf">
      <a href="./cv.pdf" target="_blank">Puedes revisar mi CV aquí<i class="fas fa-file-alt"></i></a>
    </div> 
    </div>
  </section>`;
  containerAboutme.innerHTML = templateAboutme;
  return containerAboutme;
};
