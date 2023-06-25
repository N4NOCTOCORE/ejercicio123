import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    // breve introduciion a useState 
    const [age, setage] = useState(20);

    const birthday = () => {
        //actualizar el state
        setage(age + 1)
    }

    return (
        <div>
                <h1>
                    hola {props.name}! 
                </h1>
                <h2>
                    tu edad es de: {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
