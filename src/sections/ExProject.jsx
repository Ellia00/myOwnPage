function ExProject() {
    return (
        <section id="exProject">
            <div className="image">
                <img src="/Snapchat-1695812432Compressed.jpg" alt="Some code for the project" />
            </div>
            <div className="text">
                <h1>#Ex Project</h1>
                <p>For my examination project, I collaborated with my friend Johannes Stenfeldt to develop an Instructor Application for <a href="https://omc.nu/" rel="noopener noreferrer" target="_blank" >ÖMC</a>, a tool designed to manage instructors and scheduling. We utilized Power Automate to fetch information from their Outlook calendar, ensuring that any new events are displayed on our application. Built on the MERN stack (MongoDB, Express, React, and Node.js), our project allows instructors to browse available courses and submit requests to host courses. These requests can be accepted or denied by administrators, with updates synchronized back to the calendar.
                </p>
            </div>
        </section>
    );
}

export default ExProject;
