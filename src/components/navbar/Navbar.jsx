"use client";
import Link from "next/link";
import React, { useEffect, useState} from "react";
import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import menu from "public/menu.png";
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from "next/navigation";

//  import { themeContext } from "../../context/ThemeContext";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "notes",
    url: "/notes",
  },
  {
    id: 3,
    title: "Events",
    url: "/events",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "auth",
    url: "/register",
  },
  {
    id: 6,
    title: "opportunities",
    url: "/internships",
  },
];

const Navbar = () => {
   const router = useRouter();
  const session = useSession();
  const [menuOpen, setMenuOpen]=useState(false)
  const [logg, setlogg] = useState(false)
  // const [isDark, setIsDark]=useState(false);
  // const theme = useContext(themeContext);
  // const dark = theme.state.dark;
  // const[ isDarkTheme, setIsDarkTheme] = useState(false) // Set to true or false based on your theme logic
   
  // const containerStyle = {
  //   backgroundColor: isDarkTheme ? "#fff" : "#111",
  // };
   const handlesignOut =()=>{
    localStorage.removeItem("token");
    setlogg(false);
    router.push("/")
   }

  useEffect(() => {
    const token = localStorage.getItem("token");
      if( token && token.length > 0){
        setlogg(true);
        router.push("/")
      }
      else{
        setlogg(false);
        router.push("/login")
      }


  }, [localStorage.getItem("token")])
  


  return (
    <div className={styles.container}  >
      <Link href="/" className={styles.logo}>
        IPSC
      </Link>
      {/* <DarkModeToggle /> */}
      {menuOpen && 
      <div className={styles.links} id={styles.menuSmall} >
        
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {logg && (
          <button className={styles.logout} onClick={()=>handlesignOut()}>
            Logout
          </button>
        )}
        
     </div>
}
      <div className={styles.links} id={styles.menuBig} >
        
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {logg && (
          <button className={styles.logout} onClick={()=>handlesignOut()}>
            Logout
          </button>
        )}
        
     </div>
      < AiOutlineMenu  className={styles.menu} onClick={()=>{
        setMenuOpen(!menuOpen);
      }
      } />
    </div>
  );
};

export default Navbar;