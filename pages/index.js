import { useRef } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Proyects from "../components/Proyects";
import SocialMedia from "../components/SocialMedia";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Home() {

  const landingRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const socialRef = useRef();
  const contactRef = useRef();

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
      <Header goToComponent={scrollToContent} />

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
