import { FC, createElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getToken, decodeToken } from '@/auth'
import {
    IReduxState,
    IUserStateProps,
    updateUserLoading,
    updateUsername,
} from '@/state'

const withAuth =
    (ComposedComponent: FC, type: 'LOGIN' | 'DASHBOARD') => (props: any) => {
        const router = useRouter()
        const dispatch = useDispatch()
        const user = useSelector<IReduxState, IUserStateProps>(
            (state) => state.user
        )

        useEffect(() => {
            const token = String(getToken())
            const { username } = decodeToken(token)
            if (username !== user.username) dispatch(updateUsername(username))
            if (user.userLoading) dispatch(updateUserLoading(false))
        }, [user])

        if (user.userLoading) return <div>Loading...</div>
        if (user.username && type === 'LOGIN') {
            router.push('/dashboard')
            return <div />
        }
        if (!user.username && type === 'DASHBOARD') {
            router.push('/login')
            return <div />
        }

        return createElement(ComposedComponent, props)
    }

export default withAuth
