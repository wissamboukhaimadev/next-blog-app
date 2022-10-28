import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Container, Text, useMantineColorScheme } from '@mantine/core'
import { NextLink } from '@mantine/next'
import Head from 'next/head'
import Comments from '../../components/Comments'
import CommentsList from '../../components/CommentsList'

interface IBlogProps {
    frontmatter: any
    slug: any
    content: any
}


const BlogPost: NextPage<IBlogProps> = ({
    frontmatter: { title, date, cover_image },
    slug,
    content,
}) => {


    const { colorScheme } = useMantineColorScheme()

    let dark_light_class = colorScheme === 'dark' ? "p-10 bg-gray-900 " : "shadow-lg p-10"
    return (
        <>
            <Head>
                <title> wissam </title>
            </Head>
            <Container className={dark_light_class}>
                <Button color='cyan' size='md' component={NextLink} href='/blog'>
                    Go Back
                </Button>
                <div className=''>
                    <h1 className='text-center'>{title}</h1>
                    <div className='pb-5 font-bold text-center text-teal-800'>Posted on {date}</div>

                    <img className='w-full ' src={cover_image} alt='' />

                    <div >
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </div>
                </div>
            </Container>
            <Comments />
            <CommentsList />
        </>
    )
}

export default BlogPost



export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }: any) => {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
