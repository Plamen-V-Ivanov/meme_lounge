// import * as api from './api/users.js';

// window.api = api;

import { page, render } from './lib.js';
import { homeView } from './views/home.js';
const main = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/memes', () => console.log('catalog'));
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));


// start application
page.start();

function decorateContext(context, next) {
    context.render = renderMain;
    next();
}

function renderMain(templateResult) {
    render(templateResult, main)
}
