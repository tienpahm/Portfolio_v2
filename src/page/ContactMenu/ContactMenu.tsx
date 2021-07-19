import React from "react";
import "./ContactMenu.css";

export default function ContactMenu() {
  return (
    <div className="contactMenu-container">
      <div className="contactMenu-content">
        <div
          className="contact-card linkedin"
          onMouseOver={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card linkedin active";
            }
          }}
          onMouseLeave={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className =
                "contact-card linkedin deactive";
              setTimeout(() => {
                (e.target as Element).className = "contact-card linkedin";
              }, 300);
            }
          }}>
          <a
            href="https://www.linkedin.com/in/tien-pham-074b68187/"
            target="_blank"
            rel="noreferrer">
            <span>Linkedin</span>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div
          className="contact-card github"
          onMouseOver={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card github active";
            }
          }}
          onMouseLeave={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card github deactive";
              setTimeout(() => {
                (e.target as Element).className = "contact-card github";
              }, 300);
            }
          }}>
          <a
            href="https://github.com/tienpahm"
            target="_blank"
            rel="noreferrer">
            <span>Github</span>
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div
          className="contact-card email"
          onMouseOver={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card email active";
            }
          }}
          onMouseLeave={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card email deactive";
              setTimeout(() => {
                (e.target as Element).className = "contact-card email";
              }, 300);
            }
          }}>
          <a href="mailto:phamtienacu@gmail.com">
            <span>email</span>
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div
          className="contact-card resume"
          onMouseOver={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card resume active";
            }
          }}
          onMouseLeave={(e) => {
            if ((e.target as Element).className.includes("contact-card")) {
              (e.target as Element).className = "contact-card resume deactive";
              setTimeout(() => {
                (e.target as Element).className = "contact-card resume";
              }, 300);
            }
          }}>
          <a
            href="https://drive.google.com/file/d/1y12p2AyH98R9iG27x2ehbRa6VQe0HaIn/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            <span>resume</span>
            <i className="fa fa-file"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
