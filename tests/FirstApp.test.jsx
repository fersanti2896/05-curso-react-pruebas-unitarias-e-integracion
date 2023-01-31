import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en componente <FirstApp />', () => {
    /*test('Debe hacer match con el snapshot.', () => {
        const { container } = render(<FirstApp />);

        expect( container ).toMatchSnapshot();
    });*/

    test('Debe mostrar el título en un h1.', () => {
        const title = '¡Bienvenido al curso React!';
        const { container, getByText, getByTestId } = render(<FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('Debe de mostrar el subtítulo enviado por props.', () => {
        const subTitle = 'Primeros pasos en Reat';
        const { getByText, getByTestId } = render(<FirstApp subTitle={subTitle}/>);

        expect( getByText(subTitle) ).toBeTruthy();
    });
});