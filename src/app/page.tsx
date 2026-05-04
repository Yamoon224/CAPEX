import PageBanner from "@/components/PageBanner";
import IntroBlock from "@/components/IntroBlock";
import Services from "@/components/Services";
import News from "@/components/News";
import InfoPictos from "@/components/InfoPictos";

export default function HomePage() {
  return (
    <div id="top">
      <PageBanner />
      <IntroBlock />
      <Services />
      <News />
      <InfoPictos />
    </div>
  );
}
