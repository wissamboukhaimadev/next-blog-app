import { Avatar, Container, Text, useMantineColorScheme } from "@mantine/core"
import { useRouter } from "next/router"

import { useEffect, useState } from 'react'
import { axiosBaseUrl } from "../axios/axios"
import { CommentsAxios, IComment } from "../utils/axiosTypes"

const CommentsList = () => {

    const router = useRouter()

    const { slug } = router.query

    const { colorScheme } = useMantineColorScheme()

    const [comments, setComments] = useState<IComment[]>()
    const [fetching, setFetching] = useState<boolean>(true)
    const [requestError, setRequestError] = useState<string>('')
    // const userEmail = localStorage.getItem('next_app_user_email')
    const class_name = colorScheme === 'dark' ? 'bg-gray-800 p-5 mt-3' : 'shadow-lg p-5 mt-3'

    const fetchAllComment = async () => {
        try {
            const response: CommentsAxios = await axiosBaseUrl.get(`/comments/${slug}`)
            console.log(response.data)
            setFetching(false)

            setComments(response.data)
            return response.data
        } catch (error) {

            if (!error.response.data.message === 'No One Comment To This Post') {

                setRequestError('Unexpected Error Try Again')
            }
        }
    }

    useEffect(() => {
        fetchAllComment()

    }, [slug])



    return (
        <Container className="mb-10">
            {comments && comments.map(comment => (

                <section className="my-10" key={comment.id}>
                    <div className="flex">
                        <Avatar src={null} alt="Vitaly Rtishchev" color="red" radius='lg'> {comment.author.email[0]} </Avatar>

                        <Text className="pt-1 px-5"> {comment.author.email} </Text>
                    </div>
                    <div className={class_name}>
                        <Text> {comment.body} </Text>
                    </div>
                </section>
            ))}

            {requestError && <Text className="text-red-500 my-10"> {requestError} </Text>}
        </Container>
    )
}

export default CommentsList


