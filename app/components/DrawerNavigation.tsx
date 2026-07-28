"use client";

import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import { Navigation } from "./Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, X } from "@mui/icons-material";

export const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <Button
          onClick={openDrawer}
          className="hamburgerMenuButton"
          aria-label="Open navigation drawer"
        >
          <MenuIcon />
        </Button>
      )}
      <Drawer
        open={isOpen}
        onClose={closeDrawer}
        anchor="right"
        ModalProps={{ disableScrollLock: true }}
        slotProps={{
          paper: {
            sx: { width: 480 },
          },
        }}
      >
        <Button
          onClick={closeDrawer}
          className="closeButton"
          aria-label="Close navigation drawer"
        >
          <Close />
        </Button>
        <Navigation className="drawerNavigation" />
      </Drawer>
    </>
  );
};
