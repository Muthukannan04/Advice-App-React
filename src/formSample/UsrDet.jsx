import {useState} from 'react'

const UsrDet = () => {
      // using single Usestate with two object
    const [user,setuser]=useState({name:"kanna",age:22});
    const changeName=()=>{
        setuser({...user, name: "sam"});
    }
    const changeAge=()=>{
        setuser({...user, age: 25});
    }
  return (
    <>
    <h1>
        User Details</h1>
        <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <button onClick={changeName}>Change User Name</button>
      <button onClick={changeAge}>Change User Age</button>
    </>
  )
}

export default UsrDet
