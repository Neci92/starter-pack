import Show from './modules/module1';
import Hide from './modules/module2';
import 'bootstrap/scss/bootstrap.scss';

Show('Ubacen je loader za CSS i SCSS, mesta za razvoj ima u webpacku.');

setTimeout(() => {
    Hide('message');
}, 3000);