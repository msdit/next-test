import { ChangeEvent, useState } from 'react'

export function useForm<T>(initialValues: T) {
    const [formFields, setFormFields] = useState<T>(initialValues)
    const createChangeHandler =
        (key: keyof T) => (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setFormFields((prev: T) => ({ ...prev, [key]: value }))
        }
    const resetForm = () => {
        setFormFields(initialValues)
    }
    return { formFields, createChangeHandler, resetForm }
}