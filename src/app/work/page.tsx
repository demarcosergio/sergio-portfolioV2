"use client";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { experiences } from "@/data/experiences";

export default function Work() {
    const { lang } = useContext(LanguageContext);

    return (
        <main className="min-h-screen p-6 pt-8 sm:pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-neutral-100 mb-8">
                    {translations[lang].work.title}
                </h1>
                <div className="space-y-8">
                    {experiences.map((job, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-neutral-200">
                                        {job.company}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">{job.role}</p>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{job.period}</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Tech:</span> {job.tech}
                                </p>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">{job.tasks}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
