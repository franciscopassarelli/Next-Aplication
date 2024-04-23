import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parseamos los datos de la solicitud JSON
        const formData = await request.json();
        console.log(formData);

        // Aquí podrías realizar algún procesamiento adicional con los datos recibidos

        // Devolvemos una respuesta JSON con un mensaje de confirmación
        return NextResponse.json({ message: "Data recibida correctamente" });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        // Devolvemos una respuesta de error en caso de que ocurra algún problema
        return NextResponse.error(new Error("Hubo un error al procesar la solicitud"));
    }
}
