import { QuartzComponent, QuartzComponentProps } from "../types"

export default (({ children }: QuartzComponentProps) => {
  return (
    <div class="ld-box">
      <div class="ld-content">
        {children}
      </div>
    </div>
  )
}) satisfies QuartzComponent