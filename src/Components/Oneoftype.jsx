import PropTypes from "prop-types"

const Oneoftype = (props) => {
  return (
    <div>
      <h1>This is value: {props.value}</h1>
    </div>
  )
}

export default Oneoftype

Oneoftype.propTypes={
  value:PropTypes.oneOfType([
    PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
}