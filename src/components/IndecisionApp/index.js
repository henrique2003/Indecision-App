import React from 'react';
import Header from '../Header';
import Options from '../Options';
import AddOption from '../AddOption';
import ReactModal from '../Modal';

class IndesicionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: props.options
      }
    }

    async componentDidMount() {
      try {
        const options = await JSON.parse(localStorage.getItem('options'));

        if(options) {
          this.setState(() => ({ options }));
        }
      }
      catch (e) {
        console.log(e);
      }
    }

    async componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length) {
        try {
          const add = JSON.stringify(this.state.options) ;
          await localStorage.setItem('options', add);
        }
        catch (e) {
          console.log(`Problema em add: ${e}`);
        }
      }
    }
  
    async handleDeleteOptions() {
      try {
        await localStorage.clear('options');
      }
      catch (e) {
        console.log(`Problema em Alldelete ${e}`);
      }
      this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({ 
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
       }));
    }

    handleAddOption(option) {
      if(this.state.options.indexOf(option) > -1) {
        return "Essa opção ja existe";
      }

      this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
  
    handlePick() {
      const randomNum = Math.floor(Math
        .random() * this.state.options.length);
      const option = this.state.options[randomNum];
      return option;
    }
  
    render() {
      const subtitle = "Coloque sua atividade diária"
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            <ReactModal 
              hasOptions={this.state.options.length > 0} 
              handlePick={this.handlePick}
            />
            <div className="box">
              <Options 
                handleDeleteOptions={this.handleDeleteOptions} 
                options={this.state.options} 
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption handleAddOption={this.handleAddOption} />
            </div>
          </div>
        </div>
      );
    }
  }

  IndesicionApp.defaultProps = {
    options: []
  }

export default IndesicionApp;