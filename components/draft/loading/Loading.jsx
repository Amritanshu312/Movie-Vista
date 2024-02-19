import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circles}>
        <span className={styles.circle}></span>
        <span className={styles.circle1}></span>
        <span className={styles.circle2}></span>
        <span className={styles.circle3}></span>
        <span className={styles.circle4}></span>
      </div>
    </div>
  );
}

export default Loading;
