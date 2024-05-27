import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" bg-white">
      <div className="w-full p-4">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2024{" "}
          <Link href="/">
            Zoren™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
