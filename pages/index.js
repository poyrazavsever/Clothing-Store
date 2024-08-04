
// Pages
import Mobile from "@/Components/Mobile";
import Storelanding from "@/Components/StoreLanding/Storelanding";


export default function Home() {
  return (
    <div>
      <div className="lg:hidden block"> 
        <Mobile />
      </div>
      <div className="hidden lg:block">
        <Storelanding />
      </div>
    </div>
  );
}
