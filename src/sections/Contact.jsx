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
        <img src="/315180233_670966547952560_1368967394108862490_n.jpg" alt="Picture of me" />
      </div>
      <div className="text">
        <h1>#Contact</h1>
        <p>
          If you would like to get in touch with me, feel free to reach out
          through any of the following methods:
        </p>

        <div className="contact-info">
          <ul>
            <li className="button-parent">
              elliotborgkvist@gmail.com
              <button onClick={copyToClipboard} className="copy-button">
                <svg
                  xsvgmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <rect
                    x="128"
                    y="128"
                    width="336"
                    height="336"
                    rx="57"
                    ry="57"
                    fill="none"
                    stroke="#fefefe"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
                    fill="none"
                    stroke="#fefefe"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
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
