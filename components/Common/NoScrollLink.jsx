import Link from "next/link";

export default function NoScrollLink({ href, passhref, children }) {
  return (
    <Link href={href} passHref={passhref} scroll={false}>
      {children}
    </Link>
  );
}
