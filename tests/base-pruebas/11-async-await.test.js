import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe retornar una url de la imagen.', async() => {
        const url = await getImagen();

        expect( typeof url ).toBe('string');
    });

    /*  Autor: Fernando Nicolás
        Fecha: 31-01-23
        Desc: Se oculta esta prueba, solo si no se tiene la apikey de la prueba, se descomenta */
    /*
    test('getImagen debe retornar una error sino se encontró la imagen.', async() => {
        const resp = await getImagen();

        expect( resp ).toBe('No se encontró la imagen');
    });
    */
});