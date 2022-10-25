import { Button, Grid, Text, useMantineColorScheme } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { NextPage } from "next"
import { PostType } from "../utils/postType"

interface PostProps {
    post: PostType
}

const PostsList: NextPage<PostProps> = ({ post }) => {

    const { colorScheme } = useMantineColorScheme()
    const nativeClass = colorScheme === 'dark' ? " p-2 bg-gray-800" : " p-2 shadow-lg"
    let string = post.frontmatter.excerpt
    const length = 34
    let trimmedString = string.substring(0, length);
    return (
        <Grid.Col md={6} lg={4} className='mb-10' >
            <div className={nativeClass}>
                <img className="w-full rounded-2xl" src="/images/posts/img1.jpg" alt="" />
                <Text className="pt-5 text-center"> {post.frontmatter.title} </Text>
                <Text className="py-2 text-center"> {trimmedString} ....</Text>
                <div className="flex justify-center py-2">
                    <Button size='md' color='pink' component={NextLink} href={`/blog/${post.slug}`}>Read more</Button>
                </div>
            </div>
        </Grid.Col>
    )
}

export default PostsList