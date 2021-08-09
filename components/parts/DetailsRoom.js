import InfoCard from '@/components/parts/InfoCard';

export default function DetailsRoom({ data }) {
    // console.log(data)
    return (
        <section className="py-3 flex-grow px-4 lg:px-6">
            <div className="flex flex-col">
                {data?.map(({ img, description, location,
                    title, star, price, total, review }) => (
                    <InfoCard
                        key={`index-${title}`}
                        img={img}
                        location={location}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                        title={title}
                        review={review}
                    />
                ))}
            </div>
        </section>
    )
}
