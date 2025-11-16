import Intro from "./intro";
import Header from "../globals/header";
import Footer from "../globals/footer";
import AboutBonzah from "./aboutBonzah";
import Members from "./members";
import ByTheNumbers from "./byTheNumbers";

export default function Page() {
  return (
    <div className="backgroundLighter">
        <Header />
        <section> <Intro /> </section>
        <section> <AboutBonzah /> </section>
        <section> <Members /> </section>
        <section> <ByTheNumbers /> </section>
        <Footer />
    </div>
  );
}