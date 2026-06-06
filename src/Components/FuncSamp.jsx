import PropTypes from 'prop-types'

const FuncSamp = (props) => {
    const {clicked} = props;
  return (
    <div>
      <h2>Function sample using props </h2>
      <button onClick={clicked}>Click Me</button>
    </div>
  )
}

export default FuncSamp


FuncSamp.propsropTypes={
    clicked:PropTypes.func.isRequired,
}