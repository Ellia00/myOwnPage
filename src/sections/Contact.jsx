import { useState } from "react";

function Contact() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("elliotborgkvist@gmail.com")
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
      })
      .catch(() => {
        setCopySuccess("Failed to copy.");
      });
  };

  return (
    <section id="contact">
      <div className="image">
        <img src="/_MG_3993.jpg" alt="Picture of me" />
      </div>
      <div className="text">
        <h1>#Contact</h1>
        <p>
          If you would like to get in touch with me, feel free to reach out
          through any of the following methods:
        </p>

        <div className="contact-info">
          <p>#Contact Information</p>
          <ul>
            <li>
              elliotborgkvist@gmail.com
              <button onClick={copyToClipboard} className="copy-button">
                Copy
              </button>
              {copySuccess && (
                <span className="copy-message">{copySuccess}</span>
              )}
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/elliot-borgkvist-500178323/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ellia00"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
