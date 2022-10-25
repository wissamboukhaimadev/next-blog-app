import { AppShell, Button, Header, useMantineColorScheme } from "@mantine/core"
import { NextPage } from "next"
import NavigationItems from "../components/NavigationItems"

import { MdDarkMode } from 'react-icons/md'
import { CiDark } from 'react-icons/ci'
interface NavBarProps {
    children: JSX.Element
}

const Navbar: NextPage<NavBarProps> = ({ children }) => {
    const { toggleColorScheme, colorScheme } = useMantineColorScheme();
    return (
        <div>
            <AppShell
                header={
                    <Header height={70} p="md" className="bg-gray-900">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>


                            <section className="w-full flex justify-around">
                                <div />
                                <div>
                                    <NavigationItems />
                                </div>
                                <div>
                                    <Button leftIcon={colorScheme === 'dark' ? <CiDark /> : <MdDarkMode />} onClick={() => toggleColorScheme()}>
                                        {colorScheme === 'dark' ? 'light' : 'dark'}
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