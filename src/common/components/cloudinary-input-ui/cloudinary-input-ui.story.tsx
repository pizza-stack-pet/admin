import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "react-admin";

import { CloudinaryInputUI } from "./cloudinary-input-ui.component";
import { theme } from "@/core/theme";

const meta = {
  title: "Common/Cloudinary Input",
  component: CloudinaryInputUI,
} satisfies Meta<typeof CloudinaryInputUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    label: "Головне зображення",
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <CloudinaryInputUI {...args} />
    </ThemeProvider>
  ),
};
