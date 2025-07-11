"use client";
import {
  Badge,
  Container,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function FileDetail() {
  return (
    <Container size={"xl"}>
      <Stack>
        <Title order={2} c={"dimmed"}>
          Where does it come from?
        </Title>
        <Divider c={"dimmed"} />
        <Group justify="flex-end">
          <Stack gap={rem(8)}>
            <Text c={"dimmed"}>Date: Apr 30, 2025</Text>
            <Text c={"dimmed"}>Location: Tinkune, Kathamandu</Text>
          </Stack>
        </Group>
        <Stack gap={rem(0)}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, nam perferendis. Obcaecati aliquid, mollitia illo
          totam quam officia ut delectus consequatur illum deserunt laudantium
          natus molestias libero magni? Labore commodi praesentium reprehenderit
          repellendus? Iusto placeat ratione similique itaque qui libero quasi
          delectus asperiores rerum. Et rerum maxime veniam in debitis?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, nam perferendis. Obcaecati aliquid, mollitia illo
          totam quam officia ut delectus consequatur illum deserunt laudantium
          natus molestias libero magni? Labore commodi praesentium reprehenderit
          repellendus? Iusto placeat ratione similique itaque qui libero quasi
          delectus asperiores rerum. Et rerum maxime veniam in debitis?
        </Text>
</Stack>
        <Group>
          <Badge variant="default">#Public</Badge>
          <Badge variant="default">#Public</Badge>
          <Badge variant="default">#Public</Badge>
        </Group>
      </Stack>
    </Container>
  );
}
