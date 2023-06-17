import React, { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Gakii');
    const [count, setCount] = useState(0)
    const handleRandomNames = () => {
        const names = ['Gakii', 'Bushra', 'Mahmood'];
        const randomInt = Math.floor(Math.random() * 3);
        setName(names[randomInt]);
    };

    return (
        <main>
            <p>Hello {name}</p>
            <button onClick={handleRandomNames}>Change Name</button>
        </main>
    );
};

export default Content;
