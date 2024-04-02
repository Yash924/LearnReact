import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = (Props) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonsName, index) => {
        return (
          <button key={index} className={styles.buttons}>
            <b>{buttonsName}</b>
          </button>
        );
      })}
    </div>
  );
};
export default ButtonsContainer;
