import * as React from "react"
import Hero from "../components/hero"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Avaleht" />
    <Hero />
  </Layout>
)

export default IndexPage
