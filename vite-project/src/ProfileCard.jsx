import PropTypes from 'prop-types';

function Card({name, age, isMember, hobbies, onHobbyClick}) {
    const newAge = age + 5;
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
            <h3>Age after 5 years : {newAge}</h3>
            <h3>Status : {isMember ? "Active Member" : "Guest"}</h3>
            <h3>Hobbies : </h3>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index} 
                               onClick={() => onHobbyClick(hobby)}>{hobby}</li>;
                })}
            </ul>
        </div>
    );
}

Card.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isMember : PropTypes.bool.isRequired,
    hobbies : PropTypes.arrayOf(PropTypes.string),
};

export default Card;