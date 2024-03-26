import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/localStorage";

const useLocalStorage = ({ dataFormat }) => {
    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        setLocalData(getFromLocalStorage(dataFormat));
    }, [dataFormat]);

    return { localData };
};

export default useLocalStorage;
