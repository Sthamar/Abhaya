"use client";

import dynamic from "next/dynamic";
import { Center, Grid, Paper, rem } from "@mantine/core";
import Complaint from "@/components/complaints";

// ✅ Load LeafletHeatmap ONLY on client side
const LeafletHeatmap = dynamic(() => import("@/components/heatMap"), {
  ssr: false,
});

export default function Home() {
  return (
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
          <LeafletHeatmap />
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
          <Center  p={rem(16)}>
            <Complaint title="Top Complaint" />
          </Center>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
