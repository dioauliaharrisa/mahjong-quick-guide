// src/components/Layout.tsx
import React from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import styles from "./index.module.css"; // Create styles for the layout if needed
import { Anchor, Drawer } from "@mantine/core";
import { usePageCounter } from "@/zustand";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const shouldToggleDrawer = usePageCounter(
    (state) => state.shouldToggleDrawer
  );
  const toggleDrawer = usePageCounter((state) => state.toggleDrawer);

  return (
    <>
      <Drawer
        opened={shouldToggleDrawer}
        onClose={toggleDrawer}
        title="Table of contents"
        position="right"
      >
        <div className={styles.table_of_contents}>
          <Anchor
            href="https://dioauliaharrisa.github.io/mahjong-quick-guide/set"
            target="_blank"
          >
            Tenpai Hand
          </Anchor>
          <Anchor
            href="https://dioauliaharrisa.github.io/mahjong-quick-guide//"
            target="_blank"
          >
            Anchor component
          </Anchor>
          <Anchor
            href="https://dioauliaharrisa.github.io/mahjong-quick-guide//"
            target="_blank"
          >
            Anchor component
          </Anchor>
          <Anchor
            href="https://dioauliaharrisa.github.io/mahjong-quick-guide//"
            target="_blank"
          >
            Anchor component
          </Anchor>
          <Anchor
            href="https://dioauliaharrisa.github.io/mahjong-quick-guide//"
            target="_blank"
          >
            Anchor component
          </Anchor>
        </div>
      </Drawer>
      <div className={styles.page}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};
