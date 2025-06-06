

export type TimelineItem = {
    company: string;
    title: string;
    time: string;
    description: string[] | string;
};

export const timelineData_education: TimelineItem[] = [
  {
    company: 'University of Applied Sciences Esslingen',
    title: 'Bachelor of Engineering ',
    time: '2020 – 2024',
    description: [
      "major: media computer science",
      "final grade: 1,7",
      "2023 semester abroad: Kanagawa, Japan"
    ]
  },
]

export const timelineData_work: TimelineItem[] = [
  {
    company: 'adesso SE',
    title: 'Bachelor’s Thesis/Working Student as Software Developer',
    time: '03/2024 – 10/2024',
    description: [
      "Training and fine-tuning of a Large Language Model on a self-created dataset.",
      "Integration of the AI model into a Spring Backend, Deployment of the AI model in Azure.",
      "Implementation of the functional model in the internal employee management program."
    ]
  },
  {
    company: 'doubleSlash Net-Business GmbH',
    title: 'Internship as Software Developer',
    time: '09/2022 – 02/2023',
    description: [
      "Backend development and refactoring with Java and Spring Boot",
      "Creation of unit tests with JUnit 5",
      "Frontend development with Angular",
      "Development of a Jenkins pipeline for automated deployment in Groovy",
      "Proof of concept and implementation of a shared library in Java",
      "Support in a customer project with agile software development (Scrum)"
    ]
  },

];