import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
	pageTitle: "🌱Blue Agate",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Libre Baskerville",
        body: "Muli",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#c0dae2",
          lightgray: "#e5e5e5",
          gray: "#2d2c38",
          darkgray: "#2d2c38",
          dark: "#2d2c38",
          secondary: "#000080",
          tertiary: "#0067a5",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2d2c38",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#7ba9fb",
          secondary: "#89cff0",
          tertiary: "#059de4",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
  Plugin.FrontMatter(),
  Plugin.CreatedModifiedDate({
    priority: ["frontmatter", "filesystem"],
  }),
  Plugin.SyntaxHighlighting({
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    keepBackground: false,
  }),
  Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
  Plugin.GitHubFlavoredMarkdown(),
  Plugin.TableOfContents(),
  Plugin.CrawlLinks({
    markdownLinkResolution: "shortest",
    filter: (page) => page.frontmatter?.draft !== true, // 👈 Esta linha é essencial
  }),
  Plugin.Description(),
  Plugin.Latex({ renderEngine: "katex" }),
],
filters: [
  Plugin.RemoveDrafts(),
],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
