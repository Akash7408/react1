import React from "react";
import me from "../assets/a.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Akash Verma</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="http://https://www.youtube.com/@StudywithAkku/featured" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/___akash___74" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/akash7408" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
