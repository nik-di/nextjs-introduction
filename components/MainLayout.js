import Link from 'next/link';

import HtmlHead from '../components/HtmlHead';
import style from '../style/nav.module.css';

const MainLayout = ({ children, headTitleContent, headMetaDescription }) => {
    return (
        <>
            <HtmlHead titleContent={headTitleContent} headDescription={headMetaDescription} />
            <header>
                <nav>
                    <ul className={style.navigation}>
                        <li>
                            <Link href="/">
                                <a style={{ color: "#fff", textDecoration: "none" }}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a style={{ color: "#fff", textDecoration: "none" }}>About page</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/page">
                                <a style={{ color: "#fff", textDecoration: "none" }}>Page info</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
        </>
    )
};

export default MainLayout;
