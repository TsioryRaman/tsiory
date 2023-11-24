import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Download } from "react-feather";

export const PersonalFile = () => {
    return <a href="/CV Tsiory.pdf" onClick={() => confirm("Voulez-vous telecharger le CV de Tsiory?")} download>
        <Box marginLeft="4px" rounded={"md"} shadow="sm" border="1px" borderColor="blue.400">
            <Text display="flex" _hover={{text:"white"}} flexDirection="row" gap="1" px="10px" py="6px" fontSize="10px">
                 <Download size="12px"/> CV
            </Text>
        </Box>
    </a>

}