import { useState } from "react";

const Header = ({ goToComponent, nav, setScroll }) => {

    // const [nav, setNav] = useState('landing');


    // const setScroll = (type) => {

    //     goToComponent(type)

    //     setNav(type);
    // }


    return (
        <header>
            <nav>
                <ul>
                    <li className={nav === 'landing' ? "active" : ''}
                        onClick={() => setScroll('landing')}
                    >Home</li>
                    <li className={nav === 'skills' ? "active" : ''}
                        onClick={() => setScroll('skills')}
                    >Skills</li>
                    <li className={nav === 'projects' ? "active" : ''}
                        onClick={() => setScroll('projects')}
                    >Portfolio</li>
                    <li className={nav === 'social' ? "active" : ''}
                        onClick={() => setScroll('social')}
                    >Social Media</li>
                    <li className={nav === 'contact' ? "active" : ''}
                        onClick={() => setScroll('contact')}
                    >Contact Me</li>
                </ul>
            </nav>

            <button onClick={() => setScroll('contact')}>
                Let's Chat
            </button>
        </header>
    );
}

export default Header;