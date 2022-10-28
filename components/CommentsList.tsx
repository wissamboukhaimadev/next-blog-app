import { Avatar, Container, Text, useMantineColorScheme } from "@mantine/core"
import { useRouter } from "next/router"

import { useEffect, useState } from 'react'
import { axiosBaseUrl } from "../axios/axios"
import { CommentsAxios, IComment } from "../utils/axiosTypes"

interface ErrorRequest{
    response:{
        data:{
            message:string
        }
    }
}

const CommentsList = () => {

    const router = useRouter()

    const { slug } = router.query

    const { colorScheme } = useMantineColorScheme()

    const [comments, setComments] = useState<any>()
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
        } catch (error:any) {
                setRequestError(error.response.data.message)
            
        }
    }

    useEffect(() => {
        fetchAllComment()

    }, [slug])



    return (
        <Container className="mb-10">
            {comments && comments.map((comment:any) => (

                <section className="my-10" key={comment.id}>
                    <div className="flex">
                        <Avatar src={null} alt="Vitaly Rtishchev" color="red" radius='lg'> {comment.author.email[0] as string} </Avatar>

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


