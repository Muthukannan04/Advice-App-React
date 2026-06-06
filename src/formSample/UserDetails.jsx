import {useState} from 'react'

const UserDetails = () => {
     const [userName,setuserName]=useState("kanna");
     const [userAge,setUserAge]=useState(21);
     const changeName =()=>{
        // setuserName("Sam");
        userName == "kanna"? setuserName("sam") : setuserName("kanna")
     }
     const changeAge =()=>{
        // setUserAge(25)
        userAge == 21 ? setUserAge(25) : setUserAge(21)
     }

  
  return (
    <div>
      <h1>User Details</h1>
      <h3>{userName}</h3>
      <h3>{userAge}</h3>
      <button onClick={changeName}>Change User Name</button>
      <button onClick={changeAge}>Change User Age</button>
    </div>
  )
}

export default UserDetails
