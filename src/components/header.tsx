import style from "@/components/header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={style["header-container"]}>
            <Link href={"/"}><div className={style["header-name"]}>Site Generation</div></Link>
            <ul className={style["header-items-list"]}>
                <li><Link href="/ssg"><div className={style["header-item"]}>SSG</div></Link></li>
                <li><Link href="/ssr"><div className={style["header-item"]}>SSR</div></Link></li>
                <li><Link href="/isr"><div className={style["header-item"]}>ISR</div></Link></li>
                <li><Link href="/csr"><div className={style["header-item"]}>CSR</div></Link></li>
            </ul>
        </div>
    );
}