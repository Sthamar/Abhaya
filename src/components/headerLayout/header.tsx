"use client";
import {
  ActionIcon,
  Anchor,
  AppShellHeader,
  Box,
  Container,
  Flex,
  Group,
  rem,
  useMantineTheme,
} from "@mantine/core";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import { InputText } from "../form";

export default function Header() {
  const theme = useMantineTheme();

  return (
    <AppShellHeader>
      <Box
        style={{
          backgroundColor: theme.other.navbar.background,
          borderBottom: `2px solid ${theme.other.navbar.border}`,
        }}
        h={rem(60)}
      >
        <Container size="xxl">
          <Flex
            h="100%"
            w="100%"
            align="center"
            justify="space-between"
            px="md"
          >
            {/* Left Section */}
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Group gap="xs">
                <Image alt="MM" height={50} width={50} src={Logo} />
              </Group>
            </Link>

            {/* Mid Section */}
           <Link href="/file_complain" passHref>
                <Anchor
                  c={theme.other.navbar.text}
                  style={{
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.icon;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.text;
                  }}
                >
              
                  File Your Complaint
              
              </Anchor>
              </Link>

            {/* Right Section */}
            <Group gap={rem(16)}>
              <Group align="center" justify="center" mt={rem(10)}>
                <InputText id={""} />
                
              </Group>
              <ActionIcon variant="default">
                  <IconSearch />
                </ActionIcon>
              <Link href="/complains" passHref>
                <Anchor
                  c={theme.other.navbar.text}
                  style={{
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.icon;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.text;
                  }}
                >
                  Private
                </Anchor>
              </Link>
              <Link href="/complains" passHref>
                <Anchor
                  c={theme.other.navbar.text}
                  style={{
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.icon;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.text;
                  }}
                >
                  Public
                </Anchor>
              </Link>
              <Link href="/contact" passHref>
                <Anchor
                  c={theme.other.navbar.text}
                  style={{
                    textDecoration: "none",
                    transition: "color 0.2s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.icon;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = theme.other.navbar.text;
                  }}
                >
                  Contact Us
                </Anchor>
              </Link>
            </Group>
          </Flex>
        </Container>
      </Box>
    </AppShellHeader>
  );
}
