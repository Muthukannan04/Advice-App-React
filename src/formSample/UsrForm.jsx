import {useState} from 'react'

const UsrForm = () => {
    const [User,setUser]=useState({fname:"Mk",lname:"P",age:23});
    // function changeName(e){
    //     const newStateObject={...User};
    //     newStateObject.name =e.target.value;
    //     setUser(newStateObject)
    // }

    //Using single arrow func
    // setUser((oldState)=>{
    //     return{...oldState,name:e.target.value}
    // });
    
    // }
    // function changeAge(e){
    //    const newStateobj={...User};
    //     newStateobj.age=e.target.value;
    //     setUser(newStateobj);

    // setUser((oldState)=>{
    //     return{
    //         ...oldState,age:e.target.value
    //     }
    // })
    // }


    //Using single function to handle all this
    function changeState(e){
        setUser({
            ...User,[e.target.name]:e.target.value
        })

    }
  return (
    <form>
        <h2>
            {User.fname} {User.lname}, {User.age}
        </h2>
        {/* <input type="text" placeholder='Enter the Name' value={User.name} onChange={changeName}/>
        <input type="text" placeholder='Enter the Age' value={User.age} onChange={changeAge}/> */}

        <input type="text" placeholder='Enter the First Name' value={User.fname} onChange={changeState} name="fname"/>
         <input type="text" placeholder='Enter the Last Name' value={User.lname} onChange={changeState} name="lname"/>

        <input type="text" placeholder='Enter the Age' value={User.age} onChange={changeState} name="age"/>

    </form>
  )
}

export default UsrForm
