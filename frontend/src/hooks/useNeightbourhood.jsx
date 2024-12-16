import { useState, useEffect } from "react";
import useApi from "./useApi";


const useNeightbourhood = () => {

    const [neightbourhoods, setNeightbourhoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    

    const { api } = useApi();

    const getNeightbourhoods = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get("/neighbourhood");
            setNeightbourhoods(response.data);

            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }

    // Cargar socios al inicio
    useEffect(() => {
        getNeightbourhoods();
    }, []);

    return { neightbourhoods, loading, error, getNeightbourhoods };
};

export default useNeightbourhood;
