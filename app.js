require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './js/modules/tabs';
import modal from './js/modules/modal';
import timer from './js/modules/timer';
import cards from './js/modules/cards';
import calculator from './js/modules/calculator';
import forms from './js/modules/forms';
import slider from './js/modules/slider';
import {openModal} from './js/modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-08-31');
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });


});


// npx webpack -- запуск 
// npx json-server --watch db.json  -- ЗАПУСК ЖСОН