
import Image from "next/image";
const imageLoader = require("../loader.js");
import React, { useRef,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Hamburgur from "./Hamburgur";

const Navbar = ({ navItem }) => {
  let panel = useRef()
  let menu = useRef()
  const router = useRouter();
  function checkInput() {
    panel.current.classList.toggle(styles.panelClose)
    panel.current.classList.toggle(styles.panelOpen)
    document.getElementsByTagName("body")[0].classList.toggle("myblur")
  }
  useEffect(() => {
    window.addEventListener("click", (e) => {
    if (panel.current!=null && panel.current.classList.contains(styles.panelOpen)&&!menu.current.contains(e.target)) {
      let myele = document.getElementById("check");
      myele.checked = !myele.checked;
      checkInput()
    }
  })
  }, [])
  
  
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" scroll={false}>
            <a>
              <Image  loader={imageLoader} src="/logo.png" alt="logo" width={50} height={50} />
            </a>
          </Link>
        </div>
        <div className={styles.upnav}>
          <ol className={styles.ol}>
            {navItem.map((e, i) => {
              return (
                <li key={i} >
                  <Link href={e.link}>
                    <div className={router.pathname == e.link ? styles.active : styles.button}>
                      <a className={styles.link}><span className={router.pathname == e.link ? styles.activeTab : ""}>{e.title}</span> </a>
                    </div>
                  </Link>
                </li>
              );
            })}</ol>
        </div>
        <div className={styles.menu} ref={menu}>
          <Hamburgur checkInput={checkInput} />
          <aside className={styles.panelClose} ref={panel}>
            <nav>
              <ol>
                {navItem.map((e, i) => {
                  return (
                    <li key={i}>
                      <Link href={e.link}>
                        <a onClick={()=>{let myele = document.getElementById("check"); myele.checked = !myele.checked; checkInput()}} className={styles.link}><span className={router.pathname == e.link ? styles.activeTab : ""}>{e.title}</span> </a>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
