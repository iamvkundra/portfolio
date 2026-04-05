import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          {/* CONTACT INFO */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:mkmayank39@gmail.com" data-cursor="disable">
                mkmayank39@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+919709874208" data-cursor="disable">
                +91 9709874208
              </a>
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/iamvkundra"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/mkmayank39/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://leetcode.com/mkmayank39"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>

          {/* FOOTER */}
          <div className="contact-box">
            <h2>
              Designed & Built by <br /> <span>Mayank Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;