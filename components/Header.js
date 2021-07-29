const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="active">Home</li>
                    <li>Skills</li>
                    <li>Portfolio</li>
                    <li>Social Media</li>
                    <li className="active">Contact Me</li>
                </ul>
            </nav>

            <button>
                Let's Chat
            </button>
        </header>
    );
}

export default Header;