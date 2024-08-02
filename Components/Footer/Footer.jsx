import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

function Footer() {
  return (
    <div className="relative md:container md:mx-auto mb-32 z-30">

      <div>
        <FooterTop />
        <FooterBottom />
      </div>

    </div>
  )
}

export default Footer