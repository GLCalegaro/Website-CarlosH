import Biography from "../features/Home/components/Biography/Biography";
import Clients from "../features/Home/components/Clients/Clients";
import HeroBanner from "../features/Home/components/HeroBanner/HeroBanner"
import Contacts from "../features/Home/components/HeroForm/Contacts";
import Speeches from "../features/Home/components/Speeches/Speeches";
import Stats from "../features/Home/components/Stats/Stats";
import Testimonials from "../features/Home/components/Testimonials/Testimonials";
import DefaultLayout from "../features/Layouts/DefaultLayout/DefaultLayout"
import Transition from "../features/common/Hooks/Transitions/Transition";

export default function Home({conteudo}) {
  // console.log(conteudo);
  return (
  <DefaultLayout>
    <Transition />
    <HeroBanner />
    <Stats />
    <Biography />
    <Speeches />
    <Testimonials />
    <Clients conteudo={conteudo}/>
    <Contacts />
  </DefaultLayout>
  )
}

export async function getStaticProps(){
  const {content} = require("../features/data/content")
  return {
    props: {conteudo: content}
  }
}
