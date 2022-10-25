import { Container, List, Text, Title, useMantineColorScheme } from "@mantine/core"
import Head from "next/head"

const about = () => {

    const { colorScheme } = useMantineColorScheme()

    const first_shadow_bg_class = colorScheme === 'dark' ? "p-5 bg-indigo-800 rounded-xl" : "shadow-lg p-5 rounded-xl"
    const shadow_bg_class = colorScheme === 'dark' ? "my-10 bg-indigo-800 p-5 rounded-xl" : "my-10 shadow-lg p-5 rounded-xl"
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <Container className="py-10" classNames='flex justify-center'>
                <section className="text-center ">
                    <div className={first_shadow_bg_class}>
                        <Title >Who am I?</Title>
                        <Text size='xl' className="font-bold" >I'm wissam</Text>
                        <Text className=" py-1">18 years Old, 1 year of experience in software engineering</Text>
                        <Text className=" py-1">I build a few projects over this year and now I'm studying electronics and working for new opportunities in Software engineering</Text>
                        <Text className=" py-1">18 years Old 1 year of experience in software engineering</Text>
                    </div>
                    <div className={shadow_bg_class}>
                        <Title >Projects you work on? </Title>
                        <Text className="py-1">My first Project Was a simple todo app it was simple and it was created using: <span className="text-yellow-400 font-bold">React, Expressjs and MongoDB</span>  </Text>
                        <Text className="py-1">Second Project was a simple invoices extraction it was for a company it was created using: <span className="text-yellow-400 font-bold">React, Express, MongoDB, Mui and tailwindcss</span> </Text>

                        <Text className="py-2">Third Project it was A video call app it was created using: <span className="text-yellow-400 font-bold">Nextjs, Mantine Ui, tailwindcss, Websockets, WebRTC, Postgresql and Nestjs  </span>  it was really fun ♥</Text>
                    </div>
                    <div className={shadow_bg_class}>
                        <Title>Frontend Technologies I'm Familiar with?</Title>
                        <Text className="py-1 font-bold">I've Been working with mutilple Javascript Framework Such as :</Text>
                        <List className="text-left pl-20">
                            <List.Item className="py-1">React</List.Item>
                            <List.Item className="py-1">Angular</List.Item>
                            <List.Item className="py-1">Solidjs</List.Item>
                            <List.Item className="py-1">Flutter</List.Item>
                            <List.Item className="py-1">React Native</List.Item>
                            <List.Item className="py-1">Electron</List.Item>
                            <List.Item className="py-1">Redux</List.Item>
                            <List.Item className="py-1">Zustand</List.Item>
                            <List.Item className="py-1">TailwindCss</List.Item>
                        </List>
                    </div>
                    <div className={shadow_bg_class}>
                        <Title>Backend Technologies I'm Familiar with?</Title>
                        <Text className="py-1 font-bold">I've Been working with mutilple Technologies Such as :</Text>
                        <List className="text-left pl-20">
                            <List.Item className="py-1">Express</List.Item>
                            <List.Item className="py-1">Nestjs</List.Item>
                            <List.Item className="py-1">Go</List.Item>
                        </List>
                    </div>
                    <div className={shadow_bg_class}>
                        <Title>Other Technologies I'm Familiar with?</Title>
                        <Text className="py-1 font-bold">I've Been working with Other Technologies Such as :</Text>
                        <List className="text-left pl-20">
                            <List.Item className="py-1">RabbitMQ</List.Item>
                            <List.Item className="py-1">Docker</List.Item>
                            <List.Item className="py-1">Kubernetes</List.Item>
                            <List.Item className="py-1">Http 1.1 / Http 2.0 </List.Item>
                            <List.Item className="py-1">Microservice and Monolithic architectures </List.Item>
                        </List>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default about