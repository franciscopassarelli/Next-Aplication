import Boton from "../components/ui/Boton";
import { useEffect } from "react";

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="container mx-auto mt-6 px-4 sm:px-0">
            <h1 className="text-2xl text-center mb-6">Algo no salió bien</h1> 
            <hr className="my-6" />
            <div className="flex justify-center">
                <Boton onClick={reset}>Intentar nuevamente</Boton>
            </div>
        </div>
    );
}
