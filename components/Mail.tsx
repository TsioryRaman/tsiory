import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { CheckCircle, Loader, Send } from "react-feather";
import Fade from "react-reveal"

const SUCCESS_MESSAGE = "Votre message a bien ete envoye"
const ERROR_MESSAGE = "Votre message n'a pas pu etre envoyee"

const Mail:React.FC = () => {

    const form = useRef<HTMLFormElement>(null)

    const [loading,setLoading] = useState(false)
    const [success,setSuccess]= useState(false)
    const [notification,setNotification] = useState(false)
    const [message,setMessage] = useState(SUCCESS_MESSAGE)
    const bg = useColorModeValue("blue.500","blue.700")

    const sendEmail = (e:any) => {
        e.preventDefault();
        setLoading(true);
        if(form.current)
        {
            emailjs.sendForm('service_a7vpj8w', 'template_78iui8j', form.current, '55XkI70mvsERDrHJ3')
          .then((result) => {
              console.log(result.text);

              setNotification(true)
              setMessage(SUCCESS_MESSAGE);
              setSuccess(true);
              setLoading(false);
              setTimeout(()=>{
                setNotification(false)
            },2500)
          }, (error) => {
              console.log(error.text);

              setNotification(true)
              setMessage(ERROR_MESSAGE);
              setSuccess(false);
              setLoading(false);
          });
        }
        
      };

    return (
        <Flex position="relative" color="white" bg={bg} p="4" px={["4","8","28","48"]} justifyContent="center" alignItems="center" direction={["column","column","row","row"]}>
            <Flex px="8" direction="column" justifyContent="center" alignItems="center" w={["100%","100%","50%","50%"]}>
                
            <Heading>
                Me contacter
                
            </Heading>
            <Box bottom="4" right="2" position="absolute">

                {notification && <Fade bottom>
                    <Alert mt="8" status={success ? "success" : "error"} variant='left-accent'>
                    <CheckCircle />
                     <span style={{marginLeft:"8px"}}>{message}</span>
                </Alert></Fade>}
            </Box>
            </Flex>
            <Box w={["100%","100%","50%","50%"]}>
                
                <form ref={form} onSubmit={(e)=>sendEmail(e)}>
                    <FormControl mt="4">
                        <FormLabel>
                            Nom:
                        </FormLabel>
                        <Input name="name" type="text" />
                    </FormControl>

                    <FormControl mt="4">
                        <FormLabel>
                            Email:
                        </FormLabel>
                        <Input name="user_email" type="email" />
                    </FormControl>

                    <FormControl mt="4">
                        <FormLabel>
                            Message:
                        </FormLabel>
                        <Textarea resize="none" name="message"/>
                    </FormControl>
                    <Button mt="4" variant='outline' type="submit" >Envoyer <span style={{marginLeft:"10px"}}>{loading ? <Loader /> : <Send />}</span></Button>
                </form>

            </Box>
        </Flex>
    );
}

export default Mail;