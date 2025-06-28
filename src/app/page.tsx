"use client";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#171717] text-white py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        Mi Trayectoria Profesional
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
