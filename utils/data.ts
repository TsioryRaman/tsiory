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
    year: "2023",
    content: [
      {
        header: "Master II à l'ISPM",
        description: `Etude supérieur en 5ème année à l'ISPM`,
        iconFinal: `&#129333;`,
      },
    ],
  },
  {
    year: "2021",
    content: [
      {
        header: "MasterI à l'ISPM",
        description: `Etude supérieur en 4ème année à l'ISPM`,
        iconFinal: `&#129333;`,
      },
      {
        header: "Soutenance 3ème année en Informatique et Telecommuniaction",
        description: `Présentation de ma soutenance "Transfert de messagerie et de fichier en temps réel"`,
      },
      {
        header: "Stage au sein de la société Esokia Madagascar",
        description:
          "Stage professionelle au sein de la société Esokia en tant que stagiaire Back-end (Symfony/Magento2)",
      },
    ],
  },
  {
    year: "2017",
    content: [
      {
        header: "Entrer à l'université",
        description:
          "Debut de formation en Informatique et Telecommunication.Sans oublier l'apprentissage autodidacte.",
        iconFinal: `&#128521;`,
      },
    ],
  },
  {
    year: "2016",
    content: [
      {
        header: "Entrer à l'université(CNTEMAD)",
        description:
          "Debut de formation en Telecommunication en licence 1 pour avoir de meilleurs base en Mathematique.",
        iconFinal: `&#128521;`,
      },
      {
        header: "Obtention du baccalaureat",
        description: "Bachelier en serie scientifique",
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
