import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Jobs />
      <Projects />
    </Layout>
  )
}
