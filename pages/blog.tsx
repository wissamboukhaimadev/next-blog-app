import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import PostsList from '../components/PostsList'
import { PostType } from '../utils/postType'
import { Avatar, Container, Grid, Text, Title } from '@mantine/core'




interface StarWarsPersonProps {
    posts: PostType[];
}

const blog: NextPage<StarWarsPersonProps> = ({ posts }) => {

    return (
        <div>
            <Head>
                <title>Wissam Blog</title>
            </Head>


            <Container>



                <Grid gutter='xl'>


                    {posts.map((post, index) => (
                        <PostsList key={index} post={post} />
                    ))}
                </Grid>


            </Container>
        </div>
    )
}

export default blog



export const getStaticProps: GetStaticProps = async () => {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts: PostType[] = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts
        },
    }
}
