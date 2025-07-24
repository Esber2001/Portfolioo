import { useState } from "react";
import "./main.css";
import myProjects from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
    const [currentActive, setcurrentActive] = useState("all");
    const [ arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);
        const newArr = myProjects.filter((item)=>{
            return item.category === buttonCategory;
        })
        setArr(newArr);
    }
    
    return (
        <main className="flex">
        <section className="left-main flex">
            <button
            onClick={() => {
                setcurrentActive("all");
                setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
            >
            All Projects
            </button>

            <button
            onClick={() => {
                handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
            >
            HTML & CSS
            </button>

            <button
            onClick={() => {
                handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
            >
            JavaScript
            </button>

            <button
                onClick={() => {
                handleClick("react");
                }}
                className={currentActive == "react" ? "active" : null}
            >
            React
            </button>
        </section>

            <section className="right-main flex">
                <AnimatePresence>
                {arr.map((item) => {
                    return (
                    <motion.article
                    // layout
                    // initial={{transform: "scale: 0"}}
                    // animate={{transform: "scale: 1"}}
                    // transition={{type: "spring", damping: 8, stiffness: 50}}
                    layout
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.5 }}
                    key={item.projectTitle}
                    className="card">

                        <img width={266} height={125} src={item.imgpath} alt="" />
                        <div style={{ width: "266px" }} className="box">
                        <h1 className="title">{item.projectTitle}</h1>

                        <p className="sub-title">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum, soluta beatae? Facere, ut quos? Perferendis
                            deserunt nesciunt sequi aspernatur quo quibusdam nisi omnis
                            eius neque, minima placeat unde porro atque.
                        </p>

                        <div style={{ width: "266px" }} className="flex icons">
                            <div style={{ gap: "11px" }} className="flex">
                            <div className="icon-link"></div>
                            <div className="icon-github"></div>
                            </div>
                            <a href="#" style={{ gap: "3px" }} className="flex">
                            more
                            <span
                                style={{ alignSelf: "end", fontSize: "11px" }}
                                className="icon-arrow-right"
                            ></span>
                            </a>
                        </div>
                        </div>
                    </motion.article>
                    );
                })}
                </AnimatePresence>
            </section>
        </main>
    );
}

export default Main;