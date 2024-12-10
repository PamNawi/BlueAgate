import { QuartzComponent, QuartzComponentConstructor } from "../types"

const ScrollablePatterns: QuartzComponent = () => {
  const patterns = [
    "https://adriansblinkiecollection.neocities.org/stamps/j8.png",
    "https://adriansblinkiecollection.neocities.org/stamps/j20.gif",
    "https://adriansblinkiecollection.neocities.org/stamps/h18.gif",
    "https://adriansblinkiecollection.neocities.org/stamps/e39.png",
  ]
  const animationStyle = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `

  return (
    <>
      <style>{animationStyle}</style>
      <div style={wrapperStyle}>
        <div style={scrollerStyle}>
          {[...patterns, ...patterns].map((src, index) => (
            <img key={index} src={src} alt={`Pattern ${index + 1}`} style={imageStyle} />
          ))}
        </div>
      </div>
    </>
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
  animation: "scroll 10s linear infinite", // Animação aplicada diretamente ao contêiner
}

const imageStyle: React.CSSProperties = {
  height: "99px", // Altura fixa de 99px
  objectFit: "contain", // Para ajustar o conteúdo à área da imagem
  backgroundColor: "transparent", // Fundo transparente
}

export default (() => ScrollablePatterns) satisfies QuartzComponentConstructor
