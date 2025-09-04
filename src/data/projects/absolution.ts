const nbImages = 12
const absolutionImages = Array.from({ length: nbImages }, (_, i) => ({
  src: `/projects/absolution/${i + 1}.jpg`,
  title: `Absolution screenshot ${i + 1}`,
}))

export default absolutionImages
