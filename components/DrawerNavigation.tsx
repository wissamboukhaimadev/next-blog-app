import { Button, Container, Drawer, useMantineColorScheme } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { NextPage } from "next"
import { navigationItems } from "../utils/navigation"
import { MdDarkMode } from 'react-icons/md'
import { CiDark } from 'react-icons/ci'
import { RiAccountPinCircleLine } from 'react-icons/ri'

interface DrawerProps {
    opened: boolean,
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const DrawerNavigation: NextPage<DrawerProps> = ({ opened, setOpened }) => {

    const { toggleColorScheme, colorScheme } = useMantineColorScheme()

    const toggleAndClose = () => {
        toggleColorScheme()
        setOpened(false)
    }
    return (
        <Drawer opened={opened} onClose={() => setOpened(false)} position='left'>
            <Container className='flex flex-col'>
                {navigationItems.map((item) => (
                    <Button onClick={() => setOpened(false)} key={item.url} component={NextLink} href={item.url} className='hover:bg-blue-400 my-2'>
                        {item.name}
                    </Button>

                ))}
                <Button onClick={() => setOpened(false)} className='hover:bg-blue-400 my-2' leftIcon={<RiAccountPinCircleLine size='20px' />} component={NextLink} href='/login'>
                    Login
                </Button>
                <Button className='hover:bg-blue-400 my-2' leftIcon={colorScheme === 'dark' ? <CiDark /> : <MdDarkMode />} onClick={toggleAndClose}>
                    {colorScheme === 'dark' ? 'light' : 'dark'}
                </Button>
            </Container>
        </Drawer>
    )
}

export default DrawerNavigation