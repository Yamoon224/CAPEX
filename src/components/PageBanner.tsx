export default function PageBanner() {
  return (
    <div
      className="w-full h-[280px] md:h-[420px] bg-cover bg-center mt-[100px]"
      style={{
        backgroundImage: "url('/hero/capex-warehouse.jpg')",
      }}
      aria-hidden="true"
    />
  );
}
