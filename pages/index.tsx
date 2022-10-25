import { Button, Text, Title } from '@mantine/core'
import { NextLink } from '@mantine/next'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  const openInNewTab = (href: string) => {
    window.open(href, '_blank',)
  }

  return (
    <>

      <Head>
        <title>Wissam Blog</title>
      </Head>

      <div className='pt-40'>
        <Title className='text-center'>Hi I'm wissam </Title>
        <Title className='text-center'>Software engineer with 1 year of experience </Title>
        <Text size='xl' color='green' className='text-center'>Passionate about new Technologies and Learning new Things </Text>
        <div className='flex justify-center pt-10'>
          <div>
            <Button size='md' color='pink' className='mx-5' onClick={() => openInNewTab('https://portfolio-app-vert-phi.vercel.app/')} >Portfolio</Button>
            <Button size='md' color='pink' className='mx-5' component={NextLink} href='/blog'>My Blogs</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
