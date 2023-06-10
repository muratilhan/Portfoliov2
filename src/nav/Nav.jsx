import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import photo from "../photos/murat-foto.jpg";

const Nav = () => {
  const [activeClass, setActiveClass] = useState("home");
  const [indicatorWidth, setİndicatorWidth] = useState(0);
  const [currentThreshold, setCurrentThreshold] = useState(0.9);


  const handleClick = (e, item, index) => {
    e.preventDefault();
    setActiveClass(item);
    setİndicatorWidth(index * 70);
    document.getElementById(item).scrollIntoView({
      behavior: "instant",
    });
  };


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    const boxElements = document.querySelectorAll(".deneme");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          console.log("entry: ",entry.target.id,"class: ", activeClass)
   
            boxElements.forEach((item, index) => {
              if (item === entry.target) {
                  setİndicatorWidth(index * 70);
                  setActiveClass(entry.target.id);
              }
            });
        });
      },
      { threshold: currentThreshold}
    );
    boxElements.forEach((card) => {
      observer.observe(card);
    });
  }, [windowWidth]);


  useEffect(()=>{
    console.log('width: ', windowWidth.current);
    if(windowWidth.current < 768){
        setCurrentThreshold(0.5)
    }
  },[window])

  return (
    <div className={isScrolled ? "nav scrolled" : "nav"}>
      <img src={photo} alt="" />
      <div className="nav-right">
        <ul>
          <li className={activeClass === "home" ? "list active" : "list"}>
            <a onClick={(e) => handleClick(e, "home", 0)} href="#home">
              <i class="fa-solid fa-house-chimney"></i>
            </a>
          </li>
          <li className={activeClass === "projects" ? "list active" : "list"}>
            <a onClick={(e) => handleClick(e, "projects", 1)} href="#projects">
              <i class="fa-solid fa-laptop-code"></i>
            </a>
          </li>
          <li className={activeClass === "skills" ? "list active" : "list"}>
            <a onClick={(e) => handleClick(e, "skills", 2)} href="#skills">
              <i class="fa-brands fa-react"></i>
            </a>
          </li>
          <li className={activeClass === "contact" ? "list active" : "list"}>
            <a onClick={(e) => handleClick(e, "contact", 3)} href="#contact">
              <i class="fa-solid fa-envelope-circle-check"></i>
            </a>
          </li>
          <div
            cite={activeClass}
            style={{ left: `${indicatorWidth}px` }}
            className="indicator"
            id="indicator"
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
