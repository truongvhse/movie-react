import styles from './page.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
}
export default function Index({ children }:LayoutProps) {
  return (
    <div className={styles.page}>
      <Header />
      { children }
      <Footer />
    </div>
  );
}
