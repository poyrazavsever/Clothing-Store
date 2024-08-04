import ReactIcon from "../ReactIcon"

function FooterTop() {
  return (
    <div className="flex justify-center items-center py-8 mobile:hidden">

      <div className="flex items-center gap-10">
        <ReactIcon iconType="bi" iconName="BiLogoVisa" iconColor="text-neutral-400" classname="text-6xl"/>
        <ReactIcon iconType="bi" iconName="BiLogoPaypal" iconColor="text-neutral-400" classname="text-6xl"/>
        <ReactIcon iconType="si" iconName="SiApplepay" iconColor="text-neutral-400" classname="text-6xl"/>
        <ReactIcon iconType="fa" iconName="FaGooglePay" iconColor="text-neutral-400" classname="text-6xl"/>
        <ReactIcon iconType="fa" iconName="FaAmazonPay" iconColor="text-neutral-400" classname="text-6xl"/>
        <ReactIcon iconType="fa" iconName="FaCcMastercard" iconColor="text-neutral-400" classname="text-6xl"/>
      </div>

    </div>
  )
}

export default FooterTop