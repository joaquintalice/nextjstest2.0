import Link from "next/link";

export default function MainLayout() {
    return (
        <nav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/stock'>stock</Link></li>
                <li><Link href='/ventas'>ventas</Link></li>
                <li><Link href='/vender'>vender</Link></li>
                <li><Link href='/posts'>Posts</Link></li>
            </ul>
        </nav>
    )
}
