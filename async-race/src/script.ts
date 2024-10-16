import Garage from './pages/garage';
import Winners from './pages/winners';
import './style.css';

const garage = new Garage();
garage.createGarageButtons();

const body: HTMLElement = <HTMLElement>document.querySelector('.body');

body.addEventListener('click', (event) => {
  const target: Element = <Element>event.target;
  if (target.className.includes('garage-button')) {
    body.innerHTML = '';
    const newGarage = new Garage();
    newGarage.createGarageButtons();
  }
  if (target.className.includes('winners-button')) {
    body.innerHTML = '';
    const winners = new Winners();
    winners.createWinners();
  }
});
