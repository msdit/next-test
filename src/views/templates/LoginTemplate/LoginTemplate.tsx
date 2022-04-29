import { useForm } from 'hooks'
import { createJWT, setToken } from 'auth'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button'

interface ILoginTemplateProps {}

const LoginTemplate: FC<ILoginTemplateProps> = (props) => {
    const router = useRouter()
    const [showError, setShowError] = useState(false)
    const { formFields, createChangeHandler } = useForm({
        username: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { username, password } = formFields
        if (username === '09120000000' && password === '00000') {
            const token = createJWT({ username }, 5 * 60)
            setToken(token)
            router.push('/dashboard')
        } else setShowError(true)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="shadow-xl rounded-md p-6 w-96 flex flex-col justify-center items-center bg-white"
        >
            <h1 className="font-bold text-3xl mb-4">Sign in</h1>
            <Input
                className="w-full"
                type="text"
                id="username"
                label="username"
                value={formFields.username}
                onChange={createChangeHandler('username')}
            />
            <Input
                className="w-full"
                type="password"
                id="password"
                label="password"
                value={formFields.password}
                onChange={createChangeHandler('password')}
            />
            {showError && (
                <p className="text-red-700 text-sm m-4">
                    Incorrect username or password!
                </p>
            )}
            <Button id="submitLogin" type="submit">Login!</Button>
        </form>
    )
}

export default LoginTemplate
