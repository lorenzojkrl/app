import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import AsyncStorage from "@react-native-community/async-storage";
import api, { setToken } from "../utility/api.js";

export default function useLoader() {
    const [loading, setLoading] = useState(true);
    const { manageUserData, setTokenProv } = useContext(AuthContext);

    useEffect(() => {
        const load = async () => {
            const token = await AsyncStorage.getItem('AuthToken');
            if (token) {
                setToken(token);
                setTokenProv(token);

                // l'endpoint non è ancora esistente
                // try{
                //     const {result,payload} = await api.get("authentication/refresh_token")
                //     if (result) {
                //         manageUserData(payload);
                //     }
                // } catch (err) {
                //     console.log(err);
                // }
            }
            setLoading(false);
        }
        load();
    }, [])

    return loading
}