import { useRouter } from 'next/dist/client/router';
import LayoutDetail from '@/components/global/LayoutDetail';
import DetailsContent from '@/components/parts/DetailsContent';
import { format } from 'date-fns';

export default function TwRoom() {
    const router = useRouter();
    // Destructure isi dari router.query
    const { location, startDate, endDate, guestNumber } = router.query;

    const formateStartDate = format(new Date(startDate), "dd MMMM yy");
    const formateEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formateStartDate} - ${formateEndDate}`;

    return (
        <LayoutDetail placeholder={`${location} | ${range} | ${guestNumber} tamu`}>
            <DetailsContent
                location={location}
                guestNumber={guestNumber}
                range={range}
            />
        </LayoutDetail>
    )
}