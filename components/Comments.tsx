import { Avatar, Button, Input, Text, Title } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from 'react'
import { axiosBaseUrl } from "../axios/axios"
import { CommentsAxios } from "../utils/axiosTypes"

import toast, { Toaster } from 'react-hot-toast';

const Comments: NextPage = () => {


    const router = useRouter()
    const [comment, setComment] = useState<string>('')
    const [requestError, setRequestError] = useState<string>('')


    const { slug } = router.query
    const handleCreateComment = async () => {

        const userEmail = localStorage.getItem('next_app_user_email')
        const userId = localStorage.getItem('next_app_user_id')
        console.log('userId', userId)



        if (userId) {
            try {
                const response: CommentsAxios = await axiosBaseUrl.post('/comments/create', {
                    body: comment,
                    authorId: Number(userId),
                    postTitle: slug
                })

                toast.success('comment created Successfully')
                router.reload()


            } catch (error) {
                toast.error('Unexpected Error While Creating Comment Try Again ')
            }

        }

        if (!userEmail || !userId) {

            router.push('/login')
        }

    }
    return (
        <div className="flex justify-center my-10">
            <section >

                <div className="pt-2">
                    <Input  size="lg" className="w-80" placeholder="your comment..." value={comment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} />
                </div>
                <div className="mt-5 flex justify-center">
                    <Button color='pink' size="md" onClick={handleCreateComment}>Comment</Button>
                </div>

            </section>

            <Toaster />
            {requestError && <Title order={5} className='my-5 text-red-500'> {requestError} </Title>}

        </div>
    )
}

export default Comments