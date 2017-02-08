import React, {Component} from 'react' ;
//import './bootstrap.css';
import './Todo.css';
import './bulma.css';
// slide 185
export class Todo extends Component {
	state = {
		inputText: '',
		listItem: []
	}

	submitList = () => {
		this.setState({
			listItem: this.state.listItem.concat([this.state.inputText]),
			inputText:''
		})
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.submitList();
		}
	}

	handleChangeText = (event) => {
		this.setState({inputText: event.target.value});
	}

	deleteListAtIndex = (index) => {
		const resule = this.state.listItem;
		resule.splice(index,1);
		this.setState({
			listItem: resule
		});
	}
	render() {
		return (
			<div className="card clearfix">
				<div className="to-do-box">
					<h1 className="title">To-do-list</h1>
					<div className="form-box">
						<input className="input-todo" 
							type="text"
							onChange={this.handleChangeText}
							value={this.state.inputText}
							placeholder="what do you want to do?"
							onKeyPress={this.handleKeyPress}/>
						<button className="bb-input button"
							onClick={this.submitList}>Add</button>
					</div>

						<div className="list-box">
                {this.state.listItem.map((value, index) => {
                    return (
                      <div key={index + value}
                           className="list-item">
                          <div className="text-list">{value}</div>
                          <div className="bb-action"
                               onClick={this.deleteListAtIndex.bind(this, index)}>x</div>
                      </div>
                    );
                })}
              </div>

          </div>
      </div>
    );
  }
}