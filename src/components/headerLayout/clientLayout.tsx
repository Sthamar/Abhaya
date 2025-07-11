"use client";

import { Container, rem, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";
import LayoutHeaderWrapper from "./layoutHeaderWrapper";
import Footer from "../footer";

export default function ClientLayout({ children }: { children: ReactNode }) {

  const theme = useMantineTheme();

  return (
    <>
    <LayoutHeaderWrapper />
      <Container size="xxl" py={rem(80)} bg={theme.other.background}>
        {children}
      </Container>
      <Footer/>
    </>
  );
}
