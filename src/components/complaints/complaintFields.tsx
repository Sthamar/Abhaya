import {
  Anchor,
  Avatar,
  Card,
  Group,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";

export default function ComplaintFields() {
  const theme = useMantineTheme();
  return (
    <Card
      p={rem(15)}
      withBorder
      radius={"xl"}
      style={(theme) => ({
        borderColor: theme.colors.brand
          ? theme.colors.brand[6]
          : theme.colors.blue[6],
      })}
    >
      <Group>
        <Avatar />
        <Text c={"dimmed"}>Rabbit</Text>
      </Group>
      <Stack>
        <Text ml={rem(55)} c={"brand"} truncate>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis, quod veritatis. Aut ea necessitatibus, quaerat ipsam
          blanditiis labore nesciunt odio!
        </Text>
        <Group justify="flex-end">
        <Link href="/file_detail" passHref>
          <Anchor
          
            c={"dimmed"}
            style={{
              textDecoration: "none",
              transition: "color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = theme.other.navbar.icon;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'dimmed';
            }}
          >
            Read More
          </Anchor>
        </Link>
        </Group>
      </Stack>
    </Card>
  );
}
