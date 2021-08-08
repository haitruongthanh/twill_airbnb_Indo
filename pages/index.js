import Head from 'next/head';
import Layout from '@/components/global/Layout';

import Banner from '@/components/parts/Banner';
import Content from '@/components/parts/Content';

export default function Home({ dataExplore, dataCarousel }) {
    return (
        <>
            <Head>
                <title>Twill Apps</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <Layout>
                <Banner />
                <Content dataExplore={dataExplore} dataCarousel={dataCarousel} />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const dataExplore = await fetch('https://links.papareact.com/pyp')
        .then(res => res.json());

    const dataCarousel = await fetch('https://links.papareact.com/zp1')
        .then(res => res.json());

    return {
        props: {
            dataExplore,
            dataCarousel
        }
    }
}
