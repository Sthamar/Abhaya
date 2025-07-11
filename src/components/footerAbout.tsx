import { Center, rem, Stack, Text } from "@mantine/core";

export default function FooterAbout(){
    return(
        <Stack gap={rem(16)} w={'40%'}>
            <Center>
            <Text fw={500} c={'brand'}>About Us</Text>
            </Center>
            <Text c={'dimmed'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, impedit velit mollitia sunt natus porro eum, autem assumenda atque, sit dolor. Velit maiores cum ducimus distinctio, quibusdam veniam sequi at provident optio natus eligendi voluptatem nisi? Id ipsum blanditiis nobis?
            </Text>
        </Stack>
    )
}