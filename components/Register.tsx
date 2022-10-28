import { Button, Container, Input, Title } from "@mantine/core"
import { NextPage } from "next"
import { useRouter } from "next/router"

import { useState } from 'react'

import { axiosBaseUrl } from "../axios/axios"
import { UserAxios } from "../utils/axiosTypes"



const RegisterComponent: NextPage = () => {
    const router = useRouter()
    const [userEmail, setUserEmail] = useState<string>()
    const [userPassword, setUserPassword] = useState<string>()
    const [requestError, setUserError] = useState<string>('')

    const handleRegisterPath = () => {
        router.push('/login')
    }

    const handleRegister = async () => {

        try {
            const response: UserAxios = await axiosBaseUrl.post('/register/create', {
                email: userEmail,
                password: userPassword
            })
            const { email, id } = response.data
            if (email) localStorage.setItem('next_app_user_email', email)
            if (id) localStorage.setItem('next_app_user_id', String(id))
            router.push('/')
        } catch (error) {
            setUserError('Please Provide Valid Information and Try Again')
        }

    }
    return (
        <Container className="my-20">
            <Input size="lg" placeholder="Email Address" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value)} />
            <Input className="my-10" size="lg" placeholder="Password" type='password' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value)} />
            {requestError && (
                <Title className="text-red-500 my-5 text-center" order={5}> {requestError} </Title>
            )}
            <Button size="md" fullWidth color='pink' onClick={handleRegister}>Register</Button>

            <div className="mt-10 flex justify-center">
                <div className="flex">
                    <Title order={5}>Already Have Account?</Title>
                    <Title onClick={handleRegisterPath} className="ml-2 text-teal-500 cursor-pointer" order={5}>Login</Title>
                </div>
            </div>


        </Container>
    )
}

export default RegisterComponent