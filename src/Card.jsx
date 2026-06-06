import PropTypes from 'prop-types'
const userData=[
    {
        name:"MuthuKannan",
        location:"New york",
        description:"Full Stack Developer",
        skills:["HTML", "CSS", "JavaScript", "React", "Node.js", "Java"],
        Online:false,
        profile:"public/PCE_7054 copy.jpg"
    },
    {
        name:"John Doe",
        location:"Los Angeles",
        description:"Frontend Developer",
        skills:["HTML", "CSS", "JavaScript", "React"],
        Online:true,
        profile:"img1.jpg"
    },
    {
        name:"Jane Smith",
        location:"Chicago",
        description:"Backend Developer",
        skills:["Python", "Django", "PostgreSQL", "Docker"],
        Online:false,
        profile:"2.jpg"
    }
]
function User(props) {
    return(
        <div className="card-container">
            <span className={props.Online ?"pro online":"pro offline"}>{props.Online ?"Online":"Offline"}</span>
            <img src={props.profile} className="img" alt="Profile"/>
            <h3>{props.name}</h3>
            <h3>{props.location}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Follow</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>    
                <ul>
                  {props.skills.map((skill,index)=><li key={index}>{skill}</li>)}
                </ul>
            </div> 


        </div>
    )
}
const Card = () => {
  return (

    //   <User name="MuthuKannan" location="New york" description="Full Stack Developer" skills={["HTML", "CSS", "JavaScript", "React", "Node.js", "Java"]} Online={false} profile="public/PCE_7054 copy.jpg"/>
    <>
    {userData.map((userDa,index)=><User key={index} name={userDa.name} location={userDa.location} description={userDa.description} skills={userDa.skills} Online={userDa.Online} profile={userDa.profile}/>)}
    </>
  )
}

export default Card


User.propTypes={
        name:PropTypes.string.isRequired,
        location:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        skills:PropTypes.arrayOf(PropTypes.string).isRequired,
        Online:PropTypes.bool.isRequired,
        profile:PropTypes.string.isRequired
}
