import React , {Component} from 'react';

export class Todo extends Component {

    state = {
        inputText: '',
        inputText1: '',
        inputText2: '',
        inputText3: 'null'
    }

    logEvent = () => {
        console.log(this.state.inputText);
        console.log(this.state.inputText1);
        console.log(this.state.inputText2);     
        console.log(this.state.inputText3);
    }

    calEvent = (event) =>{
    	this.setState({inputText3: String( parseInt(this.state.inputText2,10) + parseInt(this.state.inputText1,10))});
    	this.forceUpdate();
    }

    handleChangeText = (event) => {

        this.setState({inputText: event.target.value});
    }

    handleChangeText1 = (event) => {

        this.setState({inputText1: event.target.value});
        
    }

    handleChangeText2 = (event) => {

        this.setState({inputText2: event.target.value});
        
    }

    render() {
        return(
            <div className="card clearfix">
            <div className="to-do-box">
                <h1 className="title">To-do-list</h1>
                <div className="form-box">
                    <input className="input input" type="text"
                        onChange={this.handleChangeText}
                        value={this.state.inputText}
                        />
                    <button className="bb-input button">Add</button>
                    <h2>{this.state.inputText}</h2>

                    <p className="control">
                        <a className="button is-info" id="btnCalculate" onClick={this.calEvent}>
                        cal
                        </a>
                    </p>
                    <p className="control">
                    	<a className="button is-info" id="btnCalculate" onClick={this.logEvent}>
                        test
                    	</a>
                    </p>
                    <div className="form-box">
                    	<input className="input input" type="text"
                    	onChange={this.handleChangeText1}
                        value={this.state.inputText1}/>
                    </div>
                    <div className="form-box">
                    	<input className="input input" type="text"
                    	onChange={this.handleChangeText2}
                        value={this.state.inputText2}/>
                    </div>
                    <div className="form-box">
                    	<h2>{this.state.inputText3}</h2>
                    </div>
                </div>



            </div>
        </div>
        )
    }
}
