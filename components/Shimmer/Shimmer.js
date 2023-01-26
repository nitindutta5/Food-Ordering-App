import styles from "../Restaurant/Restaurant.module.css";

const Shimmer = ({size}) => {
  let arr = new Array(size).fill("");
  return (
    <>
      {arr.map((id) => (
        <div key={`shimmer${id}`} className={styles.shimmer}></div>
      ))}
      <br/>
      Loading...
    </>
  );
};

export default Shimmer;
