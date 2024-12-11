"use client";

import { usePageCounter } from "@/zustand";
import { Box, Button } from "@mantine/core";
import { MapPageCounterExplanation } from "./MapPageCounterExplanation";

export const Footer = () => {
  const pageCounter = usePageCounter((state) => state.pageCounter);
  const increasePageCounter = usePageCounter(
    (state) => state.increasePageCounter
  );
  console.log(
    "🦆 ~ Footer ~ MapPageCounterExplanation:",
    MapPageCounterExplanation.set
  );
  return (
    <>
      <Box mx="auto" maw={400} c="blue.6" bg="#fff">
        {/* The objective of the game is to make an eligible winning hand. A winning
        hand consists of 4 sets and 1 pair (except in certain hand) Each turn,
        you will draw a tile and discard a tile until you complete a winning
        hand */}
        {MapPageCounterExplanation.set[pageCounter]}
      </Box>

      <Button
        variant="gradient"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        mx="auto"
        onClick={increasePageCounter}
      >
        Next
      </Button>
    </>
  );
};
