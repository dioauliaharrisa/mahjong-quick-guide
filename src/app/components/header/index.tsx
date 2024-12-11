import { Box, Text } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <Box className={styles.header}>
      <div className={styles.z1}>

      </div>
      <div className={styles.title}>
        <Text>Game Objective</Text>
      </div>
      <div className={styles.drawer_button}>
        <IconMenu2 stroke={2} />
      </div>
    </Box>
  );
};
