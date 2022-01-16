import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => (
  <div className="hero">
    <div className="container">
      <div className="hero-title">
        <StaticImage
          src="../images/fish.png"
          width={300}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A fish"
          className="hero-img"
        />
        <h1>
          F<span>IS</span>H
        </h1>
      </div>
    </div>

    <h2>Beauty of the ocean</h2>
    <button className="btn">Explore</button>
  </div>
)

export default Hero
