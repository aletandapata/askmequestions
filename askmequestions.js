import React from 'react';
import ReactDOM from 'react-dom';

/* App: Ask Me & List Questions */

/* problem: how to write the state to the same "history" json file */

var App = React.createClass({

getInitialState: function() {
    
return {   
  
    name: "",
    msg: "",
    date: "",
    anon: "",
    listofmessages: require('./history')
    } 
 },
    



handleMsg: function(e) {

e.preventDefault();
let msg = e.target.msg.value;
let name = e.target.name.value;
let anon = e.target.anon.checked;

this.setState({

    msg: msg,
    name: name,
    anon: anon,
    date: new Date().toLocaleString(),
    

});

/* problem: here i can't  reset the form of the AskSomething Component */

},




render: function() {

return (
    <div> 
    
    <AskSomething handleMsg={this.handleMsg} />
    <ListQuestions listofmessages={this.state.listofmessages}/>
  

    </div>
        )
    }
});

/* Ask Me Something Component */

var AskSomething = React.createClass ({

render: function() {
return (
<div>
   
    <form onSubmit={this.props.handleMsg}>
       Name:
      <input type="text" name="name"/>
       Anonymous?: 
      <input type="checkbox" name="anon"/>
      <br></br>
      <textarea name="msg" rows="10" cols="90"> Be kind, do not harm. </textarea> <br></br>
      <button type="submit" name="send">Send Message</button>
    
    </form>
 </div>
    );
}
});

/* Listquestions */

/* problem: this only loads when App component re-renders */



var ListQuestions = React.createClass ({

listQuestions: function(key) {
var questions = this.props.listofmessages[key];

    return (
        
        <li key={key}>
           
             {questions.name} {questions.msg}

        </li>
    )
},

render: function() {

    return (
    <div>
    {Object.keys(this.props.listofmessages).map(this.listQuestions)} 
    
    </div>
    )
}
});
    


ReactDOM.render(<App />, document.querySelector('#root'));