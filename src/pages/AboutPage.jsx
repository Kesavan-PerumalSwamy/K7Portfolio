import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Navbar from "../components/navbar";
import { FaHeart } from "react-icons/fa";
import profile from "../assets/images/Profile.jpg";
import sprial from "../assets/images/sprial.svg";
import { IoOpenOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa6";

const greetings = {
  english: "Hello",
  tamil: "வணக்கம்",
  hindi: "नमस्ते",
  telugu: "హలో",
  bengali: "হ্যালো",
  marathi: "नमस्कार",
  gujarati: "હેલો",
  chinese: "你好", // Mandarin
  spanish: "Hola", // Spanish
  french: "Bonjour", // French
  arabic: "مرحبا", // Arabic
  russian: "Привет", // Russian
  japanese: "こんにちは", // Japanese
  german: "Hallo", // German
  korean: "안녕하세요", // Korean
  italian: "Ciao", // Italian
  portuguese: "Olá", // Portuguese
  swahili: "Habari", // Swahili
};

const AboutPage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const handleMouseover = () => {
    const ball = document.querySelector('.ball');
    ball.style.display = 'block';
  };

  const handleMouseOut = () => {
    const ball = document.querySelector('.ball');
    ball.style.display = 'none';
  };


  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    let timeout;
    const fullText = Object.values(greetings)[greetingIndex];

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        }, 150);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setGreetingIndex(
            (greetingIndex + 1) % Object.values(greetings).length
          );
          setDisplayedText("");
          setIsTyping(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, greetingIndex, isTyping]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <div className="bg-Primary relative h-full overflow-hidden">
        <div className="flex pt-5 w-full mx-auto z-40 font-walbaum justify-center">
          <Button onClick={toggleNavbar}>Menu</Button>
        </div>

        {isNavbarOpen && (
          <div className="absolute top-0 left-0 w-full h-full z-50">
            <Navbar onClose={closeNavbar} />
          </div>
        )}

        <div className="pt-5 relative max-w-[90rem] mx-auto">
          <h1 onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="font-walbaum w-fit pb-1 text-black text-2xl">About K7 </h1>
          <span className="absolute left-0 bottom-0 w-[90px] h-[3px] bg-Secondary"></span>
          <span className="absolute left-0 bottom-0 w-[70px] h-[3px] bg-orange-500 z-10"></span>
        </div>

        <div className="pt-10 max-w-[90rem] flex md:justify-start justify-center mx-auto">
          <h1 onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="font-walbaum flex  gap-3 items-center text-Secondary text-3xl font-bold">
            {displayedText} <FaHeart color="#FF7F3E" />
          </h1>
        </div>
        <div className="md:flex z-10">
          <div className="md:w-[60%]">
            <div className="pt-5 md:pl-10">
              <h1 onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="md:w-[50%] w-[90%] md:mx-0 mx-auto items-center font-altone tracking-wide text-gray-500 md:text-lg">
                I’m{" "}
                <span className="font-cerotta md:text-3xl text-lg text-Secondary font-bold">
                  Kesavan Perumalsamy
                </span>
                , your go-to MERN web wizard and design{" "}
                <span
                  className="md:inline-block  hidden absolute w-10 h-10 bg-cover"
                  style={{
                    backgroundImage: `url(${sprial})`,
                  }}
                >
                  {" "}
                </span>
                aficionado. I craft Websites that are as reliable as your
                morning{" "}
                <span className="bg-Purple font-cerotta py-1 px-2 text-Secondary">
                  coffee
                </span>{" "}
                and as sleek as a fresh pair of sneakers.
              </h1>
            </div>
            <div className="pt-10 flex justify-end">
              <h1 onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="md:w-[50%] w-[90%] md:mx-0 mx-auto font-altone tracking-wider text-gray-500 md:text-lg">
                My journey in web development started{" "}
                <span className="font-walbaum">1</span> year ago when I
                discovered my passion for coding and design. Over the years,
                I've honed my skills in the MERN stack—MongoDB, Express.js,
                React.js, and Node.js—and have become proficient in building
                scalable, dynamic web applications. My design background allows
                me to approach development with a unique perspective, ensuring
                that every project I work on is both functional and
                aesthetically pleasing.
              </h1>
            </div>
          </div>
          <div
            ref={ref}
            className={`md:w-[30%] pt-14 mx-auto transform transition-transform duration-[1500ms] ${
              inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <img
              src={profile}
              alt=""
              className="rounded-3xl border-[10px] shadow-2xl shadow-Secondary border-Secondary"
            />
          </div>
        </div>
        <div className="w-fit mx-auto">
          <h1 onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="font-walbaum flex justify-center  pt-40">
            For more information about my background and experience, please
            refer to my resume.
          </h1>
        </div>
        <div className="flex justify-center py-5 pb-10">
          <a
            href="" target="_blank"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-Secondary rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-Purple rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-white rounded-xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative flex items-center gap-2 font-cerotta w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-Secondary">
              Resume <IoOpenOutline size={23} className="pb-1" />
            </span>
          </a>
        </div>
      </div>
      <div className="bg-Lavendar ">
        <div className="py-40">
          <ul className="lg:flex grid text-center font-cerotta cursor-pointer md:text-7xl text-5xl md:justify-around justify-center">
            
            <li className="relative hover:text-Secondary group">
              <Link to={"/projects"}>
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </Link>
            </li>
            <li className="relative hover:text-Secondary group">
              <Link to={"/"}>
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </Link>
            </li>
            <li className="relative hover:text-Secondary group">
              <a href="mailto:contact@kesavanperumalsamy.in" target="_blank">
                Email me
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </a>
            </li>
          </ul>
        <div className="pt-16 flex justify-center"><button target="_blank" className="md:w-1/6 px-4 bg-Secondary flex items-center justify-center gap-2 border-2 font-cerotta hover:bg-transparent hover:border-2 border-Secondary py-2 rounded-3xl text-white hover:text-Secondary">Resume <IoOpenOutline/></button></div>
        </div>
        <div>
          <div>
            <ul onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="flex  justify-center gap-5 text-3xl pb-3">
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaMedium />
              </li>
              <li>
                <FaGithub />
              </li> 
              <li>
                <FaWhatsapp />
              </li>
            </ul>
            <p onMouseOver={handleMouseover} onMouseOut={handleMouseOut} className="flex  text-center md:text-sm text-[13px] justify-center font-walbaum">
              © 2024 Kesavan Perumalsamy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;