import React, { useEffect, useRef } from "react";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Navbar = ({ onClose }) => {
  const navbarRef = useRef(null);
  const menuItemsRef = useRef([]);
  const footerLinksRef = useRef([]);
  const overlayRef = useRef(null);

  const links = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/kesavanperumalswamy/",
    },
    { name: "Github", url: "https://github.com/Kesavan-PerumalSwamy" },
    { name: "Medium", url: "https://medium.com/@kesavanWebDev" },
    { name: "Whatsapp", url: "https://wa.me/6374906481" },
  ];

  const handleMouseover = () => {
    const ball = document.querySelector(".ball");
    if (ball) ball.style.display = "block";
  };

  const handleMouseOut = () => {
    const ball = document.querySelector(".ball");
    if (ball) ball.style.display = "none";
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const menuItems = menuItemsRef.current;
    const footerLinks = footerLinksRef.current;
    const overlay = overlayRef.current;

   
    gsap.set(overlay, { opacity: 0.2 });

   
    gsap.fromTo(
      navbar,
      { x: "-100%" },
      { x: "0%", duration: 1, ease: "power3.inOut" }
    );

    gsap.fromTo(
      overlay,
      { opacity: 0.2 },
      { opacity: 1, duration: 1, ease: "power3.inOut", delay: 0.2 }
    );

    gsap.fromTo(
      menuItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.8,
      }
    );

    gsap.fromTo(
      footerLinks,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.8,
      }
    );

    return () => {
      
      gsap.to(navbar, {
        x: "-100%",
        duration: 0.8,
        ease: "power3.inOut",
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });
    };
  }, []);

  const handleClose = () => {
    const navbar = navbarRef.current;
    const overlay = overlayRef.current;

    gsap.to(navbar, {
      x: "-100%",
      duration: 1,
      ease: "power3.inOut",
    });

    gsap.to(overlay, {
      opacity: 0,
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: () => {
        onClose();
      },
    });
  };

  return (
    <div className="relative">
      {/* White overlay layer */}
      <div ref={overlayRef} className="fixed inset-0 bg-Secondary z-10"></div>

      <div
        ref={navbarRef}
        className="bg-black h-screen w-full overflow-hidden flex flex-col justify-between fixed z-20"
      >
        <div className="flex justify-between px-4 items-center pt-5 ">
          <div className="group font-walbaum relative flex justify-center overflow-hidden cursor-pointer md:text-2xl text-sm leading-6">
            <NavLink
              onClick={handleClose}
              to="/"
              className={({ isActive }) =>
                `inline-block relative p-1 transition duration-500 text-white ease-out group-hover:-translate-y-[120%] ${
                  isActive ? "text-[#FF7F3E]" : ""
                }`
              }
            >
              K7's Portfolio
            </NavLink>
            <NavLink
              onClick={handleClose}
              to="/"
              className="absolute left-0 text-[#FF7F3E] translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0"
            >
              K7's Portfolio
            </NavLink>
          </div>
          <div className="md:pr-32 pr-12">
            <a
              onMouseOver={handleMouseover}
              onMouseOut={handleMouseOut}
              target="_blank"
              href="mailto:contact@kesavanperumalsamy.in"
              className="font-cerotta text-sm tracking-widest text-white"
            >
              Email me
            </a>
          </div>
          <button onClick={handleClose}>
            <TfiClose className="text-white hover:text-Secondary transform hover:rotate-180 md:text-3xl transition-transform duration-300" />
          </button>
        </div>

        <div className="flex-grow flex items-center justify-center">
          <div className="grid gap-4 text-center">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
            ].map(({ name, path }, index) => (
              <div
                className="relative group"
                key={name}
                ref={(el) => (menuItemsRef.current[index] = el)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `cursor-pointer menu-item text-${
                      isActive ? "Secondary" : "white"
                    } relative md:text-[80px] text-[50px] will-change-transform hover:tracking-[0.075rem] font-cerotta`
                  }
                >
                  {name}
                </NavLink>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-Secondary transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-700 ease-out group-hover:w-full z-10"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex font-altone-oblique z-50 space-x-2 md:px-20 px-5 items-center justify-between py-4">
          {links.map((link, index) => (
            <p key={link.name}>
              <a
                ref={(el) => (footerLinksRef.current[index] = el)}
                href={link.url}
                className="text-white hover:text-[#FF7F3E]"
              >
                {link.name}
              </a>
            </p>
          ))}
          <a 
            ref={(el) => (footerLinksRef.current[links.length] = el)} 
            href="../assets/images/KESAVAN-PERUMALSAMY-RESUME.pdf" 
            download="K7_Resume.pdf" 
            className="text-white md:flex hidden hover:text-[#FF7F3E]"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
