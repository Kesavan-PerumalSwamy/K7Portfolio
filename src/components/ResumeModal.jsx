import React from "react";
import { TfiClose } from "react-icons/tfi";
import Modal from "react-modal";
import shastra from "../assets/images/Shastra.pdf";
import slashmark from "../assets/images/Slashmark.pdf";
import Resume from "../assets/images/KESAVAN-PERUMALSAMY-RESUME.pdf";


Modal.setAppElement("#root");

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Resume Modal"
      className="bg-white w-[75%] h-[95%] uppercase  p-6 rounded-2xl overflow-y-auto   mx-auto my-10"
      overlayClassName="fixed w  z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center"
    >
      <div className="flex mt-2 mb-4  justify-between items-center ">
        <h2 className="text-xl pl-2 font-semibold font-cerotta text-gray-800 ">
          My Resume
        </h2>
        <div className="flex justify-end">
          <div className="">
            <a
              href={Resume}
              download="K7_Resume.pdf"
              className="  text-Secondary font-altone relative group w-fit  font-bold pb-2 rounded-lg mr-10"
            >
              Download Resume
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
            </a>
          </div>
          <button onClick={onClose} className="pr-3">
            <TfiClose className="text-Secondary hover:text-[#F5004F] transform hover:rotate-180  md:text-2xl transition-transform duration-300" />
          </button>
        </div>
      </div>
      <hr className="border border-Secondary mb-6  mx-auto" />
      <div className="resume-content ">
        <div className="">
          <div>
            <h1 className="font-OpenSans font-normal text-4xl uppercase text-center">
              <span className="font-extralight">Kesavan</span> Perumalsamy
            </h1>
            <h1 className="font-OpenSans text-xl pt-1 text-center text-gray-600">
              MERN Developer & Designer
            </h1>
            <div className="flex  items-center pt-2 justify-center">
              <a
                href="https://kesavanperumalsamy.in"
                className="font-OpenSans hover:text-blue-500 flex justify-center "
              >
                KesavanPerumalsamy.in |{" "}
              </a>
              <a
                href="mailto:contact@kesavanperumalsamy.in"
                className="font-OpenSans hover:text-blue-500 flex justify-center"
              >
                &nbsp;contact@kesavanperumalsamy.in |
              </a>
              <p className="font-OpenSans">&nbsp; 6374906481</p>
            </div>
            <hr className="w-[90%] mx-auto border-black my-4" />
            <div className="w-[90%] gap-14  mx-auto flex ">
              <div className="w-[30%] ">
                <h1 className=" font-thin text-3xl text-gray-500 uppercase">
                  Education
                </h1>
                <h2 className="font-bold font-OpenSans pt-3 text-xl">
                  Adhiparasakthi College of Arts and Science
                </h2>
                <h2 className="font-semibold font-OpenSans pt-1 text-gray-700 text-lg">
                  Bachelor of Computer Applications |{" "}
                  <span className="font-normal text-gray-500 text-sm">
                    {" "}
                    Nov 2021 - June 2024
                  </span>
                </h2>
                <p className="pt-2 font-OpenSans font-light">
                  <span className="font-medium">Relevant Coursework:</span>{" "}
                  Database Management • Operating Systems • Data Structures and
                  Algorithms • C++ • C • Java • Computer Architecture
                </p>
                <p className="pt-1  font-OpenSans font-light">
                  <span className="font-normal">CGPA:</span> 7.7/10
                </p>
                <h2 className="font-bold font-OpenSans pt-3 text-xl">
                  Aim Matriculation Hr Sec School
                </h2>
                <h2 className="font-semibold font-OpenSans pt-1 text-gray-700 text-lg">
                  12th Standard |{" "}
                  <span className="font-normal text-gray-500 text-sm">
                    {" "}
                    March 2020
                  </span>
                </h2>
                <h2 className="font-bold font-OpenSans pt-3 text-xl">
                  Aim Matriculation Hr Sec School
                </h2>
                <h2 className="font-semibold font-OpenSans pt-1 text-gray-700 text-lg">
                  10th Standard |{" "}
                  <span className="font-normal text-gray-500 text-sm">
                    {" "}
                    March 2018
                  </span>
                </h2>
                <h1 className=" font-thin text-3xl text-gray-500 pt-3">
                  LINKS
                </h1>
                <p className="font-OpenSans font-normal text-gray-900 pt-1">
                  <span className="font-light text-gray-600">LinkedIn:// </span>
                  <a
                    href="https://www.linkedin.com/in/kesavanperumalswamy/"
                    className="hover:text-blue-500"
                  >
                    kesavanperumalswamy
                  </a>
                </p>
                <p className="font-OpenSans font-normal text-gray-900 pt-1">
                  <span className="font-light text-gray-600">Github:// </span>
                  <a
                    href="https://github.com/Kesavan-PerumalSwamy"
                    className="hover:text-blue-500"
                  >
                    Kesavan-PerumalSwamy
                  </a>
                </p>
                <p className="font-OpenSans font-normal text-gray-900 pt-1">
                  <span className="font-light  text-gray-600">Medium:// </span>
                  <a
                    href="https://medium.com/@kesavanWebDev"
                    className="hover:text-blue-500"
                  >
                    @kesavanWebDev
                  </a>
                </p>
                <h1 className=" font-thin text-3xl pt-3 text-gray-500 uppercase">
                  Technical Skills
                </h1>
                <p className="font-OpenSans font-semibold text-gray-500 pt-1">
                  over 4000 lines:
                </p>
                <p className="font-OpenSans font-light text-gray-900 pt-1">
                  <span className="font-bold text-gray-600">Frontend:</span>{" "}
                  HTML5 • CSS3 • JavaScript • React.js • React Router • Tailwind
                  CSS • Chakra UI
                </p>
                <p className="font-OpenSans font-light text-gray-900 pt-1">
                  <span className="font-bold text-gray-600">Backend:</span>{" "}
                  Node.js • Express.js • RESTful APIs
                </p>
                <p className="font-OpenSans font-light text-gray-900 pt-1">
                  <span className="font-bold text-gray-600">Database:</span>{" "}
                  MongoDB • Firebase
                </p>
                <p className="font-OpenSans font-light text-gray-900 pt-1">
                  <span className="font-bold text-gray-600">Design:</span> UI/UX
                  Design • Web Design • Prototyping • Adobe XD • Figma
                </p>
                <p className="font-OpenSans font-light text-gray-900 pt-1">
                  <span className="font-bold text-gray-600">Other:</span>{" "}
                  Payment Gateway Integration (Razorpay) • JWT Authentication •
                  Protected Routes
                </p>
              </div>
              <div className="w-[70%]">
                <h1 className=" font-thin text-gray-500 text-3xl uppercase">
                  Projects
                </h1>
                <h2 className="font-bold font-OpenSans pt-3 text-xl">
                  TheIntern – Virtual Internship Provider Website |{" "}
                  <a
                    href="http://www.theintern.online"
                    className="text-blue-500 font-normal text-base"
                  >
                    Live site
                  </a>
                </h2>
                <p className="pt-1 font-OpenSans font-semibold text-gray-600">
                  <span className="font-bold">Role:</span> MERN Stack Developer
                  & Web Designer
                </p>
                <h3 className="font-semibold font-OpenSans text-gray-500  text-sm">
                  May 2024 – July 2024{" "}
                </h3>
                <ul className="list-disc list-inside pt-3 font-OpenSans text-sm font-light">
                  <li className="  ">
                    Led the design and development using the MERN stack,
                    focusing on creating responsive UI/UX for seamless
                    cross-device experience.
                  </li>
                  <li className=" ">
                    Implemented React Router for efficient navigation and built
                    protected routes with JWT authentication for secure access
                    to private areas.
                  </li>
                  <li>
                    Integrated Razorpay payment gateway for secure and
                    user-friendly transactions.
                  </li>
                  <li>
                    Developed a private dashboard for interns to manage their
                    details, track progress, and access resources.
                  </li>
                </ul>
                <p className="pt-1 font-OpenSans text-base font-medium ">
                  Techologies:{" "}
                  <span className="font-normal text-gray-600 text-sm">
                    HTML • CSS • Javascript • TailwindCSS • React • Vite •
                    MongoDB • Express.js • Node.js • JWT • Firebase •
                    Framer-Motion • Pdf-lib • Nodemailer • Material-UI •
                    Razorpay Payment
                  </span>
                </p>

                <h2 className="font-bold font-OpenSans pt-3 text-xl">
                  Personal Portfolio Website |{" "}
                  <a
                    href="https://kesavanperumalsamy.in"
                    className="text-blue-500 font-normal text-base"
                  >
                    Live
                  </a>
                </h2>
                <p className="pt-1 font-OpenSans font-semibold text-gray-600">
                  <span className="font-bold">Role:</span> Developer & Designer
                </p>
                <h3 className="font-semibold font-OpenSans text-gray-500 text-sm">
                  March 2024 – Aug 2024
                </h3>
                <ul className="list-disc list-inside pt-3 font-OpenSans text-sm font-light">
                  <li>
                    Designed and built a portfolio website using React and
                    Tailwind CSS, showcasing projects and skills with a
                    responsive, visually appealing UI.
                  </li>
                  <li>
                    Integrated React Three Fiber to incorporate 3D elements,
                    boosting the site’s visual appeal.
                  </li>
                  <li>
                    Used GSAP and Framer Motion to create smooth animations,
                    enhancing the user experience.
                  </li>
                  <li>
                    Created prototypes and UI elements in Figma to maintain a
                    consistent design system.
                  </li>
                </ul>
                <p className="pt-1 font-OpenSans text-base font-medium">
                  Technologies:{" "}
                  <span className="font-normal text-gray-600 text-sm">
                    React • Tailwind CSS • Vite • React Three Fiber • GSAP •
                    Figma • Framer Motion • Google Fonts • React Modal •
                    Tailwind Scrollbar
                  </span>
                </p>

                <h2 className="font-bold font-OpenSans pt-3 text-xl">
                  LyteDesign – Web Design Agency |{" "}
                  <a href="#" className="text-blue-500 font-normal text-base">
                    In Progress
                  </a>
                </h2>
                <p className="pt-1 font-OpenSans font-semibold text-gray-600">
                  <span className="font-bold">Role:</span> Web Designer
                </p>
                <h3 className="font-semibold font-OpenSans text-gray-500  text-sm">
                  July 2024 – Present{" "}
                </h3>
                <ul className="list-disc list-inside pt-3 font-OpenSans text-sm font-light">
                  <li className="  ">
                    Spearheading the design phase for a web design agency site,
                    emphasizing brand identity and modern aesthetics.
                  </li>
                  <li className=" ">
                    Creating visually appealing, user-focused designs in Figma,
                    incorporating innovative trends and interactive elements.
                  </li>
                  <li>
                    Working closely with developers to ensure design feasibility
                    and a smooth transition from design to development.
                  </li>
                </ul>
                <p className="pt-1 font-OpenSans text-base font-medium ">
                  Techologies:{" "}
                  <span className="font-normal text-gray-600 text-sm">
                    Figma • Canva • Spline
                  </span>
                </p>
                <h1 className=" font-thin pt-3 text-3xl text-gray-500 uppercase">
                  Workshops & Internships
                </h1>
                <p className="pt-1 font-OpenSans text-base font-medium ">
                  Fullstack Development Workshop at IIT Madras:
                  <span className="font-normal text-gray-600 text-sm">
                    &nbsp;Participated in Shaastra 2024, gaining hands-on
                    experience in fullstack development.{" "}
                    <a
                      target="_blank"
                      href={shastra}
                      className="text-blue-500 "
                    >
                      &nbsp;Certificate
                    </a>
                  </span>
                </p>
                <p className="pt-1 font-OpenSans text-base font-medium ">
                  Fullstack Web Development Internship:
                  <span className="font-normal text-gray-600 text-sm">
                    &nbsp;Completed a virtual internship at Slashmark, working
                    as a fullstack web developer.{" "}
                    <a
                      target="_blank"
                      href={slashmark}
                      className="text-blue-500 "
                    >
                      &nbsp;Certificate
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResumeModal;
