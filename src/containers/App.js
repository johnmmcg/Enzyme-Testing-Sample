import React from 'react';
import Question from '../components/Question';
import 'whatwg-fetch';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data,
      selectedQuestion: null
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/v1/questions')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ data: body })
      })
  }


  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {
    let questions = this.state.data.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We are Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
      </div>
    )
  }
}

export default App;
