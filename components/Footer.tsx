export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-black/8 py-8 px-6 text-center">
      <p className="text-xs text-[#a09db8]">
        © {new Date().getFullYear()} {name} · Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
