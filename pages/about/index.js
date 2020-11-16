import Router from 'next/router';

import Button from '../../components/Button';
import MainLayout from '../../components/MainLayout';

const About = () => {
    const goHome = () => {
        Router.push('/');
    };

    return (
        <MainLayout headTitleContent="About page" headMetaDescription="about description">
            <h1>About page!</h1>
            <Button handler={goHome} text="Go home page" />
        </MainLayout>
    )
};

export default About;