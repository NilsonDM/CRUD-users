import React from 'react'

const UsersCard = ({user, deleteUsers, setUpdateUser, openForm}) => {
    
    const update = ()=>{
        setUpdateUser(user)
        openForm()
    }
  return (
  <div className='d-flex justify-content-center '>

        <div className='card w-50  m-3 border-secondary mt-5'>
            <div className='card-body text-center'>
                <h2 className='card-title'>{user['first_name']} {user['last_name']}</h2>
                <ul>
                    <li><span >Email:</span> {user.email}</li>
                    <li><span>Birthday:</span> {user.birthday}</li>
                    <li><span>Password:</span> {user.password}</li>
                </ul>
                <button className='btn btn-danger m-2' onClick={()=> deleteUsers(user.id)}>Delete</button>
                <button className='btn btn-primary' onClick={()=> update(user.id)} >Update</button>

            </div>
        </div>
  </div>

   
  )
}

export default UsersCard