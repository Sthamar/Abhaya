import { Center, rem, Stack, Text } from "@mantine/core";

export default function FooterQuickLinks() {
  return (
    <Stack gap={rem(16)} w={'40%'}>
      <Center>
        <Text fw={600} c={'brand'}>Quick Links</Text>
      </Center>
      <Center>
        <Stack>
      <Text style={{textDecoration:'underline'}} c={'dimmed'}>
        Ride Sharing
      </Text>
      <Text style={{textDecoration:'underline'}} c={'dimmed'}>
        Public
      </Text>
      <Text style={{textDecoration:'underline'}} c={'dimmed'}>
        Contact Us
      </Text>
      </Stack>
      </Center>
    </Stack>
  );
}
