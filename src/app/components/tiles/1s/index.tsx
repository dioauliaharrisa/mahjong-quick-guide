import Image from "next/image";
import { Wrapper3dTiles } from "../../3d-tiles-wrapper";

export const S1 = () => {
  return (
    <Wrapper3dTiles>
      <Image
        layout="responsive"
        src="/tiles/Sou1.png"
        alt="Next.js logo"
        objectFit="contain"
        width={38}
        height={60}
      />
    </Wrapper3dTiles>
  );
};
