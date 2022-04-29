import { withAuth } from 'hoc'
import MainLayout from '@/layouts/MainLayout'
import LoginTemplate from '@/templates/LoginTemplate'
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
