import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Cards = ({ 
  index, 
  title, 
  title1, 
  overview, 
  link, 
  linktext, 
  myrole, 
  keyfeatures, 
  technologies, 
  challenges 
}) => {
  const controls = useAnimation();
  const ref = useRef();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.1 // Lowered threshold to ensure visibility trigger on small screens
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      className="w-[95%] md:w-[90%] xl:w-[85%] mx-auto my-5 p-4 md:px-6 bg-white shadow-md rounded-3xl overflow-hidden"
    >
      <div className="w-full p-4">
        <p className="text-gray-600 font-serif">Project - <span className="font-semibold">{index}</span></p>
        <h1 className="text-xl pt-4 font-cerotta tracking-wider font-bold">{title}</h1>
        <h2 className="text-lg pt-2 font-altone">Title: <span className="text-blue-600">{title1}</span></h2>
        <p className="mt-1 text-sm text-black">
          Link to Project: 
          &nbsp; <a href={link} target="_blank" className="text-blue-500" rel="noopener noreferrer">{linktext}</a>
        </p>
      </div>
      <div className="w-full p-4">
        <div className="mb-4">
          <h2 className="text-md text-secondary font-altone font-bold">Overview:</h2>
          <p className="text-gray-700 md:pl-5 pt-1 font-altone">{overview}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-md text-secondary font-altone font-bold">My Role:</h2>
          <p className="text-gray-700 md:pl-5 pt-1 font-altone">{myrole}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-md text-secondary font-altone font-bold">Key Features:</h2>
          <ul className="list-disc font-altone md:pl-5 list-inside pt-1 text-gray-700">
            {keyfeatures.map((feature, i) => (
              <li key={i}><strong>{feature.title}:</strong> {feature.description}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-md text-secondary font-altone font-bold">Challenges & Solutions:</h2>
          <p className="text-gray-700 md:pl-5 pt-1 font-altone">{challenges}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-md text-secondary font-altone font-bold">Technologies Used:</h2>
          <ul className="list-disc md:pl-5 font-altone pt-1 list-inside text-gray-700">
            {technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
