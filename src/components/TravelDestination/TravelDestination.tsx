interface Props {
    title: string;
    imgSrc: string;
}

const TravelDestination = ({ title, imgSrc }: Props) => {
    return (
        <div className="border-2 rounded-md border-slate-300">
            <h3 className="font-semibold text-xl text-center py-2">{title}</h3>
            <div>
                <img
                    src={imgSrc}
                    alt="Travel Photo"
                    className="max-h-80 object-cover w-full"
                />
            </div>
        </div>
    );
};

export default TravelDestination;
