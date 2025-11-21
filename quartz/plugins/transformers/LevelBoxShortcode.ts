import { QuartzTransformerPlugin } from "../../types"

export const LevelBoxShortcode = (): QuartzTransformerPlugin => {
  return {
    name: "LevelBoxShortcode",

    markdownPlugins() {
      return [{
        // isso evita erro de preset vazio
        // e processa o shortcode no markdown
        plugin: () => {
          return (tree) => {
            visit(tree, "text", (node) => {
              const value = node.value

              if (!value.includes(":::level")) return

              const replaced = value.replace(
                /:::level\s+([\s\S]*?):::/g,
                (_, content) => {
                  return `<div class="level-box">${content}</div>`
                }
              )

              node.value = replaced
            })
          }
        },
        options: {}
      }]
    },
  }
}