import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/navbar";
import vector1 from "../assets/images/leaf.svg";
import vector2 from "../assets/images/greenleaf.svg";
import Arrow from "../assets/images/Arrow.svg";
import Diamondline from "../assets/images/DiamondLine.svg";
import Underline from "../assets/images/Underline.svg";
import line from "../assets/images/Lines.svg";
import jothi from "../assets/images/JothiPort.png";
import Intern from "../assets/images/Hompage.png";
import LyteDesign from "../assets/images/Logo.png";
import watch from "../assets/images/Watch.png";
import gsap from "gsap";
import "./Homepage.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { FaMedium } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import ResumeModal from "../components/ResumeModal";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const scrambleText = (element, finalText, duration = 0.005) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let iteration = 0;
  const originalText = finalText.split("");

  // Set the element's width and prevent text wrapping
  element.style.width = `${element.clientWidth}px`;
  element.style.display = "inline-block";
  element.style.whiteSpace = "nowrap"; // Prevent wrapping

  const scrambleInterval = setInterval(() => {
    const scrambledText = originalText
      .map((letter, index) => {
        if (index < iteration) {
          return finalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    // Only update the scrambled portion of the text
    element.innerHTML = `${finalText.substring(
      0,
      iteration
    )}<span>${scrambledText.substring(iteration)}</span>`;

    if (iteration >= finalText.length) {
      clearInterval(scrambleInterval);
      // Reset the width and display properties
      element.style.width = "auto";
      element.style.display = "inline";
      element.style.whiteSpace = "normal"; // Reset wrapping to normal
    }

    iteration += 1 / 3;
  }, duration * 200);
};

const HomePage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const vector1Ref = useRef(null);
  const vector2Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);


 const handleResumeClick = () => {
    if (isMobile) {
      // Trigger the download of the resume PDF on small screens
      const link = document.createElement("a");
      link.href = "../assets/images/KESAVAN-PERUMALSAMY-RESUME.pdf"; // Replace with the actual path to your resume PDF
      link.download = "K7-Resume.pdf";
      link.click();
    } else {
      // Open the resume modal on large screens
      setIsModalOpen(true);
    }
  };
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const messageSeen = localStorage.getItem("mobileMessageSeen");
    if (!messageSeen && isMobile) {
      setShowMessage(true);
    }
  }, [isMobile]);

  const handleContinueClick = () => {
    localStorage.setItem("mobileMessageSeen", "true");
    setShowMessage(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseover = () => {
    const ball = document.querySelector(".ball");
    const trail = document.querySelector(".mouse-trail");
    if (ball) ball.style.display = "block"; // Show the ball
    if (trail) trail.style.display = "none"; // Hide the trail
  };

  const handleMouseOut = () => {
    const ball = document.querySelector(".ball");
    const trail = document.querySelector(".mouse-trail");
    if (ball) ball.style.display = "none"; // Hide the ball
    if (trail) trail.style.display = "block"; // Show the trail
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    // Select all text elements
    gsap.utils.toArray("h1, p").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%", // Trigger when the element is 80% from the top of the viewport
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const textElement = textRef.current;
    const textElement1 = textRef1.current;
    const vector1Element = vector1Ref.current;
    const vector2Element = vector2Ref.current;

    scrambleText(textElement, "Kesavan Perumalsamy", 0.2);

    gsap.fromTo(
      vector2Element,
      { rotation: 0 },
      { rotation: 360, duration: 5, ease: "power3.out" }
    );

    gsap.fromTo(
      vector1Element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 1 }
    );

    gsap.fromTo(
      textElement,
      { y: 0 },
      {
        y: -250,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: textElement,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      textElement1,
      { y: 0 },
      {
        y: -100,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: textElement,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      vector2Element,
      { opacity: 10 },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: vector1Element,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Add mouse hover shake effect with increased speed and length
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth: screenWidth, innerHeight: screenHeight } = window;

      const offsetX = (clientX - screenWidth / 2) / 10; // Increase length
      const offsetY = (clientY - screenHeight / 2) / 10; // Increase length

      gsap.to(vector1Element, { x: offsetX, y: offsetY, duration: 0.1 }); // Increase speed
      gsap.to(vector2Element, { x: offsetX, y: offsetY, duration: 0.1 }); // Increase speed
    };

    const resetPosition = () => {
      gsap.to(vector1Element, { x: 0, y: 0, duration: 0.3 }); // Adjust bounce back speed
      gsap.to(vector2Element, { x: 0, y: 0, duration: 0.3 }); // Adjust bounce back speed
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetPosition);
    };
  }, []);

  const imageRef = useRef(null);

  const handleMouseOver = (e, imageData) => {
    const image = imageRef.current;
    image.setAttribute("src", imageData);
    image.style.display = "block";
    image.style.position = "fixed"; // Ensure the image is positioned relative to the viewport
    image.style.pointerEvents = "none"; // Prevent the image from interfering with mouse events
  };

  const handleMouseMove = (e) => {
    const image = imageRef.current;

    // Calculate the position to center the image around the cursor
    const offsetX = image.offsetWidth / 2;
    const offsetY = image.offsetHeight / 2;

    image.style.left = `${e.clientX - offsetX}px`;
    image.style.top = `${e.clientY - offsetY}px`;
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    image.style.display = "none";
  };

  return (
    <>
    {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-5 mx-5 rounded-xl text-center">
            <h2 className="text-lg font-bold text-gray-800">
              Better Viewing Experience on Desktop!
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              For the best experience with mouse events and hover animations,
              please visit my website on a laptop or desktop.
            </p>
            <button
              className="mt-4 bg-Secondary text-white px-4 py-2 rounded-lg"
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <div className="bg-Primary relative h-screen overflow-hidden">
        
        <div className="flex pt-5  w-full mx-auto z-40 font-walbaum justify-center">
          <Button onClick={toggleNavbar}>Menu</Button>
        </div>

        {isNavbarOpen && (
          <div className="absolute top-0 left-0 w-full h-full z-50">
            <Navbar onClose={closeNavbar} />
          </div>
        )}

        <div className="relative z-10 mx-auto h-fit flex items-center justify-center md:pt-[10%] lg:pt-[12%] sm:pt-[48%] pt-[40%]">
          <h2
            onMouseOver={handleMouseover}
            onMouseOut={handleMouseOut}
            ref={textRef}
            className="font-walbaum hover-text text-center text-Secondary md:text-[6rem] text-[3rem]"
          >
            Kesavan Perumalsamy
          </h2>
          <div
            ref={vector1Ref}
            className="absolute left-[16%] md:top-[50%] top-[50%]"
          >
            <img src={vector1} alt="Vector 1" className="w-10 md:w-26" />
          </div>
          <div
            ref={vector2Ref}
            className="absolute right-[16%] md:top-[80%] top-[75%]"
          >
            <img src={vector2} alt="Vector 2" className="w-10 md:w-26" />
          </div>
        </div>

        <div className="relative w-full mx-auto">
          <div className="absolute w-full flex justify-center overflow-hidden">
            <button className="bg-Purple flex gap-5 font-altone md:text-lg text-[14px] font-regular uppercase w-full py-3 whitespace-nowrap">
              <span className="text-black animate-scroll">
                MERN Web Developer & Designer &nbsp; MERN Web Developer &
                Designer &nbsp; MERN Web Developer & Designer &nbsp; MERN Web
                Developer & Designer &nbsp; MERN Web Developer & Designer &nbsp;
              </span>
              <span className="text-black animate-scroll">
                MERN Web Developer & Designer &nbsp; MERN Web Developer &
                Designer &nbsp; MERN Web Developer & Designer &nbsp; MERN Web
                Developer & Designer &nbsp; MERN Web Developer & Designer &nbsp;
              </span>
            </button>
          </div>
        </div>

        <div className="md:mt-[11%]   mt-[40%] w-[99%] absolute z-40">
          <div className="md:w-[50%] lg:w-[15%]  w-[90%] mx-auto text-center">
            <h2
              ref={textRef1}
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              className="font-walbaum"
            >
              a keen eye for creating user-friendly and visually appealing{" "}
              <span className="text-Secondary font-altone-oblique">
                websites
              </span>
            </h2>
          </div>
          <div className="flex justify-center pt-5 relative">
            <div className="rotate-[-30deg]">
              <img src={line} alt="" />
            </div>
            <a href="mailto:contact@kesavanperumalsamy.in" className="relative group cursor-pointer   z-50">
              <div  className="bg-Secondary pointer-events-auto text-white px-8 py-2 rounded-full">
                Get In Touch
              </div>
              <div className="absolute z-30 inset-0 flex items-center justify-center pointer-events-none  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  viewBox="0 0 100 100"
                  className="w-[150px] h-[150px] animate-rotate"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="transparent"
                  />
                  <text fill="#674188">
                    <textPath
                      onMouseOver={handleMouseover}
                      onMouseOut={handleMouseOut}
                      href="#circlePath"
                      startOffset="0%"
                    >
                      talk to you soon • talk to you soon • talk to you soon•
                    </textPath>
                  </text>
                </svg>
              </div>
            </a>
            <div className="rotate-[160deg]">
              <img src={line} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-Primary h-full ">
        <div className="md:pl-10 pt-10 md:block flex justify-center">
          <h1
            onMouseOver={handleMouseover}
            onMouseOut={handleMouseOut}
            className="font-altone w-fit text-3xl"
          >
            Creative <br />
            <span className="font-cerotta text-4xl text-Purple">Works</span>
          </h1>
        </div>
        <div className="md:pl-24 md:block flex justify-center py-5">
          <img src={Diamondline} alt="" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div>
            <p
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              className=" w-fit font-altone md:pl-0 pl-5"
            >
              work - <span className="font-walbaum font-bold">1</span>
            </p>
            <img
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              src={Underline}
              alt=""
              className="absolute md:pl-0 pl-5 top-2 -left-4 w-30 h-10"
            />
          </div>
          <div
            onMouseOver={(e) => handleMouseOver(e, Intern)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="py-10 overflow-hidden hover:px-20 transition-all duration-300  "
          >
            <div className="flex justify-between md:max-w-7xl  w-[95%] mx-auto">
              <h1
                onMouseOver={handleMouseover}
                onMouseOut={handleMouseOut}
                className="font-walbaum  text-Secondary md:text-5xl text-3xl"
              >
                TheIntern
              </h1>
              <button className="item">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
            <hr className="max-w-7xl hover:px-20 transition-all duration-500 mx-auto border-t border-black mt-16" />
          </div>
          <img
            ref={imageRef}
            src=""
            alt="Revealed"
            className="absolute w-fit z-[999] h-72  object-contain pointer-events-none"
            style={{ display: "none", position: "absolute" }}
          />
        </div>
        <div className="max-w-7xl mx-auto  relative">
          <div className="md:pl-0 pl-5">
            <p
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              className=" w-fit font-altone"
            >
              work - <span className="font-walbaum font-bold ">2</span>
            </p>
            <img
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              src={Underline}
              alt=""
              className="absolute top-2 md:pl-0 pl-5 -left-4 w-30 h-10"
            />
          </div>
          <div
            onMouseOver={(e) => handleMouseOver(e, LyteDesign)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="py-10 overflow-hidden hover:px-20 transition-all duration-300  "
          >
            <div className="flex justify-between md:max-w-7xl  w-[95%] mx-auto">
              <h1
                onMouseOver={handleMouseover}
                onMouseOut={handleMouseOut}
                className="hover-text font-walbaum text-Secondary md:text-5xl text-3xl"
              >
                Lyte Design
              </h1>
              <button className="item">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
            <hr className="max-w-7xl hover:px-20 transition-all duration-500 mx-auto border-t border-black mt-16" />
          </div>
          <img
            ref={imageRef}
            src=""
            alt="Revealed"
            className="absolute z-[999] w-fit h-72 object-contain pointer-events-none"
            style={{ display: "none", position: "absolute" }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div>
            <p
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              className=" w-fit font-altone md:pl-0 pl-5"
            >
              work - <span className="font-walbaum font-bold">3</span>
            </p>
            <img
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              src={Underline}
              alt=""
              className="absolute md:pl-0 pl-5 top-2 -left-4 w-30 h-10"
            />
          </div>
          <div
            onMouseOver={(e) => handleMouseOver(e, jothi)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="py-10 overflow-hidden hover:px-20 transition-all duration-300  "
          >
            <div className="flex justify-between md:max-w-7xl  w-[95%] mx-auto">
              <h1
                onMouseOver={handleMouseover}
                onMouseOut={handleMouseOut}
                className=" hover-text font-walbaum text-Secondary md:text-5xl text-3xl"
              >
                Jothivasan's Portfolio Design
              </h1>
              <button className="item">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
            <hr className="max-w-7xl hover:px-20 transition-all duration-500 mx-auto border-t border-black mt-16" />
          </div>
          <img
            ref={imageRef}
            src=""
            alt="Revealed"
            className="absolute z-[999] w-fit h-72 object-contain pointer-events-none"
            style={{ display: "none", position: "absolute" }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div>
            <p
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              className=" w-fit font-altone md:pl-0 pl-5"
            >
              work - <span className="font-walbaum font-bold">4</span>
            </p>
            <img
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              src={Underline}
              alt=""
              className="absolute md:pl-0 pl-5 top-2 -left-4 w-30 h-10"
            />
          </div>
          <div
            onMouseOver={(e) => handleMouseOver(e, watch)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="py-10 overflow-hidden hover:px-20 transition-all duration-300  "
          >
            <div className="flex justify-between md:max-w-7xl  w-[95%] mx-auto">
              <h1
                onMouseOver={handleMouseover}
                onMouseOut={handleMouseOut}
                className="font-walbaum text-Secondary md:text-5xl text-3xl"
              >
                Samsung Watch ReDesign
              </h1>
              <button className="item">
                <img src={Arrow} alt="Arrow" />
              </button>
            </div>
            <hr className="max-w-7xl hover:px-20 transition-all duration-500 mx-auto border-t border-black mt-16" />
          </div>
          <img
            ref={imageRef}
            src=""
            alt="Revealed"
            className="absolute z-[999] w-64 h-64 object-cover pointer-events-none"
            style={{ display: "none", position: "absolute" }}
          />
        </div>
        <div className="font-walbaum flex justify-center   pb-10">
          <p
            onMouseOver={handleMouseover}
            onMouseOut={handleMouseOut}
            className="w-fit"
          >
            More Project on the Way
          </p>
        </div>
      </div>
      <div className="bg-Lavendar">
        <div className="pt-40 pb-24">
          <ul className="lg:flex grid text-center font-cerotta cursor-pointer md:text-7xl text-5xl md:justify-around justify-center">
            <li className="relative hover:text-Secondary group">
              <Link to={"/projects"} onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </Link>
            </li>
            <li className="relative hover:text-Secondary group">
              <Link to={"/about"} onClick={() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>
                About
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </Link>
            </li>
            <li className="relative hover:text-Secondary group">
              <a href="mailto:contact@kesavanperumalsamy.in">
                Email me
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </a>
            </li>
          </ul>
          <div className="pt-16 flex justify-center">
            <button
              onClick={handleResumeClick}
              className="md:w-1/6 px-4 bg-Secondary flex items-center justify-center gap-2 border-2 font-cerotta hover:bg-transparent hover:border-2 border-Secondary py-2 rounded-3xl text-white hover:text-Secondary"
            >
              Resume <IoOpenOutline />
            </button>
          </div>
        </div>

        <div>
          <div>
            <ul className="flex justify-center gap-5 text-3xl pb-3">
            <li onMouseOver={handleMouseover} onMouseOut={handleMouseOut}>
                <a href="https://www.linkedin.com/in/kesavanperumalswamy/">
                  <FaLinkedin />
                </a>
              </li>
              <li onMouseOver={handleMouseover} onMouseOut={handleMouseOut}>
                <a href="https://github.com/Kesavan-PerumalSwamy">
                  <FaGithub />
                </a>
              </li>
              <li onMouseOver={handleMouseover} onMouseOut={handleMouseOut}>
                <a href="https://medium.com/@kesavanWebDev">
                  <FaMedium />
                </a>
              </li>
              <li onMouseOver={handleMouseover} onMouseOut={handleMouseOut}>
                <a href="https://wa.me/6374906481">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
            <h2
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              target="_blank"
              className="flex text-center md:text-sm text-[13px] justify-center font-walbaum"
            >
              © 2024 Kesavan Perumalsamy. All Rights Reserved.
            </h2>
          </div>
        </div>
        {!isMobile && isModalOpen && (
        <ResumeModal isOpen={isModalOpen} onClose={closeModal} />
      )}
      </div>

      <style jsx>{`
        .animate-rotate {
          animation: rotate 5s linear infinite;
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default HomePage;
