import Container from '@/components/Container'
import MainLayout from '@/layouts/MainLayout'
import DashboardTemplate from '@/templates/DashboardTemplate'
import { withAuth } from 'hoc'
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
