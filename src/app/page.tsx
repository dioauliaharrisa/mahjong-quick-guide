import styles from "./page.module.css";
import { createHand } from "./helpers/createHands";
import { Box, Button } from "@mantine/core";

export default function Home() {
  return (
    <div className={styles.page}>
      {createHand([
        "Z5",
        "Z5",
        "Z5",
        "Z6",
        "Z6",
        "Z6",
        "Z7",
        "Z7",
        "P1",
        "P1",
        "P2",
        "P2",
        "P3",
      ])}
      {createHand([
        "S2",
        "S3",
        "S4",
        "S4",
        "S5",
        "S6",
        "M6",
        "M7",
        "M8",
        "P1",
        "P1",
        "P2",
        "P3",
      ])}
      {createHand([
        "Z5",
        "Z5",
        "Z5",
        "Z6",
        "Z6",
        "Z6",
        "Z7",
        "Z7",
        "P1",
        "P1",
        "P2",
        "P2",
        "P3",
      ])}
      <Box mx="auto" maw={400} c="blue.6" bg="#fff">
        The objective of the game is to make an eligible winning hand. A winning
        hand consists of 4 sets and 1 pair (except in certain hand) Each turn,
        you will draw a tile and discard a tile until you complete a winning
        hand
      </Box>

      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
      >
        Next
      </Button>
    </div>
  );
}
