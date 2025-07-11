"use client";

import {
  AppShell,
  AppShellFooter,
  Center,
  Flex,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import FooterAbout from "./footerAbout";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterSocials from "./footerSocials";

export default function Footer() {
   const theme = useMantineTheme();
  return (
    <AppShell>
      <AppShellFooter
      style={{
        borderTop: `1px solid ${theme.colors.brand?.[6] || theme.primaryColor}`,
        position:'static'
      }}
    >
        <Stack gap={rem(8)}>
        <Flex gap={rem(24)} justify="space-between">
          <FooterAbout />
          <FooterQuickLinks />
          <FooterSocials />
         
        </Flex>
         <Center>
            <Text size="sm" c="dimmed">
              © 2025 Abhaya. All rights reserved.
            </Text>
          </Center>
          </Stack>
      </AppShellFooter>
    </AppShell>
  );
}
