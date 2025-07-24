import { useEffect, useState } from "react";
import Header from "./component/1-header/Header";
import Hero from "./component/2-hero/Hero";
import Main from "./component/3-main/Main";
import Contact from "./component/4-contact/contact";
import Footer from "./component/5-footer/Footer";

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300) {
        setshowScrollBtn(true)
      } else{
        setshowScrollBtn(false)
      }
    });
  }, []);

  const [showScrollBtn, setshowScrollBtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />

      <a style={{opacity: showScrollBtn? 1: 0, transition: "0.5s"}} href="#up">
        <button className="icon-keyboard_arrow_up scroll2top"></button>
      </a>

    </div>
  )
}

export default App;
