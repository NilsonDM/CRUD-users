import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const defaultValue = {
    first_name: '',
    last_name: '',
    birthday: '',
    email: '',
    password: ''
}

const FormUsers = ({ createNewUser, updateUser, setUpdateUser, getAllUsers, closeForm }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
        }
    }, [updateUser])

    const submit = (data) => {
        if (updateUser) {
            axios.patch(`https://users-crud1.herokuapp.com/users/${updateUser.id}/`, data)
                .then(res => {
                    console.log(res.data)
                    getAllUsers()
                })
                .catch(err => console.log(err))
            reset(defaultValue)
            setUpdateUser()
        } else {
            createNewUser(data)
            reset(defaultValue)

        }
        closeForm()
    }
    return (
   

            <form onSubmit={handleSubmit(submit)}>
                <button className='x-button' onClick={closeForm}><i class="fas fa-times"></i></button>
                <h2>{updateUser ? 'Update user' : 'Create new user'}</h2>
                <div>
                    <label htmlFor="first_name">First name:</label>
                    <input {...register('first_name')} type="text" id='first_name' />
                </div>

                <div>
                    <label htmlFor="last_name">Last name:</label>
                    <input {...register('last_name')} type="text" id='last_name' />
                </div>

                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input {...register('birthday')} type="text" id='birthday' />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input {...register('email')} type="text" id='email' />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input {...register('password')} type="password" id='password' />
                </div>
                <button className='btn btn-success m-2 d-block mx-auto'>{updateUser ? 'Update' : 'Create'}</button>
            </form>
      
    )
}

export default FormUsers