import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const  Navbar =  () => {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5 ">
      <Link href="/" className="font-bold text-3xl text-color">
        Timothy&apos;s<span className="text-color">Blog </span>
      </Link>
      <Link href="https://timothyitayi.com" className="font-bold text-3xl text-color">
        Portfolio 
      </Link>

      <ModeToggle />
    </nav>
  );
}
export default Navbar