import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom"

function Footer() {
  return (
    <div className="md:container md:mx-auto mt-12 mb-32">

      <div>
        <FooterTop />
        <FooterBottom />
      </div>

    </div>
  )
}

export default Footer