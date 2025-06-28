export default function About() {
    return (
        <main className="min-h-screen bg-white p-6 pt-8 sm:pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Acerca de mí</h1>
                <div className="space-y-6 text-lg text-gray-700">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800">Información Personal</h2>
                        <p>
                            <span className="font-semibold">Nombre:</span> Sergio Demarco
                        </p>
                        <p>
                            <span className="font-semibold">Fecha de Nacimiento:</span> 10/01/1994
                        </p>
                        <p>
                            <span className="font-semibold">Nacionalidad:</span> Argentina
                        </p>
                        <p>
                            <span className="font-semibold">Estado Civil:</span> Casado
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800">Educación</h2>
                        <p>
                            <span className="font-semibold">(2017 – Dec 2020):</span> Técnico en desarrollo de aplicaciones móviles y web, Universidad Nacional de la Matanza, Buenos Aires.
                        </p>
                        <p>
                            <span className="font-semibold">(2011 – Dec 2012):</span> Técnico Aeronáutico, Escuela Técnica “Jorge Newbery” N°8, Buenos Aires.
                        </p>
                        <p>
                            <span className="font-semibold">(2007 – Dec 2011):</span> Mecánico en Mantenimiento de Aeronaves, Escuela Técnica “Jorge Newbery” N°8, Buenos Aires.
                        </p>
                        <p>
                            <span className="font-semibold">(2014 – Dec 2016):</span> Ciberseguridad, Educación IT, Buenos Aires.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800">Idiomas</h2>
                        <p>
                            <span className="font-semibold">Inglés:</span> Avanzado (Instituto Británico de Cultura Inglesa, Ramos Mejía, Buenos Aires)
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800">Habilidades y Tecnologías</h2>
                        <p>
                            <span className="font-semibold">Top Skills:</span> .NET, .NET Core, React (con TypeScript), ASP/ASPX, API Restful, HTML/CSS, SOAP, Microservicios, Entity Framework, SQL/NoSQL, Azure, NodeJS, Angular, AWS, Git, SignalR, RabbitMQ, MemCache, Firebase, ReactNative, CI/CD, Docker, Terraform, Kubernetes, Flutter, Kotlin, Swift, Desarrollo de Criptomonedas (Remix y Solidity)
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800">Otros Datos de Interés</h2>
                        <p>
                            <span className="font-semibold">Licencia de Mecánico en Mantenimiento de Aeronaves Nº:</span> 95237
                        </p>
                        <p>
                            <span className="font-semibold">Licencia de Conducir:</span> Argentina (Clase B1) y Florida (USA)
                        </p>
                    </section>
                    {/* Nueva sección para descargar el CV */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800">Descargar CV</h2>
                        <p className="mt-4">
                            Puedes descargar mi curriculum completo en formato PDF.
                        </p>
                        <a
                            href="/cv.pdf"
                            download
                            className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                            Descargar CV
                        </a>
                    </section>
                </div>
            </div>
        </main>
    );
}
