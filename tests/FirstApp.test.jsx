import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en componente <FirstApp />', () => {
    test('Debe hacer match con el snapshot.', () => {
        const { container } = render(<FirstApp />);

        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el título en un h1.', () => {
        const title = '¡Bienvenido al curso React!';
        const { container, getByText } = render(<FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        console.log(h1.innerHTML);

        expect(h1.innerHTML).toContain(title);
    });
});