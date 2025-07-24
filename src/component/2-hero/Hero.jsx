import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { motion } from "motion/react";
import { scale } from "motion";
function Hero() {
    return (
        <section className="hero flex">
        <div className="left-section">
            <div className="parent-avatar flex">
            <motion.img
            initial = {{transform: "scale(0)"}}
            animate = {{transform: "scale(1.1)"}}
            transition = {{damping: 5, type: "spring", stiffness: 100}}
            src="/me.png" className="avatar" alt="" />

            <div className="icon-verified"></div>
            </div>
            <motion.h1 
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{duration: 3}}
            className="title">
                Software Engineer, web developer
            </motion.h1>
            <p className="sub-title">
            I'm Esber Daboura, a software Engineer and frontend developer for
            websites, graduate from Homs university
            </p>

            <div className="all-icons flex">
                <div className="icon icon-twitter"></div>
                <div className="icon icon-instagram"></div>
                <div className="icon icon-github"></div>
                <div className="icon icon-linkedin"></div>
            </div>
        </div>

        <div className="right-section animation">
        <Lottie
            className="dev-animation"
            loop={true}
            style={{ height: 355 }}
            animationData={devAnimation}
        />
        </div>
        </section>
    );
}

export default Hero;
