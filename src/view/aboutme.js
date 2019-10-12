export default () => {
  const containerAboutme = document.createElement('div');
  const templateAboutme = `
  <section id="sobreMi">
    <div class="izq">
      <div class="foto">
        <img src="img/perfil1.jpg" >
      </div>
    </div>
    <div class="der">
      <h4>Sobre Mi</h4>
      <br>
      <p>
        Soy Karim Monteza Front End Developer, egresada de Laboratoria con background en Administración de empresas. Apasionada, creativa, organizada y responsable. Me encanta el mundo tech  y desde a que empecé a programar y a construir plataformas web me motiva a estar en constante aprendizaje, especializarme y además de mejorar mis habilidades asumiendo nuevos retos profesionales. Mas adeante quiero ser desarrolladora full-stack y liderar proyectos. Me encataría ser parte de un equipo que busca dar las mejores soluciones a los problemas y mejorar la calidad de vida de las personas para un mendo mejor.
      </p>
      <br>
      <br>
      <h5>Habilidades</h5>
        <div class="icons">
          <a href="#"><i class="fab fa-js"></i></a>
          <a href="#"><i class="fab fa-html5"></i></a>
          <a href="#"><i class="fab fa-css3"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>       
          <a href="#"><i class="fab fa-sass"></i></a>          
          <a href="#"><i class="fab fa-node-js"></i></a>
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
