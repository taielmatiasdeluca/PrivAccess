import { useState, useEffect } from "react";
import useApi from "./useApi";
import { useMainContext } from "../context/MainContext";

const useNeightbourhood = () => {
    const { setNeightbourhood, neightbourhood } = useMainContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    

    const { api } = useApi();

    const getNeightbourhoods = async () => {
        if (neightbourhood.neightbourhoods.length > 0) {
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const response = await api.get("/neighbourhood");
            setNeightbourhood({
                selected: neightbourhood.selected || response.data[0]?.hash,
                neightbourhoods: response.data,
            });
            
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    const newNeightbourhood = async (name) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post("/neighbourhood", {name});
            setNeightbourhoods(response.data);
            setLoading(false);
            return true;
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    // Cargar socios al inicio
    useEffect(() => {
        getNeightbourhoods();
    }, [neightbourhood,setNeightbourhood]);

    return { neightbourhood, setNeightbourhood,loading, error, getNeightbourhoods ,newNeightbourhood};
};

export default useNeightbourhood;
