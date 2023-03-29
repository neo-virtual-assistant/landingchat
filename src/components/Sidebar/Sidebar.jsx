import styles from "./Sidebar.module.css";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const Sidebar = ({ setShowSidebar }) => {
  return (
    <aside className={styles.sidebarContainer}>
      <FaTimes
        className={styles.iconClose}
        onClick={() => setShowSidebar(false)}
      />
      <ul className={styles.sidebarMenu}>
        <Link href="/" legacyBehavior>
          <a
            className={styles.sidebarLink}
            onClick={() => setShowSidebar(false)}
          >
            Product
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className={styles.sidebarLink}
            onClick={() => setShowSidebar(false)}
          >
            Pricing
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className={styles.sidebarLink}
            onClick={() => setShowSidebar(false)}
          >
            Integrations
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className={styles.sidebarLink}
            onClick={() => setShowSidebar(false)}
          >
            Resources
          </a>
        </Link>
      </ul>
      <div className={styles.loginWrapped}>
        <button className={styles.login}>Login</button>
        <button className={styles.signUp}>Sign up</button>
      </div>
    </aside>
  );
};

export default Sidebar;
