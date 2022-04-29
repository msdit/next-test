import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, IDataStateProps, IReduxState } from 'state'
import { useForm } from 'hooks'
import Button from '@/components/Button'
import Input from '@/components/Input'

interface IAddUserFormProps {}

const AddUserForm: FC<IAddUserFormProps> = () => {
    const [isFormShow, setIsFormShow] = useState(false)
    const [showError, setShowError] = useState(false)

    const { userList } = useSelector<IReduxState, IDataStateProps>(
        (state) => state.data
    )

    const { formFields, createChangeHandler, resetForm } = useForm({
        name: '',
        email: '',
    })

    const dispatch = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (userList.find((u) => u.email === formFields.email)) {
            setShowError(true)
            return
        }
        dispatch(
            addData({
                ...formFields,
                joinDate: new Date(),
            })
        )
        setShowError(false)

        setIsFormShow(false)
        resetForm()
    }

    function handleAdd() {
        setIsFormShow(true)
    }

    function handleCancle(e: React.FormEvent) {
        e.preventDefault()
        setIsFormShow(false)
        resetForm()
    }

    if (!isFormShow)
        return (
            <div className="float-right mb-4">
                <Button id="addUser" varient="bordered" onClick={handleAdd}>
                    + Add user
                </Button>
            </div>
        )

    return (
        <div className="mb-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center md:items-end"
            >
                <Input
                    className="w-full md:w-auto md:flex-1 md:mr-4"
                    type="text"
                    id="name"
                    label="name"
                    value={formFields.name}
                    onChange={createChangeHandler('name')}
                />
                <Input
                    className="w-full md:w-auto md:flex-1 md:mr-4"
                    type="email"
                    id="email"
                    label="email"
                    value={formFields.email}
                    onChange={createChangeHandler('email')}
                />
                <div className="flex flex-row justify-center items-center w-full md:w-auto">
                    <Button
                        id="submitAddUser"
                        className="mr-4 flex-1 md:grow-0"
                        type="submit"
                        disabled={
                            formFields.name === '' || formFields.email === ''
                        }
                    >
                        Add
                    </Button>
                    <Button
                        id="cancleAddUser"
                        className="flex-1 md:grow-0"
                        onClick={handleCancle}
                        varient="bordered"
                    >
                        Cancle
                    </Button>
                </div>
            </form>
            {showError && (
                <p className="text-red-700 text-sm mb-4">Email has saved!</p>
            )}
        </div>
    )
}

export default AddUserForm
