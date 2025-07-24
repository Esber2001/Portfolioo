import { useEffect, useState } from "react";
import "./header.css";

function Header() {
    const [showModal, setShowModal] = useState(false);
    const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark");
    useEffect(()=>{
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    return (
        <header className="flex">
        <button onClick={()=>{
            setShowModal(true);
        }}className="menu icon-menu" />
        {/* this div only for making the nav be in the center  */}
        <div></div>
        <nav>
            <ul className="flex">
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Articles</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Speaking</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
            </ul>
        </nav>
        <button className="mode" onClick={() =>{
            localStorage.setItem("currentMode", theme === "dark"? "light": "dark");
            settheme(localStorage.getItem("currentMode"));
        }}>
            
            {theme === "dark" ?(<span className="icon-moon-o"></span>):(<span className="icon-sun"></span>)}
        </button>

        {showModal && (
            <div className="fixed">
            <ul className="modal">
                <li>
                    < button className="icon-close" onClick={()=>{
                        setShowModal(false);
                    }} />
                </li>
                <li>
                <a href="">About</a>
                </li>
                <li>
                <a href="">Articles</a>
                </li>
                <li>
                <a href="">Speaking</a>
                </li>
                <li>
                <a href="">Projects</a>
                </li>
                <li>
                <a href="">Contact</a>
                </li>
            </ul>
            </div>
        )}
        </header>
    );
    }

export default Header;
