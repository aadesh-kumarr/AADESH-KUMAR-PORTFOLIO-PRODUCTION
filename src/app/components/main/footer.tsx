import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-400  z-50 h-40">
      




        <div className=" text-center flex flex-col mx-auto">
        site-map</div>
        <div className="flex text-center justify-evenly mx-10  flex-row  mt-10 gap-2">
            <Link href="/" className="anim">
            Home
            </Link>
            <Link href="/projects" className="anim">
            Projects
            </Link>
            <Link href="/blogs" className="anim">
            Blogs
            </Link> 
            <Link href="/education" className="anim">
            Education
            </Link>
            </div>
    </footer>
  );
}
