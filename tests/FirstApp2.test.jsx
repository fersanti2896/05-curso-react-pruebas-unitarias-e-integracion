import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en componente <FirstApp />', () => {
    const title = '¡Bienvenido al curso de React!';
    const subTitle = 'Primeros pasos';

    test('Debe hacer match con el snapshot.', () => {
        const { container } = render(<FirstApp title={ title }/>);

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el msg "¡Bienvenido al curso de React!".', () => {
        render(<FirstApp title={title}/>);

        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el título en un h1', () => {
        render(<FirstApp title={title}/>);

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('Debe de mostrar el subtítulo enviado en las props', () => {
        render(<FirstApp subTitle={subTitle}/>);

        expect( screen.getAllByText(subTitle).length ).toBe(1);
    })
});