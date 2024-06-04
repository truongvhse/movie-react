import styles from './page.module.css';
import Header from './header/header';

export default function Index() {
  return (
    <div className={styles.page}>
      <Header />{' '}
    </div>
  );
}
