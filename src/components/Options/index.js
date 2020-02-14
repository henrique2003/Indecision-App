import React from 'react';
import Option from '../Option';

const Options = (props) => {
    return (
        <div>
            <div className="box-header">
                <h3>Suas opções</h3>
                <button 
                className="button buttonDelete"
                onClick={props.handleDeleteOptions} 
                >
                    Deletar tudo
                </button>
            </div>
            {props.options.length === 0 && <p className="message">Por favor adicione uma opção para começar?</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                    key={option} 
                    option={option} 
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

export default Options;