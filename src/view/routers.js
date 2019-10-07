import { components } from './components.js';

export const changeView = (routers) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routers) {
    case '#/': container.appendChild(components.home());
      break;
    case '#/contact': container.appendChild(components.contact());
      break;
    case '#/portafolio': container.appendChild(components.portafolio());
      break;
    case '#/aboutme': container.appendChild(components.aboutme());
      break;
    default: container.appendChild(components.home());
      break;
  }
};
