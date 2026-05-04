import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact - Capex",
  description: "Contact the Capex team for any inquiry or quote.",
};

export default function Page() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
