import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Contact() {
    const { lang } = useContext(LanguageContext);
    return (
        <main className="min-h-screen bg-white p-6 pt-8 sm:pt-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">{translations[lang].contact.title}</h1>
                <div className="space-y-4 text-lg text-gray-700">
                    <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                            href="mailto:demarco.sergio@hotmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            demarco.sergio@hotmail.com
                        </a>
                    </p>
                    <p>
                        <span className="font-semibold">Teléfono:</span> (+54) 91161491049
                    </p>
                    <p>
                        <span className="font-semibold">Dirección:</span> Buenos Aires, Argentina, CP 1704
                    </p>
                </div>
            </div>
        </main>
    );
}
