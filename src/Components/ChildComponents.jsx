import PropTypes from "prop-types"

const ChildComponents = (props) => {
  return (
    <div>
      {props.children} 
    </div>
  )
}

export default ChildComponents
ChildComponents.prototype={
    children:PropTypes.array,
}