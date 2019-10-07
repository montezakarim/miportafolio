export default () => {
  const containerHome = document.createElement('div');
  const templateHome = `
     <section id="inicio"> 
        <div class="foto">
        <img src="img/perfil1.jpg" >
      </div>
      <div class="intro">
        <div class="animationInit">
          <svg viewBox="82 -45 510 102">
          <text text-anchor="middle" x="60%" y="50%">Karim</text>
        </svg>
        </div>
        <div class="apellido">
          <svg viewBox="35-30 700 92">
          <text text-anchor="middle" x="55%" y="50%">Monteza Montenegro</text>
        </svg>
        </div>
        <br>
        <br>
        <h5> Desarrolladora Front-end </h5>     
      </div>
    </section>`;
  containerHome.innerHTML = templateHome;
  return containerHome;
};
