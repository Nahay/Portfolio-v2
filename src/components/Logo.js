const Logo = () => {
    return (
        <div className="logo__content">
            <span onClick={() => (document.documentElement.scrollTop = 0)}>lilyb</span>
        </div>
    );
};

export default Logo;
