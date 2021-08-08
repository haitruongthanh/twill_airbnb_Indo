
export default function DetailsContent({ location, range, guestNumber }) {
    return (
        <article className="container mx-auto flex">
            <section className="py-4 flex-grow px-6">
                <p className="text-xs font-medium text-gray-600/70">
                    300+ Tempat menginap{" "}
                    <span className="font-semibold text-gray-700">{range}</span> untuk{" "}
                    <span className="font-semibold text-gray-700">{guestNumber}</span> tamu
                </p>
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 leading-relaxed mt-2 mb-6">Tempat menginap di {location}</h1>

                <div className="hidden mb-5 lg:inline-flex lg:space-x-2 max-w-2xl lg:flex-wrap whitespace-nowrap">
                    <span className="btn-tag">Fleksibilitas Pembatalan</span>
                    <span className="btn-tag">Jenis tempat</span>
                    <span className="btn-tag">Pemandangan indah</span>
                    <span className="btn-tag">Harga</span>
                    <span className="btn-tag">Kamar lengkap</span>
                    <span className="btn-tag">...</span>
                </div>
            </section>
        </article>
    )
}
