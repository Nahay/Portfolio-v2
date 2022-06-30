const Navbar = () => {
    const moveTo = (link) => {
        document.getElementById(link).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
    };

    return (
        <div className="navbar">
            <div className="navbar__right">
                <nav>
                    <button className="nav__btn" onClick={() => moveTo('about')}>
                        About
                    </button>
                    <button className="nav__btn" onClick={() => moveTo('services')}>
                        Services
                    </button>
                    <button className="nav__btn" onClick={() => moveTo('works')}>
                        Works
                    </button>
                    <button className="btn" onClick={() => moveTo('contact')}>
                        Contact
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
