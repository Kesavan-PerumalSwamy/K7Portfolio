import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/navbar";
import Cards from "../components/Cards";
import { FaGithub, FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import ResumeModal from "../components/ResumeModal";

const ProjectsPage = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResumeClick = () => {
    if (isMobile) {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/file/d/136h_iHaOl4hbKARIxDLb7fW1Mvka9JUS/view?usp=sharing"; 
      link.download = "K7-Resume.pdf";
      link.click();
    } else {
      setIsModalOpen(true);
    }
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
  const closeModal = () => setIsModalOpen(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleMouseover = () => {
    const ball = document.querySelector(".ball");
    ball.style.display = "block";
  };

  const handleMouseOut = () => {
    const ball = document.querySelector(".ball");
    ball.style.display = "none";
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  return (
    <>
      <div className="bg-Primary relative h-full overflow-hidden">
        <div className="flex pt-5  w-full mx-auto z-40 font-walbaum justify-center">
          <Button onClick={toggleNavbar}>Menu</Button>
        </div>

        {isNavbarOpen && (
          <div className="absolute top-0 left-0 w-full h-full z-50">
            <Navbar onClose={closeNavbar} />
          </div>
        )}
        <div className="pt-5 relative max-w-[90rem] mx-auto">
          <h1
            onMouseOver={handleMouseover}
            onMouseOut={handleMouseOut}
            className="font-walbaum w-fit pb-2 text-black text-2xl"
          >
            Projects{" "}
          </h1>
          <span className="absolute left-0 bottom-0 w-[80px] h-[3px] bg-Secondary"></span>
          <span className="absolute left-0 bottom-0 w-[50px] h-[3px] bg-orange-500 z-10"></span>
        </div>

        <div>
          <div>
            <Cards
              index="1"
              title="TheIntern - Virtual Internship Platform"
              title1="TheIntern - Virtual Internship Platform"
              overview="TheIntern is a full-featured virtual internship platform designed to help students gain practical experience in their field of study. This platform allows users to seamlessly register, make payments, and access their personal dashboard, where they can track their internship progress and receive important updates."
              link="https://www.theintern.online/"
              linktext="https://www.theintern.online/"
              myrole="As both the developer and designer, I took charge of the entire project, from the backend infrastructure to the front-end user experience. I worked on creating a robust and scalable platform using the MERN stack, ensuring a smooth user experience while integrating crucial features like payment processing and email notifications."
              keyfeatures={[
                {
                  title: "Internship Registration",
                  description:
                    "A user-friendly registration process with integrated payment options through Razorpay.",
                },
                {
                  title: "User Authentication",
                  description:
                    "Secure login and protected routes, ensuring that only registered interns can access their dashboards.",
                },
                {
                  title: "Admin Dashboard",
                  description:
                    "Admins can manage student details, tasks, and communication effortlessly.",
                },
                {
                  title: "PDF Generation",
                  description:
                    "Automatically generates and emails offer letters to interns using pdf-lib and Nodemailer.",
                },
                {
                  title: "Responsive Design",
                  description:
                    "A fully responsive interface that works beautifully across all devices.",
                },
              ]}
              challenges="One of the biggest challenges was integrating payment processing securely and efficiently. I addressed this by implementing Razorpay’s API, ensuring smooth and secure transactions. Additionally, designing an intuitive user interface that could cater to both students and administrators required a delicate balance, which I achieved through iterative design and testing."
              technologies={[
                "React.js",
                "Bootstrap",
                "Vite",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Razorpay API",
                "Firebase Storage",
                "Nodemailer",
                "pdf-lib",
              ]}
            />
            <Cards
              index="2"
              title="Right Brains - Video Editing Course Selling Site"
              title1="RightBrains"
              overview="RightBrains is an online platform dedicated to selling high-quality video editing courses. The website provides a seamless user experience, allowing customers to register, purchase courses, and track their progress. It also features a robust admin panel for managing sales and customer details."
              link="#"
              linktext="Private Client Work"
              myrole="As a Full-Stack Developer, I was responsible for both the frontend and backend development, with a primary focus on backend implementation."
              keyfeatures={[
                {
                  title: "Customer Registration & Authentication",
                  description:
                    " Implemented secure OTP verification, password hashing with bcrypt, and JWT authentication for user security",
                },
                {
                  title: "Razorpay Payment Integration",
                  description:
                    "Integrated Razorpay for seamless course purchases, handling payment verification, success, and failure notifications via Nodemailer",
                },
                {
                  title: "Admin Panel & Sales Analytics",
                  description:
                    "Built an admin dashboard with login authentication, real-time sales analytics charts, and a customer management system",
                },
                {
                  title: "Optimized Frontend Performance",
                  description:
                    "Used Vite for fast builds, Redux for state management, and React Helmet for SEO optimization",
                },
                {
                  title: "Smooth Animations & UI Enhancements",
                  description:
                    "Integrated Framer Motion & GSAP for a dynamic user experience, along with Tailwind CSS for a modern UI",
                },
              ]}
              technologies={[
                "Frontend: React.js, Vite, Redux, Framer Motion, GSAP, React Helmet, Axios, Tailwind CSS",
                "Backend: Node.js, Express.js, MongoDB (Mongoose), Razorpay, Nodemailer, Bcrypt, JWT"
              ]}
              challenges="One of the key challenges was ensuring secure transactions and smooth user authentication. To address this, I implemented: JWT-based authentication for protected routes. Optimized API calls to enhance payment success rates. Performance tuning in animations and state management to ensure a lag-free experience"
            />
            <Cards
              index="3"
              title="My Portfolio - Showcasing My Creative Journey"
              title1="My Portfolio - Showcasing My Creative Journey"
              overview="This project is a meticulously crafted web design portfolio that reflects my journey as a web designer. The goal was to create a visually compelling and highly functional website to showcase my skills, projects, and design philosophy. Every element is designed to convey my creative vision while providing an intuitive user experience."
              link="https://kesavanperumalsamy.in"
              linktext="Kesavanperumalsamy.in"
              myrole="As the sole designer, I was responsible for every aspect of the site’s creation—from conceptualizing the layout to selecting color schemes and typography. I aimed to build a portfolio that not only presents my work but also serves as an example of my design capabilities."
              keyfeatures={[
                {
                  title: "Minimalist Design",
                  description:
                    "A clean, minimalist layout that emphasizes content and imagery without overwhelming the user.",
                },
                {
                  title: "Interactive Elements",
                  description:
                    "Subtle animations and interactive components that enhance user engagement without compromising on performance.",
                },
                {
                  title: "Responsive Design",
                  description:
                    "Fully optimized for mobile and tablet devices, ensuring the portfolio looks great on any screen size.",
                },
                {
                  title: "Project Showcase",
                  description:
                    "Detailed project pages with case studies, images, and insights into my design process.",
                },
              ]}
              challenges="One of the main challenges was balancing aesthetics with functionality. I wanted the portfolio to be visually striking but also easy to navigate. Through careful planning and user testing, I achieved a design that’s both beautiful and user-friendly, ensuring that the site’s performance remained top-notch across all devices."
              technologies={[
                "HTML",
                "CSS",
                "Javascript",
                "React.js",
                "Tailwind",
                "Vite",
                "Figma",
                "Gsap",
                "Framer motion",
                "Canva",
                "Google Fonts",
                "Font Awesome",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="bg-Lavendar">
        <div className="pt-40 pb-24">
          <ul className="lg:flex grid text-center font-cerotta cursor-pointer md:text-7xl text-5xl md:justify-around justify-center">
            <li className="relative hover:text-Secondary group">
              <Link
                to={"/"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </Link>
            </li>
            <li className="relative hover:text-Secondary group">
              <Link
                to={"/about"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </Link>
            </li>
            <li className="relative hover:text-Secondary group">
              <a href="mailto:contact@kesavanperumalsamy.in">
                Email
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
    </>
  );
};

export default ProjectsPage;
