// app/layout.tsx
"use client";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
// import "./globals.css";

// import ReactQueryProvider from "@/providers/ReactQueryProvider"; // ← import here
// import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "./style/theme";
import ReactQueryProvider from "../providers/ReactQueryProviders";
import ClientLayout from "@/components/headerLayout/clientLayout";
import { ModalsProvider } from "@mantine/modals";

// export const metadata = {
//   title: "Abhaye",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            
          <Notifications position="top-center" />
          <ReactQueryProvider>
            <ClientLayout>{children}</ClientLayout>
          </ReactQueryProvider>
          </ModalsProvider>
        </MantineProvider>
        
      </body>
    </html>
  );
}
