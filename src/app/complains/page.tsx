"use client";

import Complaint from "@/components/complaints";
import {  Center,   Grid,  Paper,  rem, Stack } from "@mantine/core";

export default function Complains() {
  return (
    <>
  <Grid gutter={0}>
        <Grid.Col span={8}>
          <Paper
            withBorder
            radius="md"
            style={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Center  p={rem(16)}>
              <Complaint title="All Complaint" />
            </Center>
          </Paper>
        </Grid.Col>
  
        <Grid.Col span={4}>
          <Paper
            withBorder
            radius="md"
            p="md"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Stack>
            <Center  p={rem(16)}>
                
              <Complaint title="Top Complaint" />
              
              
            </Center>
            <Center  p={rem(16)}>
                
              
              <Complaint title="Recent Complaint" />
              
            </Center>
            </Stack>
            
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
}
