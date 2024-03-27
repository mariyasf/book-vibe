
import FavListCard from '../../Components/FavListCard/FavListCard';
import useLocalStorage from '../../Hooks/useLocalStorage';

const FavList = () => {
    const { localData } = useLocalStorage({ dataFormat: "AddToCard" });

    return (
        <div className="mt-10 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                localData.map(data =>
                    <FavListCard
                        key={data.bookId}
                        data={data} />
                )
            }
        </div>
    );
};

export default FavList;