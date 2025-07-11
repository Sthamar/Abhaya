'use client';

import { Container, Title } from "@mantine/core";
import FileComplainForm from "./component/fileComplainForm";

export default function FileComplain(){
    return(
        <Container size={'xl'}>
            <Title ta={'center'}>
                File Your Complaint
            </Title>
            <FileComplainForm/>
        </Container>
    )
}