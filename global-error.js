"use client"

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="container m-auto mt-6">
                    <h1 className="text-2xl">Algo no salió bien</h1>
                    <hr className="my-6" />
                    <button onClick={() => reset()}>Intentar nuevamente</button>
                </div>
            </body>
        </html>
    )
}