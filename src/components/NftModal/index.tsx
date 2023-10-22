import { Box, Flex, VStack, Image, Stack, Text, Heading } from '@chakra-ui/react'
import CountdownTimer from './countDown'
import { Link } from 'react-router-dom'

export default function NFTModal({ setIsModal }) {
    return (
        <VStack flexDirection={['column-reverse', 'column']} gap={['14px', '30px']} align='center' justifyContent='center' minH='100vh' w='100vw' bg='#0C0F15' py={['30px', '']}>
            <Stack direction={['column-reverse', 'row']} p={['20px', '50px']} w='fit-content' gap='40px' bg='#11151D' justify='space-between' h='auto' align='center' rounded='20px' mx='10px'>
                <VStack>
                    <Box w={['280px', '300px']} >
                        <Image src='./loozr-gif.gif' alt='' />
                    </Box>
                </VStack>
                <VStack gap='25px' align='left'>
                    <CountdownTimer />
                    <Text fontSize={['10px', '12px']} bgGradient='linear(to-l, #8369F4, #F039E2 )' bgClip='text' fontWeight='500' letterSpacing={3.5}>MINTING SOON - 9:00 AM UTC/23RD JULY</Text>
                    <Heading fontSize={['30px', '30px']} fontWeight='800'>Loozr AR Access <br /> Card Collection.</Heading>
                    <Flex gap='20px'>
                        <Box onClick={() => setIsModal(false)} px='30px' py='12px' fontWeight={600} rounded='full' cursor='pointer' border='1px' borderColor='#536079' w='fit-content' h='fit-content' fontSize={['10px', '']}>Learn more</Box>
                        <Box as='a' href='https://nft.loozr.io' target='_blank' px='30px' py='12px' fontWeight={600} rounded='full' cursor='pointer' bgGradient='linear(to-l, #8369F4, #F039E2 )' w='fit-content' h='fit-content' fontSize={['10px', '']}>View collection</Box>
                    </Flex>
                    <Flex align='center' gap='5px'>
                        <Text color='#536079' fontWeight={600} fontSize={15} >Already a Testnet user?</Text>
                        <Link to='/login'>
                            <Text fontWeight={600}>Login</Text>
                        </Link>
                    </Flex>
                </VStack>
            </Stack>
            <Box bg='#11151D' color='#536079' cursor='pointer' onClick={() => setIsModal(false)} py='10px' px='14px' rounded='full' _hover={{ color: 'white' }}>
                <Text fontWeight={600}>Close</Text>
                {/* <BsXLg size={0} /> */}
            </Box>
        </VStack>
    )
}
