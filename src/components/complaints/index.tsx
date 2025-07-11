import {  Center, rem, Stack, Title } from "@mantine/core";
import ComplaintFields from "./complaintFields";

interface ComplaintProps{
    title: string;

}

export default function Complaint({title}:ComplaintProps){
    return(
        <Stack gap={rem(16)} w={'75%'}>
            <Center>
            <Title order={1} c={'brand'}>{title}</Title>
            </Center>
            <ComplaintFields/>
            <ComplaintFields/>
            <ComplaintFields/>
        </Stack>
    )
}