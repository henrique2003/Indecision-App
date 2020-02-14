import React from 'react';
import validator from 'validator';

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
    
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!this.state.error) {
            e.target.elements.option.value = ('');
        }
        if(validator.isEmail(option)) {
            console.log(option);
        }
      }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} className="add-option">
                    <input type="text" name="option" required/>
                    <button type="submit" className="button">Adicionar opção</button>
                </form>
            </div>
        )
    }
}

export default AddOption;