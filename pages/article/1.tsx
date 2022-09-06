import { Badge, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const Article: React.FC = () => {
    return (
        <Box mt='24'>
            <Heading as='h2' fontWeight='bold' fontSize="3xl">
                Coder mieux avec reactjs/ts | Nest.js
            </Heading>
            <Flex direction="row" mt='3' gap='4'>
                <Badge>
                    MAIN
                </Badge>
                <Badge colorScheme='green'>
                    Javascript
                </Badge>
                <Badge colorScheme="red">
                    Typescript
                </Badge>
                <Badge colorScheme='purple'>
                    React | Nest
                </Badge>
                <Text display='inline' p='0' color='gray.400'>Aout 19,2022</Text>
            </Flex>
            <Divider mt='3' />
            <Text fontSize='lg'>
                L'écriture de code propre implique d'écrire des codes avec des modèles de conception clairs et simples qui facilitent la lecture, le test et la maintenance pour les humains. Par conséquent, un code propre peut réduire le coût du <code>développement logiciel</code>. Et c'est parce que les principes impliqués dans l'écriture de code propre éliminent les dettes techniques.
            </Text>
            <Heading as='h2' fontWeight='bold' fontSize="3xl">
                1. Utilisez l'importation par défaut pour importer React
            </Heading>
            <Box mt='3' />
            <CopyBlock
                text={`import * as React from "react";`}
                language={'javascript'}
                theme={dracula}
                codeBlock
            />
            <Text fontSize='lg'>
                Bien que le code ci-dessus fonctionne, il est déroutant et n'est pas une bonne pratique d'importer tout le contenu de React si nous ne les utilisons pas. Un meilleur modèle consiste à utiliser l'exportation par défaut comme indiqué ci-dessous :
            </Text>
            <CopyBlock
                text={`import React, {useContext, useState} from "react";`}
                language={'javascript'}
                theme={dracula}
                codeBlock
            />
            <Heading as='h2' fontWeight='bold' fontSize="3xl" mt='4'>
                2. Déclarez les types avant la mise en œuvre de l'environnement d'exécution
            </Heading>
            <Text fontSize='lg'>
                Considerons le code suivant:
            </Text>
            <CopyBlock
                text={`import React, {Component} from "react";

                const initialState = { count: 1 }
                const defaultProps = { name: "John Doe" }
                
                type State = typeof initialState;
                type Props = { count?: number } & typeof defaultProps
                
                class Counter extends Component {
                
                   static defaultProps = defaultProps;
                   state = initialState;
                
                   // ...
                
                }`}
                language={'javascript'}
                theme={dracula}
                codeBlock
            />
            <Text fontSize='lg'>
                Le code ci-dessus peut être plus propre et plus lisible si nous séparons les déclarations d'exécution et de compilation. Et cela se fait en déclarant les types - les déclarations de type de compilation en premier.
            </Text>
            <Text fontSize='lg'>
                Reorganison le code comme suit:
            </Text>
            <CopyBlock
                text={`import React, {Component} from "react";

                type State = typeof initialState;
                type Props = { count?: number } & typeof defaultProps
                
                const initialState = { count: 1 }
                const defaultProps = { name: "John Doe" }
                
                class Counter extends Component {
                
                   static defaultProps = defaultProps;
                   state = initialState;
                
                   // ...
                
                }`}
                language={'javascript'}
                theme={dracula}
                codeBlock
            />
            <Text fontSize='lg'>
                Maintenant, à première vue, un développeur sait à quoi ressemble l'API du composant puisque la première ligne du code le montre clairement.

                De plus, nous avons séparé nos déclarations de compilation de nos déclarations d'exécution.
            </Text>
        </Box>
    );
}

export default Article;