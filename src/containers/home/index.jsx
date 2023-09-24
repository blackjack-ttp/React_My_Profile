/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigeToContactMePage = () => {
    navigate("/contact");
  };
  return (
    <>
            <section id="home" className="home">
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm BlackJack-TTP
            <br />
            Web Developer
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translateY(0px)" }}
        >
          <div className="home__contact-me">
            <button onClick={handleNavigeToContactMePage}>Hire Me</button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;
