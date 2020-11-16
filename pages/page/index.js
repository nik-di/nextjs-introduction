import Router from 'next/router';
import Link from 'next/link';

import MainLayout from '../../components/MainLayout';
import Button from '../../components/Button';

const Page = () => {
    const goHome = () => {
        Router.push('/');
    };

    return (
        <MainLayout headTitleContent="Page info" headMetaDescription="Page info description">
            <h1>This is page!</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/page/12">
                            <a>Go to 12 page id</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Button handler={goHome} text="Go home page" />
        </MainLayout>
    )
};

export default Page;