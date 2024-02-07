import Link from "next/link";

export default function NavButton({ pageInfo }) {
  return (
    <Link className="w-28" href={pageInfo.endPoint}>
      {pageInfo.name}
    </Link>
  );
}
