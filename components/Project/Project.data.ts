import { ProjectCardProps } from "./ProjectCard";

export const ProjectData:ProjectCardProps[] = [
    {
        title:"E-Transfert",
        img: "img/project-screen/e-transfert/landing.png",
        stack: ["ReactJs","NestJs","TailwindCss"],
        description:"Une application de transfert de fichier en temps reel"
    },
    {
        title:"Streaming",
        img: "img/project-screen/streaming/2024-01-11_14-16.png",
        stack: ["Docker","ReactJs","ChakraUi","Custom Element"],
        description:"Une application de Streaming videos en cours d'evolution, Front-End integree a 80% pour le moment"
    },
    {
        title:"E-Buy",
        img: "img/project-screen/e-buy/2024-01-11_08-53_1.png",
        stack: ["Docker","Symfony","ReactJs","Typesense","Custom Element"],
        description:"Une application de vente en ligne en incluant le systeme de paiement Stripe."
    },
    {
        title:"Task",
        img: "img/project-screen/todo/2024-01-11_14-37.png",
        stack: ["Angular","Angular Material"],
        description:"Une application de tache pour avoir un dashboard de sa realisation durant son travail avec un systeme de drag and drop"
    }
]