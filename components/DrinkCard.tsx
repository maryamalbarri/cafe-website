type DrinkCardProps = {
    image: string;
    name: string;
    price: string;
};

export default function DrinkCard({
    image,
    name,
    price,
}: DrinkCardProps) {
    return(
        <div className="rounded-3xl border border-black/10 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(243,211,107,0.35)]">
            <div className="relative flex h-64 items-center justify-center">
                <img 
                src={image}
                alt={name}
                className="h-full w-auto object-contain"
                />
            </div>
            
            <div className="mt-4 flex items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-bold">{name}</h3>
            <p className="text-sm font-medium opacity-60">{price}</p>
            </div>
            
        </div>
    );
}