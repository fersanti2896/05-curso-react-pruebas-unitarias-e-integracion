import { useState } from 'react';
import PropTypes, { func } from 'prop-types';

export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
    };

    const handlePop = () => {
        setCounter( counter - 1 );
    };

    const handleReset = () => {
        setCounter( value );
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2> Value: { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handlePop }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </> 
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}


