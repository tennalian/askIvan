import React from 'react';



module.exports = React.createClass({
	getInitialState(){
		return{
			questionArr: null,
			answerArr: null,
		}
	},
	question(){
		this.setState({
			questionArr: this.refs.text.value,
			answerArr: null
		});
		this.refs.text.value = '';
		setTimeout(this.getAnswer, 2000);
	},
	getAnswer(){
		var text = this.props.data[this.randomAnswer(0, this.props.data.length)];
		this.setState({
			answerArr: text
		});
		setTimeout(this.clearChat, 5000);
	},
	clearChat(){
		this.setState({
			questionArr: null,
			answerArr: null
		});
	},
	randomAnswer(min, max){
		return Math.floor(Math.random() * (max - min) + min);
	},
	render() {
		if (this.state.questionArr == null){
			return(
				<div className="chat">
					<div className="photo"><img src="https://i06.fotocdn.net/s6/240/user_s/440/2438576111.jpg" /></div>
			    	<div className="chat__window">
			    		<p>Ну давай же сюда свой вопрос!</p>
			    	</div>
					<div className="chat__textarea">
						<textarea className="form-control" defaultValue="" placeholder="Место для глупого вопроса" ref="text" rows="10"></textarea>
						<button type="submit" className="btn btn-success pull-right" onClick={this.question}>Задать вопрос</button>
						<div className="clearfix"></div>
					</div>
				</div>
			)
		}
		else if ((this.state.questionArr != null)&&(this.state.answerArr == null)){
			return(
				<div className="chat">
					<div className="photo"><img src="https://i06.fotocdn.net/s6/240/user_s/440/2438576111.jpg" /></div>
			    	<div className="chat__window">
			    		<div className="question"><p>{this.state.questionArr}</p></div>
			    		<div className="clearfix"></div>
			    		<div className="answer"><img src='http://www.uproducers.com/wp-content/themes/upi_website/images/load-am.gif' /></div>
			    	</div>
				</div>
			)
		}
		else{
			return (
		    	<div className="chat">
		    		<div className="photo"><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/0b2/356/0d546b4.jpg" /></div>
			    	<div className="chat__window">
			    			<div className="question"><p>{this.state.questionArr}</p></div>
			    			<div className="clearfix"></div>
			    			<div className="answer"><p>{this.state.answerArr}</p></div>
			    	</div>
				</div>
		    )
		}
	}
})
