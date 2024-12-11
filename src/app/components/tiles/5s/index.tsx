import Image from "next/image";
import styles from "@/app/page.module.css";
import { Wrapper3dTiles } from "../../3d-tiles-wrapper";

export const S5 = () => {
  return (
    <Wrapper3dTiles>
      <Image
        layout="responsive"
        className={styles.logo}
        src="/tiles/Sou5.png"
        alt="Next.js logo"
        objectFit="contain"
        width={38}
        height={60}
      />
    </Wrapper3dTiles>
  );
};
