function Education() {
    return (
        <section id="education">
            <div className="image">
                <img src="/glimakrafolkhogskola.jpg" alt="Picture of Glimakra School" />
            </div>
            <div className="text">
                <div>
                    <h1>#Education</h1>
                    <p>
                        I spent two years studying web development at <a href="https://www.glimnet.se" target="_blank" rel="noopener noreferrer">Glimåkra Folkhögskola</a>. The course was structured into twelve modules, each focusing on different aspects of web development. At the end of each module, we completed a case project that allowed us to apply the techniques we had learned.
                    </p>
                </div>
                <div className="cases">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JavaScript APIs</li>
                        <li>Hosting and WordPress</li>
                        <li>Node.js</li>
                    </ul>
                    <ul>
                        <li>Backend PHP and SQL</li>
                        <li>React</li>
                        <li>WebSockets</li>
                        <li>Fullstack PHP</li>
                        <li>WordPress Group Project</li>
                        <li>Examination Project</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Education;
