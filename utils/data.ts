import { ArticleType, ExperienceType } from "../types";

export const certificates = [
  "/certificate/css certificate.jpg",
  "/certificate/javascript_basic certificate.jpg",
  "/certificate/problem_solving_basic certificate.jpg",
  "/certificate/react_basic certificate.jpg",
  "/certificate/rest_api_intermediate certificate.jpg",
];

export const experience: ExperienceType[] = [
  {
    year: "Depuis 2024",
    content: [
      {
        header: "Développeur fullstack — Hairun Technology",
        description:
          "Depuis septembre 2024. Maintenance .NET Framework / ASP.NET MVC, migration vers .NET 8, e-commerce GrandNode (.NET Core / Vue.js) et building blocks d'interopérabilité GovStack (Next.js / NestJS).",
      },
    ],
  },
  {
    year: "2023",
    content: [
      {
        header: "Master II à l'ISPM",
        description: "Études supérieures en 5ᵉ année à l'ISPM.",
      },
    ],
  },
  {
    year: "2021",
    content: [
      {
        header: "Master I à l'ISPM",
        description: "Études supérieures en 4ᵉ année à l'ISPM.",
      },
      {
        header: "Soutenance de 3ᵉ année en Informatique et Télécommunications",
        description:
          "Présentation de ma soutenance « Transfert de messagerie et de fichiers en temps réel ».",
      },
      {
        header: "Stage chez Esokia Madagascar",
        description:
          "Stage professionnel chez Esokia Madagascar en tant que stagiaire back-end (Symfony / Magento 2).",
      },
    ],
  },
  {
    year: "2017",
    content: [
      {
        header: "Entrée à l'université",
        description:
          "Début de formation en Informatique et Télécommunications, sans oublier l'apprentissage autodidacte.",
      },
    ],
  },
  {
    year: "2016",
    content: [
      {
        header: "Entrée à l'université (CNTEMAD)",
        description:
          "Début de formation en Télécommunications en licence 1 pour acquérir de meilleures bases en mathématiques.",
      },
      {
        header: "Obtention du baccalauréat",
        description: "Bachelier en série scientifique.",
      },
    ],
  },
];

export const articles: ArticleType[] = [
  {
    id: 1,
    title: "1 - Meilleurs pratique en react",
    description:
      "L'écriture de code propre implique d'écrire des codes avec des modèles de conception clairs et simples qui facilitent la lecture, le test et la maintenance pour les humains. Par conséquent, un code propre peut réduire le coût du développement logiciel. Et c'est parce que les principes impliqués dans l'écriture de code propre éliminent les dettes techniques.",
    stack: [
      { name: "Main", colorScheme: "gray.200" },
      { name: "Javascript", colorScheme: "green.400" },
      { name: "Typescript", colorScheme: "pink" },
      { name: "React | Nest", colorScheme: "purple" },
    ],
  },
  {
    id: 2,
    title: "2 - Choix de la technologie de base",
    description:
      "Pour accéder à certains services, communiquer avec d’autres personnes, faire des achats, jouer ou visionner des vidéos, les applications mobiles sont partout ! Dans ce contexte, la création d’appli est devenue incontournable pour de nombreuses entreprises.",
    stack: [
      { name: "Technologie", colorScheme: "gray.200" },
      { name: "Langage", colorScheme: "green.400" },
      { name: "Framework", colorScheme: "pink" },
    ],
  },
];
