import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const TamaNotchi: QuartzComponent  = () => {
  return (
    <div style={scrollerStyle}>
		<a href="https://tamanotchi.world/17821c">
			<img src="https://tamanotchi.world/i2/17821" alt="It's tamaNOTchi! Click to feed!" style={imageStyle} />
		</a>
		<a href="https://tamanotchi.world/17822c">
			<img src="https://tamanotchi.world/i2/17822" alt="It's tamaNOTchi! Click to feed!" style={imageStyle} />
		</a>
    </div>
  )
}


// Estilos
const wrapperStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "transparent", // Fundo transparente
}

const scrollerStyle: React.CSSProperties = {
  display: "flex",
  //animation: "scroll 10s linear infinite", // Animação aplicada diretamente ao contêiner
}

const imageStyle: React.CSSProperties = {
  height: "64px", // Altura fixa
  objectFit: "contain", // Para ajustar o conteúdo à área da imagem
  backgroundColor: "transparent", // Fundo transparente
}

export default (() => TamaNotchi) satisfies QuartzComponentConstructor
