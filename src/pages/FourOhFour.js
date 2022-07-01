import { useEffect, useState } from 'react';

const FourOhFour = () => {
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        setInterval(() => setCounter(counter - 1), 1000);
        counter === 0 && window.location.assign('/');
    }, [counter]);

    return (
        <div className="four-oh-four">
            <p>LOST</p>
            <span>{counter}</span>
        </div>
    );
};

export default FourOhFour;
