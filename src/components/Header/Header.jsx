import styles from "./Header.module.css";
import { IoMdChatboxes } from "react-icons/io";
import { Documents } from "../Documents/Documents";
import Chat from "../Chat/Chat";

const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.documentsContainer}>
        <h1 className={styles.mainTitle}>Documentos Usados</h1>
        <Documents />
        <div className={styles.infoWrapped}>
          <IoMdChatboxes className={styles.iconInfo} />
          <p>
            Consulta a nuestro asistente virtual para mas informacion sobre
            nuestra empresa.
          </p>
        </div>
      </div>
      <Chat />
    </section>
  );
};

export default Header;
