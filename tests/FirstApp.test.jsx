import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en componente <FirstApp />', () => {
    test('Debe hacer match con el snapshot.', () => {
        render(<FirstApp />)
    });
});