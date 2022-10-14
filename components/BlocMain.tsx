import { Box, Text } from "@chakra-ui/react";
import React from "react"
import { Award } from "react-feather";
import { ParcourInformation } from "./ParcoursInformation";
import {Bounce} from "react-reveal"

export const BlockMain: React.FC = () => {
    return (
        <Box as='div'>
            <Text fontWeight='500'>
                J'adore les defis proposer par mes employeurs. Optimiste et rigoureux, j'adore apprendre des nouvelles choses afin de renforcer mes competences que j'ai deja acquis.<span>&#128170;</span>
            </Text>
            <Box>
                <Text as='h2' fontSize='3xl' fontWeight='700'>
                    Mes parcours
                </Text>
                <Bounce left duration={800}>
                    <ParcourInformation year='2022' content={[{ header: "MasterI à l'ISPM", description: `Etude supérieur en 4ème année à l'ISPM`, iconFinal: <span>&#129333;</span> }]} ></ParcourInformation>
                </Bounce>
                <Bounce left duration={800}>
                    <ParcourInformation year='2021'
                        content={[{ header: "MasterI à l'ISPM", description: `Etude supérieur en 4ème année à l'ISPM`, iconFinal: <span>&#129333;</span> },
                        { header: "Soutenance 3ème année en Informatique et Telecommuniaction", description: `Présentation de ma soutenance "Transfert de messagerie et de fichier en temps réel"`, iconFinal: <Award display="inline" /> },
                        { header: "Stage au sein de la société Esokia Madagascar", description: "Stage professionelle au sein de la société Esokia en tant que stagiaire Back-end (Symfony/Magento2)" }]} />
                    <ParcourInformation year='2020' content={[{ header: "Fin d'etude universitaire en 3ème année", description: "Fin du parcous en L3 (licence) pour le parcours Informatique et Télécommunication à l'ISPM" }]} />
                </Bounce>
                <Bounce duration={800} left>
                    <ParcourInformation year='2017' content={[{ header: "Entrer à l'université", description: "Debut de formation en Informatique et Telecommunication.Sans oublier l'apprentissage autodidacte.", iconFinal: <span>&#128521;</span> }]} />

                </Bounce>
                <Bounce left duration={800}>
                    <ParcourInformation year='2016' content={[{ header: "Entrer à l'université(CNTEMAD)", description: "Debut de formation en Telecommunication en licence 1 pour avoir de meilleurs base en Mathematique.", iconFinal: <span>&#128521;</span> },
                    { header: 'Obtention du baccalaureat', description: "Bachelier en serie scientifique" }]} />
                </Bounce>

            </Box>
        </Box >
    );
}