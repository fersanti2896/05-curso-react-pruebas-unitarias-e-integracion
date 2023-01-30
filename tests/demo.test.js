
describe('Pruebas en <DemoComponent />', () => { 
    test('Esta prueba no debe de fallar!', () => {
        /* 1. Inicialización */
        const msg = 'Hola mundo';
    
        /* 2. Estímulo */
        const msg2 = msg.trim();
    
        /* 3. Observar el comportamiento esperado */
        expect( msg ).toBe( msg2 );
    });
});

