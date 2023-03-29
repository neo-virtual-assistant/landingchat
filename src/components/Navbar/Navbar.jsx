import { MdOutlineDarkMode } from "react-icons/md";
import styles from "./Navbar.module.css";
import { BiMenu } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <section className={styles.navbarContainer}>
      <div className={styles.logoAndListWrapped}>
        <span>Logo</span>
        <nav className={styles.listContainer}>
          <ul className={styles.listWrapped}>
            <li>Product</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Resources</li>
          </ul>
        </nav>
      </div>
      <div className={styles.utilsWrapped}>
        <div className={styles.darkAndBurgerWrapped}>
          <MdOutlineDarkMode className={styles.iconDark} />
          <BiMenu className={styles.mobileIcon} onClick={() => toggleSideBar()} />
        </div>
        <div className={styles.loginWrapped}>
          <button className={styles.login}>Login</button>
          <button className={styles.signUp}>Sign up</button>
        </div>
      </div>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} /> }
    </section>
  );
};

export default Navbar;
