import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <Link href="/login" passHref>
            <a>Go to login</a>
        </Link>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: '/login',
            permanent: false,
            // statusCode: 301
        },
    }
}

export default Home
