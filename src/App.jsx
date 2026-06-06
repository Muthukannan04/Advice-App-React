import { Fragment } from "react"
// import { LearnComponents } from "./Components/LearnComponent"
// import { Student } from "./Components/Student"
// import ChildComponents from "./Components/ChildComponents"
// import ArraySample from "./Components/ArraySample"
// import OneOfSample from "./Components/OneOfSample"
// import Oneoftype from "./Components/Oneoftype"
import FuncSamp from "./Components/FuncSamp"


function App() {

  // Array using jsx
  // const items=[
  //   {id:1,name:"MK"},
  //   {id:2,name:"Kannan"},
  //   {id:3,name:"Guru"},
  //   {id:4,name:"Harini"},
  //   {id:5,name:"Vicky"},
  // ];

  const clicked =()=>{
    alert("Button Clicked");
  }
  return (
    <Fragment>
      {/* <div>Muthu kannan</div> */}
      {/* <LearnComponents/> */}
      {/* <Header/> */}
      {/* <Student name="Muthu Kannan" age={20} result={true} />
      <Student name="Kannan" age={23} result={false} />
      <Student name="Guru" age={16} result={true} />
      <Student name="harini" age={18} result={true} />
      <Student name="vicky" />
      <Student/>


      <ChildComponents>
        <p>This is Sample Para 1</p>
        <p>This is Sample Para 2</p>
        <p>This is Sample Para 3</p>
      </ChildComponents> */}


        {/* Array using Jsx */}
        {/* <ArraySample items={items}/> */}


        {/* OnoOf props sample */}
        {/* <OneOfSample color="violet"/> */}


        {/* Oneoftype props in jsx */}
        {/* <Oneoftype value="Muthu Kannan"/>
        <Oneoftype value={20}/>
        <Oneoftype value={true}/> */}

        <FuncSamp clicked={clicked}/>

    </Fragment>
      
  )
}

export default App
