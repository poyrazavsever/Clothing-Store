import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"
import { Parallax } from "react-scroll-parallax"

function Footer() {
  return (
    <Parallax speed={5} className="md:container md:mx-auto mt-12 mb-32">

      <div>
        <FooterTop />
        <FooterBottom />
      </div>

    </Parallax>
  )
}

export default Footer