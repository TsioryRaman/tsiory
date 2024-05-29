import { StackType } from "../components/Home/Article/Article";

type Article = {
    id: number,
    title: String,
    description: String,
    stack: Array<StackType>
}

export const Article_1_Stack: Article = {
    id: 1,
    title: "1 - Meilleurs pratique en react",
    description: "L'écriture de code propre implique d'écrire des codes avec des modèles de conception clairs et simples qui facilitent la lecture, le test et la maintenance pour les humains. Par conséquent, un code propre peut réduire le coût du développement logiciel. Et c'est parce que les principes impliqués dans l'écriture de code propre éliminent les dettes techniques.",
    stack: [{ name: "Main", colorScheme: "gray.200" },
    { name: "Javascript", colorScheme: "green.400" },
    { name: "Typescript", colorScheme: "pink" },
    { name: "React | Nest", colorScheme: "purple" }]
};

export const Article_2_Stack: Article = {
    id: 2,
    title: "2 - Choix de la technologie de base",
    description: "Pour accéder à certains services, communiquer avec d’autres personnes, faire des achats, jouer ou visionner des vidéos, les applications mobiles sont partout ! Dans ce contexte, la création d’appli est devenue incontournable pour de nombreuses entreprises.",
    stack: [{ name: "Technologie", colorScheme: "gray.200" },
    { name: "Langage", colorScheme: "green.400" },
    { name: "Framework", colorScheme: "pink" }]
};