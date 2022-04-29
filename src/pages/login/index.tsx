import { withAuth } from '@/hoc'
import MainLayout from '@/views/layouts/MainLayout'
import LoginTemplate from '@/views/templates/LoginTemplate'
import { NextPage } from 'next'

const Login: NextPage = () => {
    return (
        <MainLayout>
            <div className="flex-1 flex justify-center items-center">
                <LoginTemplate />
            </div>
        </MainLayout>
    )
}

export default withAuth(Login, 'LOGIN')
