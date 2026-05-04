import PageBanner from "@/components/PageBanner";
import IntroBlock from "@/components/IntroBlock";
import Services from "@/components/Services";
import News from "@/components/News";
import InfoPictos from "@/components/InfoPictos";

export const metadata = {
  title: "CAPEX - Buying group for the export",
  description:
    "Capex is a buying group dedicated to the export of food and non-food products, supplying customers worldwide.",
};

export default function HomePageEN() {
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
