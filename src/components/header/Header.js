import React, {useState, useEffect} from 'react';
import './Header.scss'


function Header(props) {
    const [cursor, setCursor] = useState('_');
// 25AF
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
        <div className="site-header">
            <div>
                <h4>{props.name}~${cursor}</h4>
            </div>
            <div id="tagline">
                <p>{props.tagline}</p>
            </div>
        </div>
    )
}

export default Header