export default () => {
  const containerContact = document.createElement('div');
  const templateContact = `
  <section id="contacto">
      <div class="izq">        
        <svg viewBox="40 10 2500 500">
          <text text-anchor="middle" x="50%" y="50%">Contáctame!</text>
        </svg>
        <div class="contactText">
          <p><i class="fa fa-mobile"></i> +51 922 570 898</p>
          <p><a href="mailto: kmonteza@hotmail.com" target="_blank"><i class="fa fa-envelope"></i> kmonteza@hotmail.com</a></p>
          <p><a href="https://github.com/montezakarim" target="_blank"><i class="fab fa-github"></i> github.com/montezakarim</a></p>
          <p><a href="https://www.linkedin.com/in/karim-monteza/"><i class="fab fa-linkedin"></i> linkedin.com/in/karim-monteza</a></p> 
        </div>             
      </div>   
    </section>`;
  containerContact.innerHTML = templateContact;
  return containerContact;
};
