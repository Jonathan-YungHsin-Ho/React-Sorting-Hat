import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 50%;
  margin: 50px auto;
  background-color: white;
  opacity: 0.9;
  padding: 30px 3%;
  border-radius: 20px;

  .question {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 30px;

    p {
      align-self: center;
    }
  }

  button {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    padding: 10px 10%;
  }
`;

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const answerArray = Object.values(this.state);
    // console.log(answerArray);
    const counts = answerArray.reduce((accumulator, current) => {
      accumulator[current] = (accumulator[current] || 0) + 1;
      return accumulator;
    }, {});
    // console.log(counts);
    const maxCount = Math.max(...Object.values(counts));
    // console.log(maxCount);
    const mostFrequent = Object.keys(counts).filter(
      house => counts[house] === maxCount,
    );
    // console.log(mostFrequent);

    if (mostFrequent.length > 1) {
      const random = Math.floor(Math.random() * mostFrequent.length);
      // console.log(random);
      this.props.history.push(`/${mostFrequent[random]}`);
    } else {
      this.props.history.push(`/${mostFrequent[0]}`);
    }
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <div className="question">
            <p>Please select your favorite colors...</p>
            <div>
              <label for="q1gryff">
                <input
                  type="radio"
                  id="q1gryff"
                  name="q1"
                  value="gryffindor"
                  onChange={this.handleChange}
                  checked={this.state.q1 === 'gryffindor'}
                />
                Scarlet and gold
              </label>
            </div>
            <br />
            <div>
              <label for="q1huff">
                <input
                  type="radio"
                  id="q1huff"
                  name="q1"
                  value="hufflepuff"
                  onChange={this.handleChange}
                  checked={this.state.q1 === 'hufflepuff'}
                />
                Yellow and black
              </label>
            </div>
            <br />
            <div>
              <label for="q1raven">
                <input
                  type="radio"
                  id="q1raven"
                  name="q1"
                  value="ravenclaw"
                  onChange={this.handleChange}
                  checked={this.state.q1 === 'ravenclaw'}
                />
                Blue and bronze
              </label>
            </div>
            <br />
            <div>
              <label for="q1slyth">
                <input
                  type="radio"
                  id="q1slyth"
                  name="q1"
                  value="slytherin"
                  onChange={this.handleChange}
                  checked={this.state.q1 === 'slytherin'}
                />
                Emerald green and Sssilver
              </label>
            </div>
          </div>
          <div className="question">
            <p>Please select your classical element...</p>
            <div>
              <label for="q2gryff">
                <input
                  type="radio"
                  id="q2gryff"
                  name="q2"
                  value="gryffindor"
                  onChange={this.handleChange}
                  checked={this.state.q2 === 'gryffindor'}
                />
                Fire
              </label>
            </div>
            <br />
            <div>
              <label for="q2huff">
                <input
                  type="radio"
                  id="q2huff"
                  name="q2"
                  value="hufflepuff"
                  onChange={this.handleChange}
                  checked={this.state.q2 === 'hufflepuff'}
                />
                Earth
              </label>
            </div>
            <br />
            <div>
              <label for="q2raven">
                <input
                  type="radio"
                  id="q2raven"
                  name="q2"
                  value="ravenclaw"
                  onChange={this.handleChange}
                  checked={this.state.q2 === 'ravenclaw'}
                />
                Air
              </label>
            </div>
            <br />
            <div>
              <label for="q2slyth">
                <input
                  type="radio"
                  id="q2slyth"
                  name="q2"
                  value="slytherin"
                  onChange={this.handleChange}
                  checked={this.state.q2 === 'slytherin'}
                />
                Water
              </label>
            </div>
          </div>
          <div className="question">
            <p>Please select your favorite animal...</p>
            <div>
              <label for="q3gryff">
                <input
                  type="radio"
                  id="q3gryff"
                  name="q3"
                  value="gryffindor"
                  onChange={this.handleChange}
                  checked={this.state.q3 === 'gryffindor'}
                />
                Lion
              </label>
            </div>
            <br />
            <div>
              <label for="q3huff">
                <input
                  type="radio"
                  id="q3huff"
                  name="q3"
                  value="hufflepuff"
                  onChange={this.handleChange}
                  checked={this.state.q3 === 'hufflepuff'}
                />
                Badger
              </label>
            </div>
            <br />
            <div>
              <label for="q3raven">
                <input
                  type="radio"
                  id="q3raven"
                  name="q3"
                  value="ravenclaw"
                  onChange={this.handleChange}
                  checked={this.state.q3 === 'ravenclaw'}
                />
                Eagle
              </label>
            </div>
            <br />
            <div>
              <label for="q3slyth">
                <input
                  type="radio"
                  id="q3slyth"
                  name="q3"
                  value="slytherin"
                  onChange={this.handleChange}
                  checked={this.state.q3 === 'slytherin'}
                />
                Ssserpent
              </label>
            </div>
          </div>
          <div className="question">
            <p>Which of the following describes you?</p>
            <div>
              <label for="q4gryff">
                <input
                  type="radio"
                  id="q4gryff"
                  name="q4"
                  value="gryffindor"
                  onChange={this.handleChange}
                  checked={this.state.q4 === 'gryffindor'}
                />
                Brave and daring
              </label>
            </div>
            <br />
            <div>
              <label for="q4huff">
                <input
                  type="radio"
                  id="q4huff"
                  name="q4"
                  value="hufflepuff"
                  onChange={this.handleChange}
                  checked={this.state.q4 === 'hufflepuff'}
                />
                Hardworking and loyal
              </label>
            </div>
            <br />
            <div>
              <label for="q4raven">
                <input
                  type="radio"
                  id="q4raven"
                  name="q4"
                  value="ravenclaw"
                  onChange={this.handleChange}
                  checked={this.state.q4 === 'ravenclaw'}
                />
                Intelligent and witty
              </label>
            </div>
            <br />
            <div>
              <label for="q4slyth">
                <input
                  type="radio"
                  id="q4slyth"
                  name="q4"
                  value="slytherin"
                  onChange={this.handleChange}
                  checked={this.state.q4 === 'slytherin'}
                />
                Ambitious and resourceful
              </label>
            </div>
          </div>
          <div className="question">
            <p>Please select your favorite wizard celebrity...</p>
            <div>
              <label for="q5gryff">
                <input
                  type="radio"
                  id="q5gryff"
                  name="q5"
                  value="gryffindor"
                  onChange={this.handleChange}
                  checked={this.state.q5 === 'gryffindor'}
                />
                Albus Dumbledore
              </label>
            </div>
            <br />
            <div>
              <label for="q5huff">
                <input
                  type="radio"
                  id="q5huff"
                  name="q5"
                  value="hufflepuff"
                  onChange={this.handleChange}
                  checked={this.state.q5 === 'hufflepuff'}
                />
                Newt Scamander
              </label>
            </div>
            <br />
            <div>
              <label for="q5raven">
                <input
                  type="radio"
                  id="q5raven"
                  name="q5"
                  value="ravenclaw"
                  onChange={this.handleChange}
                  checked={this.state.q5 === 'ravenclaw'}
                />
                Ignatia Wildsmith
              </label>
            </div>
            <br />
            <div>
              <label for="q5slyth">
                <input
                  type="radio"
                  id="q5slyth"
                  name="q5"
                  value="slytherin"
                  onChange={this.handleChange}
                  checked={this.state.q5 === 'slytherin'}
                />
                Merlin
              </label>
            </div>
          </div>
          <div className="question">
            <p>Please select your favorite ghost...</p>
            <div>
              <label for="q6gryff">
                <input
                  type="radio"
                  id="q6gryff"
                  name="q6"
                  value="gryffindor"
                  onChange={this.handleChange}
                  checked={this.state.q6 === 'gryffindor'}
                />
                Nearly Headless Nick
              </label>
            </div>
            <br />
            <div>
              <label for="q6huff">
                <input
                  type="radio"
                  id="q6huff"
                  name="q6"
                  value="hufflepuff"
                  onChange={this.handleChange}
                  checked={this.state.q6 === 'hufflepuff'}
                />
                Fat Friar
              </label>
            </div>
            <br />
            <div>
              <label for="q6raven">
                <input
                  type="radio"
                  id="q6raven"
                  name="q6"
                  value="ravenclaw"
                  onChange={this.handleChange}
                  checked={this.state.q6 === 'ravenclaw'}
                />
                Grey Lady
              </label>
            </div>
            <br />
            <div>
              <label for="q6slyth">
                <input
                  type="radio"
                  id="q6slyth"
                  name="q6"
                  value="slytherin"
                  onChange={this.handleChange}
                  checked={this.state.q6 === 'slytherin'}
                />
                Bloody Baron
              </label>
            </div>
          </div>
          <br />
          <button type="submit">Sort!</button>
        </form>
      </FormWrapper>
    );
  }
}

export default Questions;
