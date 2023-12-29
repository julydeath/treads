import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/">
        <Image src="/homelogo1.png" alt="logo" width={28} height={28} />
      </Link>
    </nav>
  );
}

export default Topbar;
