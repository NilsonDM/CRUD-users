import axios from 'axios'
import { useEffect, useState } from 'react'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'


function App() {
  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [openhiddenForm, setOpenhiddenForm] = useState(false)

  //----CALL THE API-----//
  const getAllUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
    .catch(err=> console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  console.log(users);


  //-----CREATE A NEW USER-----//
  const createNewUser = (data)=>{
    axios.post('https://users-crud1.herokuapp.com/users/', data)
    .then(res=>{
      console.log(res.data)
      getAllUsers()
    })
    .catch(err=> console.log(err))
  }



  //-----DELETE USER-----//
  const deleteUsers = (id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err=>console.log(err))
  }

  //OPEN AND CLOSE MODAL FUNCTION//
  const openForm= ()=>setOpenhiddenForm(true)
  const closeForm= ()=>setOpenhiddenForm(false)
  


  return (
    <div className="App">
      <h1 className='text-center mt-3'>Users CRUD</h1>
      <button className='btn btn-success d-block mx-auto mt-5' onClick={openForm}>Create user</button>
      <div className={openhiddenForm ? 'form-container' : 'form-hidden'}>
        <FormUsers
        createNewUser={createNewUser}
        setUpdateUser={setUpdateUser}
        updateUser={updateUser}
        getAllUsers={getAllUsers}
        closeForm={closeForm}
        />
        
      </div>
      {
        users?.map(user =>
          <UsersCard
          user={user}
          key = {user.id}
          deleteUsers={deleteUsers}
          setUpdateUser={setUpdateUser}
          openForm={openForm}
          />)
      }
    </div>
  )
}

export default App
