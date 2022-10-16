import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Textarea, useColorModeValue } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { AtSign, CheckCircle, Loader, MessageCircle, Send, User } from "react-feather";
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
    const bgInput = useColorModeValue("blue.400","whiteAlpha.50")
    const hoverInput = useColorModeValue("blue.300","whiteAlpha.100")

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
              form.current?.reset();
              setTimeout(()=>{
                setNotification(false)
            },2500)
          }, (error) => {
              console.log(error.text);

              setNotification(true)
              setMessage(ERROR_MESSAGE);
              setSuccess(false);
              setLoading(false);
              setTimeout(()=>{
                setNotification(false)
            },2500)
          });
        }
        
      };

    return (
        <Flex position="relative" color="white" bg={bg} p="4" px={["4","8","28","48"]} justifyContent="center" alignItems="center" direction={["column","column","row","row"]}>
            <Flex px="8" direction="column" justifyContent="center" alignItems="center" w={["100%","100%","50%","50%"]}>
                
            <Fade>
                <Heading>
                    Me contacter
                </Heading>
            </Fade>
            <Box bottom="4" right="2" position="absolute">

                <Fade when={notification} bottom>
                    <Alert mt="8" status={success ? "success" : "error"} variant='left-accent'>
                    <CheckCircle />
                     <span style={{marginLeft:"8px"}}>{message}</span>
                </Alert></Fade>
            </Box>
            </Flex>
            <Box w={["100%","100%","50%","50%"]}>
                <form ref={form} onSubmit={(e)=>sendEmail(e)}>
                    <Fade>
                    <FormControl mt="4">
                        <FormLabel>
                            Nom:
                        </FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<User size="20px"/>}/>
                            <Input focusBorderColor='blue.400' _focusVisible={{background:"transparent"}} _hover={{backgroundColor: `${hoverInput}`}} background={bgInput} variant="filled" name="name" type="text" />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt="4">
                        <FormLabel>
                            Email:
                        </FormLabel>
                        <InputGroup>
                            <InputLeftElement children={<AtSign size="20px"/>}/>
                            <Input focusBorderColor='blue.400' _focusVisible={{background:"transparent"}} _hover={{backgroundColor: `${hoverInput}`}} background={bgInput} variant="filled" name="user_email" type="email" />
                        </InputGroup>
                    </FormControl>

                    <FormControl mt="4">
                        <FormLabel>
                            Message:
                        </FormLabel>
                        <InputGroup>

                            <InputLeftElement children={<MessageCircle size="20px"/>}/>
                            <Textarea focusBorderColor='blue.400' _focusVisible={{background:"transparent"}} _hover={{backgroundColor: `${hoverInput}`}} background={bgInput} variant="filled" paddingLeft="40px" resize="none" name="message"/>
                        </InputGroup>
                    </FormControl>
                    <Button mt="4" variant='outline' type="submit" _hover={{backgroundColor: `${hoverInput}`}}>Envoyer <span style={{marginLeft:"10px"}}>{loading ? <Loader /> : <Send />}</span></Button>
                    </Fade>
                </form>
            </Box>
        </Flex>
    );
}

export default Mail;