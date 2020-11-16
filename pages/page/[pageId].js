import Router, { useRouter } from 'next/router';
import Button from '../../components/Button';
import MainLayout from '../../components/MainLayout';

const PageId = () => {
    const {
        query: { pageId }
    } = useRouter();
    const goHome = () => {
        Router.push('/');
    };

    return (
        <MainLayout headTitleContent={`Page id:${pageId}`} headMetaDescription={`Page id:${pageId} description`}>
            <h1>This page id: {pageId}</h1>
            <Button handler={goHome} text="Go home page" />
        </MainLayout>
    )
};

export default PageId;