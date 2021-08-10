import Head from 'next/head';

import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import LayoutDetail from '@/components/global/LayoutDetail';
import DetailsContent from '@/components/parts/Detail/DetailsContent';

export default function TwRoom({ searchResult }) {
    const router = useRouter();
    // Destructure isi dari router.query
    const { location, startDate, endDate, guestNumber } = router.query;

    const formateStartDate = format(new Date(startDate), "dd MMMM yy");
    const formateEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formateStartDate} - ${formateEndDate}`;

    return (
        <>
            <Head>
                <title>Twill Apps - {location}</title>
            </Head>
            <LayoutDetail placeholder={`${location} | ${range} | ${guestNumber} tamu`}>
                <DetailsContent
                    location={location}
                    guestNumber={guestNumber}
                    startDate={formateStartDate}
                    endDate={formateEndDate}
                    data={searchResult}
                />
            </LayoutDetail>
        </>
    )
}

export async function getServerSideProps() {
    const searchResult = await fetch("https://jsonkeeper.com/b/EZTD").then(res => res.json());

    return {
        props: {
            searchResult,
        }
    }
}