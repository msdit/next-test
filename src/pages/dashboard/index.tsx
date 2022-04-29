import Container from '@/views/components/Container'
import MainLayout from '@/views/layouts/MainLayout'
import DashboardTemplate from '@/views/templates/DashboardTemplate'
import { withAuth } from '@/hoc'
import { NextPage } from 'next'

const Dashboard: NextPage = () => {
    return (
        <MainLayout>
            <Container className="flex-1 my-4">
                <DashboardTemplate />
            </Container>
        </MainLayout>
    )
}

export default withAuth(Dashboard, 'DASHBOARD')
