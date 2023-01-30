
import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => { 
    test('getSaludo debe retornar "Hola Fernando"', () => {
        const nombre = 'Fernando';
        const msg = getSaludo(nombre);  

        expect(msg).toBe(`Hola ${ nombre }`);
    });
});