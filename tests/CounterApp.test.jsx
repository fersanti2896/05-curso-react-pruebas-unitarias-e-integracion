import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp/>', () => {
    const initValue = 10;

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={initValue} /> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 10', () => {
        render( <CounterApp value={initValue} /> );

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('10');
    });

    test('Debe de incrementar con el botón +1', () => {
        render( <CounterApp value={initValue} /> );

        /* Dispara evento */
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('11');
    });

    test('Debe de decrementar con el botón -1', () => {
        render( <CounterApp value={initValue} /> );

        /* Dispara evento */
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('9');
    });

    test('Debe funcionar el botón de reset.', () => {
        render( <CounterApp value={initValue} /> );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

        /* screen.debug(); */ 

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('10');
    });
});