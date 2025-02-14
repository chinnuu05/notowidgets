import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { FloatingFeedbackWidget } from "./components/FloatingFeedbackWidget";

export default function App() {

  return (
    <MantineProvider theme={theme}>

      <div>

        {/* <FloatingFeedbackWidget/> */}

        Test

        <div dangerouslySetInnerHTML={{
          __html: `
            <script src="../dist/notosdk.js"></script>
            <script>
              Notofox("initialize_widget", {
                project: "test-project",
                defaultTheme: "light",
                locale: "en",
              });
            </script>
          `
        }} />
      </div>

    </MantineProvider>
  )
}
