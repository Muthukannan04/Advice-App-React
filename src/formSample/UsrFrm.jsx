import  { useState } from 'react'
import './RegFrm.css'
const UsrFrm = () => {
    const[user,setuser]=useState({
        name:"Muthu kannan",
        age :22,
        gender:"Male",
        isMarried:true,
        country:"India",
        bio:"Write about You"
    })
     function changeHandler(e){
        const name=e.target.name;
        //console.log(name)
        const value=e.target.type==="checkbox"?e.target.checked:e.target.value;

        //deconstructing
        setuser({...user,[name]:value})
    }
  return (
   <>
    {/* <h1>User Form</h1> */}
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Martial Status</td>
                <td>{user.isMarried?"Married":"Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio}</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type="text" placeholder='Enter the Name' value={user.name} onChange={changeHandler} name="name"/>
        <input type="number" placeholder='Enter the Age' value={user.age} onChange={changeHandler} name="age"/>
        <div className='gender'>
            <label htmlFor='male'>
                <input type="radio" name="gender" id="male" onChange={changeHandler} value="Male" checked={user.gender=="Male"}/>
                Male</label>
            <label htmlFor='female'>
                <input type="radio" name="gender" id="female" onChange={changeHandler} value="Female" checked={user.gender=="Female"}/>
                Female</label>
        </div>
        <label htmlFor='isMarried'>
            <input type="checkbox" id="isMarried" onChange={changeHandler} value={user.isMarried} checked={user.isMarried} name="isMarried"/>Is Married</label>
            <div className='select-div'>
                <label htmlfor="country">Select Country</label>
                <select name="country" id="country" value={user.country} onChange={changeHandler}>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK"></option>
                    <option value="Japan">Japan</option>
                </select>
             </div>
                    <textarea name="bio" id="bio" placeholder='write about you' cols="30" rows="5" onChange={changeHandler} value={user.bio}></textarea>
                
    </form>
    </>
  )
}

export default UsrFrm
