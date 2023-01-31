import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp/>', () => {
    const initValue = 10;
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={initValue} /> );

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 10', () => {
        render( <CounterApp value={10} /> );

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('10')
    });
});