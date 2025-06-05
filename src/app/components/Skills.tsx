import React from "react";
import { skills } from "../constants/skills";

type Skill = {
  name: string;
  logo: string;
};

type SkillCategoryProps = {
  title: string;
  items: Skill[];
};
function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
        {items.map(({ name, logo }) => (
          <div key={name} className="flex flex-col items-center space-y-2">
            <img src={logo} alt={name} className="w-12 h-12 object-contain" />
            <span className="text-sm text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="py-16 px-6 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-yellow-300 font-bold text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory title="Frameworks & Tools" items={skills.frameworks} />
          <SkillCategory title="Creative" items={skills.creative} />
        </div>
      </div>
    </section>
  );
}

