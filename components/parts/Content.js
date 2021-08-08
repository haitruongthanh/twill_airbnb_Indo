import SmallCard from '@/components/parts/SmallCard';
import MediumCard from '@/components/parts/MediumCard';
import LargeCard from '@/components/parts/LargeCard';

import Illustration from 'public/Illustration-olimpiade.webp';

export default function Content({ dataExplore, dataCarousel }) {
    const classButtonCardOne = `
    bg-white text-gray-700
    `
    const classButtonCardTwo = `
    bg-gray-700 text-white
    `

    return (
        <article className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="py-6">
                <h2 className="text-3xl font-bold pb-5 text-gray-700 select-none">Jelajahi Sekitar</h2>

                <div className="content-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {dataExplore?.map(({ img, location, distance }) => (
                        <SmallCard
                            key={`index-${location}`}
                            img={img}
                            location={location}
                            distance={distance}
                        />
                    ))}
                </div>
            </section>

            <section className="py-16 relative cursor-pointer">
                <LargeCard
                    img={Illustration}
                    title="Pengalaman Atlet Olimpiade & Paralimpiade"
                    description="Daftar keinginan terbaik dari Twill."
                    buttonText="Telusuri sekarang"
                    classButton={classButtonCardOne}
                />
            </section>

            <section className="py-6">
                <h2 className="text-3xl font-bold pb-5 text-gray-700 select-none">Tinggal di mana saja</h2>
                <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
                    {dataCarousel?.map(({ img, title }) => (
                        <MediumCard
                            key={`index-${title}`}
                            img={img}
                            title={title}
                        />
                    ))}
                </div>
            </section>

            <section className="py-12 relative cursor-pointer">
                <LargeCard
                    img="https://links.papareact.com/4cj"
                    title="Temukan Pengalaman Terbaikmu"
                    description="Daftar keinginan terbaik dari Twill."
                    buttonText="Temukan inspirasi"
                    classButton={classButtonCardTwo}
                />
            </section>
        </article>
    )
}