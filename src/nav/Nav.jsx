import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import logo from '../photos/favicon.png'


const Nav = () => {

  const [activeClass, setActiveClass] = useState("home");
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [currentThreshold, setCurrentThreshold] = useState(0.3);
  const [isScrolled, setIsScrolled] = useState(false);
  const scroll = useRef(false);

  const handleClick = (e, item, index) => {
    e.preventDefault();
    setActiveClass(item);
    setIndicatorWidth(index * 70);
    scroll.current=true;
    document.getElementById(item).scrollIntoView({
      behavior: "smooth",
    })
    setTimeout(()=>{
      scroll.current=false;
      console.log("scrolled")
    },600)

  };


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
              boxElements.forEach((item, index) => {
                  if ( entry.isIntersecting && item === entry.target) {
                    setIndicatorWidth(prev => !scroll.current ? index * 70 : prev);
                    setActiveClass( prev => !scroll.current ? entry.target.id : prev);
                  }
              });
          });
        },
        {  threshold:currentThreshold }
      );

      boxElements.forEach((card) => {
        observer.observe(card);
      });
  }, []);

  useEffect(()=>{
    if(windowWidth.current < 768){
        setCurrentThreshold(0.5)
    }
  },[windowWidth])

  const data = [
    {
      title:"home",
      icon:<i class="fa-solid fa-house-chimney"></i>
    },
    {
      title:"projects",
      icon:<i class="fa-solid fa-laptop-code"></i>
    },
    {
      title:"skills",
      icon:<i class="fa-brands fa-react"></i>
    },
    {
      title:"contact",
      icon:<i class="fa-solid fa-envelope-circle-check"></i>
    },
  ]

  return (
    <div className={isScrolled ? "nav scrolled" : "nav"}>
      <img src={logo} alt="" />
      <div className="nav-right">
        <ul>
          { data.map((item, index) => (
              <li className={activeClass === item.title ? "list active" : "list"}>
                <a onClick={(e) => handleClick(e, item.title, index)} href={`#${item.title}`}>
                  {item.icon}
                </a>
            </li>
          ))}
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
