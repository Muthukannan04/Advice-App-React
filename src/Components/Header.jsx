import React from 'react'


// const Header =()=>{
//   return React.createElement('div', null,
//     React.createElement('h1', {className: 'title'}, 'Muthu Kannan'),
//     React.createElement('p', {className: 'quotes'}, 'Art Of Observing')
//   )  
// };
// export default Header





const Header =()=>{
  const customCss = "error";
  const login=false;
  const greeting = login ? "Welcome Muthu Kannan" : "Welcome Guest";
  const item=["apple", "banana", "grapes"];
  return(
    
    <div>
      <h1 className='title'>Muthukannan</h1>
      <p className="quotes">Art of Observing</p>

      {/* javascript expression in jsx */}
      <p className={customCss} style={{fontSize:"50px"}}>10+5={10+5}</p>
      
      
      
      {/* jsx conditional rendering */}
      <h2>{greeting}</h2>

      <ul>
        {item.map((fruit,index)=>
          (<li key={index}>{fruit}</li>))
        }
      </ul>

      {/* jsx with lists */}

    </div>
  );
}

export default Header

 

 
