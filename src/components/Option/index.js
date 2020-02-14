import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="text">{ props.count }. { props.option }</p>
            <button onClick={() => {
                props.handleDeleteOption(props.option)
            }} >Remove</button>
        </div>
    )
}

export default Option;