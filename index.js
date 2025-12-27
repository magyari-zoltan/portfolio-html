import NavigationMenuPresenter from './src/navmenu/presenter/navigationMenuPresenter.js';
import TogglerMenuUseCases from './src/navmenu/usecase/togglerMenuUseCases.js';
import TogglerMenuController from './src/navmenu/controller/togglerMenuController.js';
import NavmenuController from './src/navmenu/controller/navmenuController.js';
import CookieMessagePresenter from './src/cookies/presenter/cookieMessagePresenter.js';
import CookieMessageUseCases from './src/cookies/usecase/cookieMessageUseCases.js';
import CookieMessageController from './src/cookies/controller/cookieMessageController.js';
import ArrowUpIconPresenter from './src/arrow-up/presenter/arrowUpIconPresenter.js';
import ArrowUpIconUseCase from './src/arrow-up/usecase/arrowUpIconUseCase.js';
import ArrowUpIconController from './src/arrow-up/controller/arrowUpIconController.js';

const navigationMenuPresenter = NavigationMenuPresenter.createNavigationMenuPresenter();
const navmenuController = NavmenuController.createNavmenuController();
const togglerMenuUseCases = TogglerMenuUseCases.createTogglerMenuUseCases(
	navigationMenuPresenter,
	navmenuController,
);
TogglerMenuController.createTogglerMenuController(togglerMenuUseCases);

const cookieMessagePresenter = CookieMessagePresenter.createCookieMessagePresenter();
const cookieMessageUseCases = CookieMessageUseCases.createCookieMessageUseCases(
	cookieMessagePresenter,
);
CookieMessageController.createCookieMessageController(cookieMessageUseCases);

const arrowUpIconPresenter = ArrowUpIconPresenter.createArrowUpIconPresenter();
const arrowUpIconUseCase = ArrowUpIconUseCase.createArrowUpIconUseCase(arrowUpIconPresenter);
ArrowUpIconController.createArrowUpIconController(arrowUpIconUseCase);

// TODO: Remove this code! It is there to display the resolution of devices.
const screenResolution = document.querySelector('.screen-resolution-js');
screenResolution.innerHTML = `<strong>Resolution:</strong> ${window.innerWidth} x ${window.innerHeight} (Pixel ratio: ${window.devicePixelRatio})`;
