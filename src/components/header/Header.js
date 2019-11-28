import React, {useState, useEffect} from 'react';
import './Header.scss'


function Header(props) {
    const [cursor, setCursor] = useState('_');

    const flipCursor = () => {
        if (cursor === '_') setCursor('');
        else setCursor('_');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            flipCursor();
        }, 500);
        return () => clearInterval(interval);
    });

    return (
        <div className="header">
            <div>
                <h2>{props.name}~${cursor}</h2>
            </div>
            <div id="tagline">
                <code>{props.tagline}</code>
            </div>
        </div>
    )
}

export default Header