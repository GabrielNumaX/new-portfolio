import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Proyects from "../components/Proyects";
import SocialMedia from "../components/SocialMedia";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Home() {

  const [nav, setNav] = useState('landing');

  const landingRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const socialRef = useRef();
  const contactRef = useRef();

  // window.scrollTo(0, this.myRef.current.offsetTop)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > landingRef.current.offsetTop) {

        setNav('landing')

        // return;
      }

      if (window.scrollY > skillsRef.current.offsetTop - 60) {

        setNav('skills');

        // return;
      }

      if (window.scrollY > projectRef.current.offsetTop - 60) {

        setNav('projects');

        // return;
      }

      if (window.scrollY > socialRef.current.offsetTop - 60) {

        setNav('social');

        // return;
      }

      if (window.scrollY > contactRef.current.offsetTop - 60) {

        setNav('contact')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const setScroll = (type) => {

    scrollToContent(type)

    setNav(type);
  }

  const scrollToContent = (element) => {

    switch (element) {
      case 'landing':
        landingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'social':
        socialRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }


  return (
    <>
      <Header goToComponent={scrollToContent} nav={nav} setScroll={setScroll} />

      <div ref={landingRef}>
        <Landing />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectRef}>
        <Proyects />
      </div>

      <div ref={socialRef}>
        <SocialMedia />
      </div>

      <div ref={contactRef}>
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}
