import { AppShell, Avatar, Burger, Button, Header, MediaQuery, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { NextPage } from "next"
import NavigationItems from "../components/NavigationItems"

import { MdDarkMode } from 'react-icons/md'
import { CiDark } from 'react-icons/ci'

import { RiAccountPinCircleLine } from 'react-icons/ri'
import { NextLink } from "@mantine/next"
import { useState } from 'react'
import DrawerNavigation from "../components/DrawerNavigation"

interface NavBarProps {
    children: JSX.Element
}

const Navbar: NextPage<NavBarProps> = ({ children }) => {

    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div>
            <AppShell
                header={
                    <Header height={70} p="md" className="bg-gray-900">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                            <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
                                <Burger
                                    opened={open}
                                    onClick={() => setOpen(true)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>


                            <DrawerNavigation opened={open} setOpened={setOpen} />
                            <section className="w-full flex justify-around hide_media_query">
                                <div />
                                <div>
                                    <NavigationItems />
                                </div>
                                <div>
                                    <Button leftIcon={colorScheme === 'dark' ? <CiDark /> : <MdDarkMode />} onClick={() => toggleColorScheme()}>
                                        {colorScheme === 'dark' ? 'light' : 'dark'}
                                    </Button>
                                    <Button className="ml-5" leftIcon={<RiAccountPinCircleLine size='20px' />} component={NextLink} href='/login'>
                                        Login
                                    </Button>
                                </div>
                            </section>

                        </div>
                    </Header>
                }
            >
                {children}
            </AppShell>
        </div>
    )
}

export default Navbar