import App from '../../src/containers/App';
import Question from '../../src/components/Question';

describe('App', () => {
  let wrapper,
      id,
      question,
      answer;


  let data = [
    {
      id: 1,
      question: 'What is Launch Academy?',      answer: 'Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team',
      onClick: jasmine.any(Function)
    }
  ];

  beforeEach(() => {
    spyOn(App.prototype, 'toggleQuestionSelect').and.callThrough();
    wrapper = mount(
      <App data={data} />
    )
  })

  it('should have specified initial state', () => {
    expect(wrapper.state('selectedQuestion')).toEqual(null)
  })

  it('should render a Question component', () => {
    expect(wrapper.find(Question)).toBePresent();
  })

  describe('handleClick', () => {
    it('should be invoked when the onClick function of the child Tweet component is called', () => {
      wrapper.find('i').props().onClick();
      expect(App.prototype.toggleQuestionSelect).toHaveBeenCalled();
    })
    it('should toggle the Question select state', () => {
      console.log(wrapper.state());
      wrapper.find('i').props().onClick();
      expect(wrapper.state('selectedQuestion')).toEqual(1)
    })
  })

});
