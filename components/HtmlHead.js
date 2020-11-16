import Head from 'next/head';

const HtmlHead = ({ titleContent, headDescription }) => {
    return (
        <>
            <Head>
                <title>{titleContent}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="description" content={headDescription} />
            </Head>
        </>
    );
};

export default HtmlHead;