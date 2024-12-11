import Image from "next/image";
import { Wrapper3dTiles } from "../3d-tiles-wrapper";

export const TileImage = ({ name }: { name: string }) => {
  return (
    <Wrapper3dTiles>
      <Image
        layout="responsive"
        src={`/tiles/${name}.png`}
        alt="Next.js logo"
        objectFit="contain"
        width={38}
        height={60}
      />
    </Wrapper3dTiles>
  );
};
