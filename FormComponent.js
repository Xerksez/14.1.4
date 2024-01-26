// @flow
import React from 'react';

type Props = {
    prop1: string,
    prop2: number,
};

function FormComponent(props: Props): React$Node {
    const { prop1, prop2 } = props;

    // Dodaj dowolną logikę
    const isProp2Even: boolean = prop2 % 2 === 0;
    const textStyle: { color?: string } = isProp2Even ? { color: 'green' } : {};

    return (
        <div>
            <p style={textStyle}>Property 1: {prop1}</p>
            <p style={textStyle}>Property 2: {prop2}</p>
            {/* ... inne elementy JSX ... */}
        </div>
    );
}

export default FormComponent;