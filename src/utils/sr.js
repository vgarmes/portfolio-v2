import ScrollReveal from "scrollreveal"

// during build the app is rendered on server and "window" is not available to ScrollReveal
const isSSR = typeof window === "undefined"
const sr = isSSR ? null : ScrollReveal()

export default sr
