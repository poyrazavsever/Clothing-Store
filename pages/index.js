
// Pages
import Mobile from "@/Components/Mobile";
import Storelanding from "@/Components/StoreLanding/Storelanding";


export default function Home() {
  return (
    <div>
      <Mobile />
      <div className="hidden lg:block">
        <Storelanding />
      </div>
    </div>
  );
}
