export const certificates = [
  "/certificate/css certificate.jpg",
  "/certificate/javascript_basic certificate.jpg",
  "/certificate/problem_solving_basic certificate.jpg",
  "/certificate/react_basic certificate.jpg",
  "/certificate/rest_api_intermediate certificate.jpg",
];

type ExperienceType = {
  year: string;
  content: {
    header: string;
    description: string;
    iconFinal?: string;
  }[];
};

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
