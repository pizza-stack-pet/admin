import type { StorybookConfig } from "@storybook/react-webpack5";
import TSConfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx)",
    "../src/**/*.story.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  webpackFinal: (config) => {
    config.resolve!.plugins = [new TSConfigPathsPlugin()];

    return config;
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};

export default config;