import styles from "@/app/page.module.css";
import { ReactNode } from "react";

interface Wrapper3dTilesProps {
  children: ReactNode;
}

export const Wrapper3dTiles: React.FC<Wrapper3dTilesProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.black} />
      <div className={styles.shadow} />
      <div className={styles.tile}>{children}</div>
    </div>
  );
};
