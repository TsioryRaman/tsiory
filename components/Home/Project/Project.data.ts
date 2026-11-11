import { ProjectCardProps } from "./ProjectCard";

const HAIRUN = "Hairun Technology · Développeur fullstack · depuis sept. 2024";

export const ProjectData: ProjectCardProps[] = [
  {
    title: "Plateforme d'analyse de données Big Data",
    context: HAIRUN,
    description:
      "Maintenance et évolution d'une plateforme d'analyse de données en ligne, avec enrichissement IA et ouverture SSO.",
    details: [
      "Maintenance du site avec .NET Framework, ASP.NET MVC et ASP.NET Web API.",
      "Ajout de nouvelles fonctionnalités et optimisation de l'existant en respectant les principes SOLID.",
      "Optimisation des requêtes SQL lentes avec Entity Framework.",
      "Intégration d'une connexion SSO avec d'autres plateformes externes.",
      "Intégration de l'API OpenAI pour l'analyse et le conseil quotidien.",
    ],
    stack: [
      ".NET Framework",
      "C#",
      "ASP.NET MVC",
      "Web API",
      "Entity Framework",
      "OpenAI API",
      "SSO",
    ],
  },
  {
    title: "Migration .NET Framework 4.6 → .NET 8",
    context: HAIRUN,
    description:
      "Migration progressive d'une application métier vers .NET 8, sans interruption de service.",
    details: [
      "Migration progressive d'une application .NET Framework 4.6 vers .NET 8, paquets compris.",
      "Adaptation des composants existants à la nouvelle architecture.",
      "Amélioration de la maintenabilité et des performances de l'application.",
    ],
    stack: [".NET Framework 4.6", ".NET 8", "C#"],
  },
  {
    title: "Plateforme e-commerce GrandNode",
    context: HAIRUN,
    description:
      "Conception de plugins métier et optimisation des performances d'une plateforme e-commerce.",
    details: [
      "Conception et développement de plugins personnalisés pour GrandNode (comptabilité, facturation, import/export).",
      "Résolution des bugs existants.",
      "Amélioration des performances liées aux requêtes base de données et à la gestion mémoire.",
      "Optimisation des requêtes MongoDB.",
    ],
    stack: [".NET Core", "GrandNode", "Vue.js", "MongoDB"],
  },
  {
    title: "Building Blocks d'interopérabilité GovStack",
    context: HAIRUN,
    description:
      "Conception des briques d'interopérabilité GovStack en architecture microservices.",
    details: [
      "Analyse des besoins du building block GovStack.",
      "Conception et développement d'API avec NestJS et RabbitMQ pour la gestion des événements en microservices.",
      "Intégration des maquettes et dynamisation côté client avec Next.js et React Query.",
      "Mise en place de la sécurisation avec Keycloak via OpenID.",
    ],
    stack: [
      "Next.js",
      "NestJS",
      "RabbitMQ",
      "Keycloak",
      "OpenID",
      "React Query",
    ],
  },
  {
    title: "E-Transfert",
    context: "Projet personnel",
    description: "Une application de transfert de fichiers en temps réel.",
    img: "img/project-screen/e-transfert/landing.png",
    stack: ["ReactJs", "NestJs", "TailwindCss"],
  },
  {
    title: "Streaming",
    context: "Projet personnel",
    description:
      "Une application de streaming vidéo en cours d'évolution, Front-End intégré à 80 % pour le moment.",
    img: "img/project-screen/streaming/2024-01-11_14-16.png",
    stack: ["Docker", "ReactJs", "ChakraUi", "Custom Element"],
  },
  {
    title: "E-Buy",
    context: "Projet personnel",
    description:
      "Une application de vente en ligne incluant le système de paiement Stripe.",
    img: "img/project-screen/e-buy/2024-01-11_08-53_1.png",
    stack: ["Docker", "Symfony", "ReactJs", "Typesense", "Custom Element"],
  },
  {
    title: "Task",
    context: "Projet personnel",
    description:
      "Une application de gestion de tâches avec un dashboard de réalisation et un système de drag and drop.",
    img: "img/project-screen/todo/2024-01-11_14-37.png",
    stack: ["Angular", "Angular Material"],
  },
];
