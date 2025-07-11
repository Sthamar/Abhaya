import { Center, Group, rem, Stack, Text } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function FooterSocials() {
  return (
    <Stack gap={rem(16)} w={"40%"}>
      <Center>
        <Text fw={500} c={'brand'}>Socials</Text>
      </Center>
      <Center>
      <Group c={'dimmed'}>
        <IconBrandFacebook />
        <IconBrandLinkedin />
        <IconBrandInstagram />
      </Group>
      </Center>
    </Stack>
  );
}
