import documentsLocal from "../../mocks/saberMas.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./Documents.module.css";
import { useState } from "react";

function ListOfDocuments({ documents }) {

  const [isOpen, setIsOpen] = useState(false);
  const [idSubtitle, setIdSubtitle] = useState("");

  const handleClick = (v) => {
    setIdSubtitle(v);
    setIsOpen(!isOpen);
  };
  console.log(documents);
  return "hay documentos";
}

function NoDocumentsResults() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [idSubtitle, setIdSubtitle] = useState("");

  const handleClick = (v) => {
    setIdSubtitle(v);
    setIsOpen(!isOpen);
  };
  
  return documentsLocal.embeddings.map((info, i) => (
    <div key={i} className={styles.dataContainer}>
      <button
        className={styles.dataWrapped}
        onClick={() => handleClick(info.id)}
      >
        <div className={styles.dataSubtitle}>
          <BsThreeDotsVertical className={styles.iconDot} />
          <h2 className={styles.subTitles}>{info.title}</h2>
        </div>
      </button>
      {isOpen && info.id == idSubtitle && (
        <div className={styles.dataUsedWrapped}>
          <p>{info.content}</p>
          <span>Similitud: {info.similarity}</span>
        </div>
      )}
    </div>
  ));
}

export function Documents({ documents }) {
  const hasDocuments = Object.keys(documents || "")?.length > 0;

  return hasDocuments ? (
    <ListOfDocuments documents={documents} />
  ) : (
    <NoDocumentsResults />
  );
}
