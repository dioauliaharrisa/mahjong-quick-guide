// src/components/Layout.tsx
import React from "react";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import styles from "./index.module.css"; // Create styles for the layout if needed

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
