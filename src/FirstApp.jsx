import PropTypes from 'prop-types';

const persona = {
    name: 'Fernando',
    lastname: 'Nicolás', 
    age: 26,
    profession: 'Programador'
}

const saludo = () => {
    return '¡Bienvenido al curso React!';
}

export const FirstApp = ({ title, subTitle, name } ) => {
    return ( 
        <>
            <h1>{ title }</h1>
            <h2>{ subTitle }</h2>
            <h3>Mi nombre es: ¡{ name }!</h3>

            <code>{ JSON.stringify( persona ) }</code>
        </>
    );
}

/* Definiendo las Proptypes */
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string
}

/* Definiendo las DefaultProps */
FirstApp.defaultProps = {
    title: 'No hay ningún título',
    subTitle: 'No hay subtítulo',
    name: 'Fernando Nicolás'
} 