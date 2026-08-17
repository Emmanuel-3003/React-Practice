function ProfileCard(props) {
    const status = props.isMember ? "Active" : "Guest";
    return (
        <div>
            <h3>Name : {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Status : {status}</h3>
            <h3>Hobbies : </h3>
            <ul>
                {props.hobbies.map((hobby, index) => {
                    return <li key = {index} onClick = {() => props.onHobbyClick(hobby)}>{hobby}</li>;
                })}
            </ul>
        </div>
    );
}

export default ProfileCard;