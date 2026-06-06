import propTypes from "prop-types"

const OneOfSample = (props) => {
  const {color} = props;
  return (
    <div style={{backgroundColor:color,color:"white",padding:"20px"}}>
      <h1>OneOf Sample</h1>
      <p>This is the background Color: {color}</p> 
    </div>
  )
}

export default OneOfSample

OneOfSample.propTypes={
  color:propTypes.oneOf(["red","green","blue"]).isRequired
} 
