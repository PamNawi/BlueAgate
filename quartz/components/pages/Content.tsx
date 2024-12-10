import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>
    {content} 
    <p style={{ textAlign: 'center', opacity: 0.7 }}>｡･:*:･ﾟ★,｡･:*:･ﾟ☆ ｡･:*:･ﾟ★,｡･:*:･ﾟ☆ ｡･:*:</p>
    <p style={{ textAlign: 'center', opacity: 0.7 }}>
      <img src="https://i.imgur.com/eoMN47N.jpg" alt="Contact Info:" style={{ verticalAlign: 'middle', height: '20px', marginRight: '5px' }} />
      Contact Info:
    </p>
    <p style={{ textAlign: 'center', opacity: 0.7 }}>E-mail: pamabeltrani@gmail.com</p>
    <p style={{ textAlign: 'center', opacity: 0.7 }}>Discord: pamnawi</p>
  </article>
}
export default (() => Content) satisfies QuartzComponentConstructor
