import { TileImage } from "@/app/components/tile-image";
import { Group } from "@mantine/core";

export const createHand = (text: string[]) => {
  console.log("🦆 ~ createHand ~ text:", text);

  const mapped = text.map((each) => {
    console.log("🦆 ~ mapped ~ eachs:", each);
    const Component = <TileImage name={each} />;
    return Component || null; // Render the component if it exists
  });
  console.log("🦆 ~ createHand ~ mapped:", mapped);
  return <Group gap={"0.1rem"}>{mapped}</Group>;
};
