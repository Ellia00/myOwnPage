
function Header({ activeSection }) {
    return (
        <header>
            <h1>Elliot Borgkvist</h1>
            <ul>
                <li className={activeSection === "me" ? "active" : ""}><a href="#me">#Me</a></li>
                <li className={activeSection === "education" ? "active" : ""}><a href="#education">#Education</a></li>
                <li className={activeSection === "exProject" ? "active" : ""}><a href="#exProject">#Ex Project</a></li>
                <li className={activeSection === "contact" ? "active" : ""}><a href="#contact">#Contact</a></li>
            </ul>
        </header>
    );
}

export default Header;
