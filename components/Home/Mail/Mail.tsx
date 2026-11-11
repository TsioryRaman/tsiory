import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Send } from "react-feather";

const SUCCESS_MESSAGE = "Votre message a bien été envoyé.";
const ERROR_MESSAGE = "Votre message n'a pas pu être envoyé.";

const Mail: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState(SUCCESS_MESSAGE);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          "service_a7vpj8w",
          "template_78iui8j",
          form.current,
          "55XkI70mvsERDrHJ3"
        )
        .then(
          () => {
            setNotification(true);
            setMessage(SUCCESS_MESSAGE);
            setSuccess(true);
            setLoading(false);
            form.current?.reset();
            setTimeout(() => {
              setNotification(false);
            }, 2500);
          },
          () => {
            setNotification(true);
            setMessage(ERROR_MESSAGE);
            setSuccess(false);
            setLoading(false);
            setTimeout(() => {
              setNotification(false);
            }, 2500);
          }
        );
    }
  };

  return (
    <Box
      as="section"
      bg="surface"
      borderWidth="1px"
      borderColor="rule"
      p={["6", "8", "10", "12"]}
    >
      <Flex
        direction={["column", "column", "row", "row"]}
        gap={["8", "10", "14", "16"]}
        alignItems="flex-start"
      >
        <Box w={["100%", "100%", "40%", "40%"]}>
          <Text
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="accent"
            mb="4"
          >
            06 — Contact
          </Text>
          <Heading
            as="h2"
            fontFamily="heading"
            fontWeight="500"
            fontSize={["2xl", "3xl", "3xl", "3xl"]}
            lineHeight="1.15"
            color="ink"
            m="0"
          >
            Un projet, une question ?
          </Heading>
          <Text mt="4" fontSize="sm" lineHeight="1.7" color="muted">
            Écrivez-moi directement, je réponds généralement sous 24 heures.
          </Text>
        </Box>

        <Box w={["100%", "100%", "60%", "60%"]} as="div">
          <form ref={form} onSubmit={sendEmail}>
            <FormControl>
              <FormLabel
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="muted"
              >
                Nom
              </FormLabel>
              <Input
                isRequired
                name="name"
                type="text"
                bg="page"
                borderColor="rule"
                borderRadius="2px"
                focusBorderColor="accent"
                _hover={{ borderColor: "muted" }}
              />
            </FormControl>

            <FormControl mt="5">
              <FormLabel
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="muted"
              >
                Email
              </FormLabel>
              <Input
                isRequired
                name="user_email"
                type="email"
                bg="page"
                borderColor="rule"
                borderRadius="2px"
                focusBorderColor="accent"
                _hover={{ borderColor: "muted" }}
              />
            </FormControl>

            <FormControl mt="5">
              <FormLabel
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="muted"
              >
                Message
              </FormLabel>
              <Textarea
                isRequired
                name="message"
                resize="none"
                rows={5}
                bg="page"
                borderColor="rule"
                borderRadius="2px"
                focusBorderColor="accent"
                _hover={{ borderColor: "muted" }}
              />
            </FormControl>

            <Flex mt="6" alignItems="center" gap="5" flexWrap="wrap">
              <Button
                type="submit"
                isLoading={loading}
                bg="ink"
                color="page"
                borderRadius="2px"
                fontFamily="mono"
                fontSize="10px"
                letterSpacing="0.14em"
                textTransform="uppercase"
                px="7"
                py="5"
                _hover={{ bg: "accent" }}
                _active={{ bg: "accent" }}
                rightIcon={<Send size={12} />}
              >
                Envoyer
              </Button>

              {notification && (
                <Text
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  color={success ? "ink" : "accent"}
                  borderLeftWidth="2px"
                  borderColor={success ? "ink" : "accent"}
                  pl="3"
                >
                  {message}
                </Text>
              )}
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mail;
