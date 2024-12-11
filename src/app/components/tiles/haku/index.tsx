import Image from "next/image";
import styles from "@/app/page.module.css";
import { Wrapper3dTiles } from "../../3d-tiles-wrapper";

export const Haku = () => {
  return (
    <Wrapper3dTiles>
      <Image
        layout="responsive"
        className={styles.logo}
        src="/tiles/Haku.png"
        alt="Next.js logo"
        // layout="fill"
        objectFit="contain"
        width={38}
        height={60}
      />
    </Wrapper3dTiles>
  );
};