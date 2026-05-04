export default function PageBanner() {
  return (
    <div
      className="w-full h-[280px] md:h-[420px] bg-cover bg-center mt-[100px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2000&q=80')",
      }}
      aria-hidden="true"
    />
  );
}
