import { About } from "@/components/about";
import { Areas } from "@/components/areas";
import { Contact } from "@/components/contact";
import { ContentHub } from "@/components/content-hub";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Procedures } from "@/components/procedures";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Procedures />
        <Journey />
        <ContentHub />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
