import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/herores";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por su id.', () => {
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe retornar un undefined si no existe.', () => {
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC.', () => {
        const heros = getHeroesByOwner( 'DC' );

        expect( heros ).toEqual( heroes.filter( (heroe) => heroe.owner === 'DC' ) );
        expect( heros.length ).toBe( 3 );
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel.', () => {
        const heroes = getHeroesByOwner( 'Marvel' ).length;
        
        expect( heroes ).toBe( 2 );
    });
});