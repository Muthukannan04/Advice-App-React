import PropTypes from "prop-types";

export const Student = ({
  name = "Unknown",
  age = 0,
  result = false,
}) => {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>

          <tr>
            <th>Age</th>
            <td>{age}</td>
          </tr>

          <tr>
            <th>Result</th>
            <td>{result ? "Pass" : "Fail"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  result: PropTypes.bool,
};