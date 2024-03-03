import styles from './Button.module.css';

function Button() {
  const handleClick = (e) => e.target.textContent = "Ouch! Stop it";
  const handleClick2 = (e) => e.target.textContent = "Click Me Papi!";

  return (
    <button className={styles.button} onClick={(e) => handleClick(e)} onMouseLeave={(e)=> handleClick2(e)}>Click me</button>
  );
}

export default Button