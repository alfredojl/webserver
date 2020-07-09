const hbs = require('hbs');

/* Helpers */
hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('toUpper', (nombre) => {
    let palabras = nombre.toUpperCase();

    return palabras;
});