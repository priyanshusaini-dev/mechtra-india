import React,{useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Hamburgur from "./Hamburgur"; 

const Navbar = ({navItem}) => {
  let panel = useRef()
const router = useRouter();
    function checkInput() {
      panel.current.classList.toggle(styles.panelClose)
      panel.current.classList.toggle(styles.panelOpen)
      document.getElementsByTagName("body")[0].classList.toggle("myblur")
    }
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" scroll={false}>
            <a>
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </a>
          </Link>
        </div>
        <div className={styles.upnav}>
            <ol className={styles.ol}>
          {navItem.map((e, i) => {
            return (
              <li key={i} >
                <Link href={e.link}>
                  <div className={router.pathname == e.link ? styles.active : styles.button }>
                  <a className={styles.link}><span className={router.pathname == e.link ? styles.activeTab : ""}>{e.title}</span> </a>
                </div>
                </Link>
              </li>
            );
          })}</ol>
        </div>
        <div className={styles.menu}>
            <Hamburgur checkInput={checkInput} />
            <aside className={styles.panelClose} ref={panel}>
              <nav>
                <ol>
                  {navItem.map((e,i)=>{
                    return(
                      <li key={i}>
                        <Link href={e.link}>
                            <a className={styles.link}><span className={router.pathname == e.link ? styles.activeTab : ""}>{e.title}</span> </a>
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
