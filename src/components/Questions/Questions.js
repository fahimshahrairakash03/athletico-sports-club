import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions-field">
      <div className="question">
        <h3>How does react work:</h3>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your
          code.Users can create a representation of a DOM node by declaring the
          Element function in React. JSX tags have a name, children, and
          attributes. Numeric values and expressions must be written inside
          curly brackets. The quotation marks in JSX attributes represent
          strings, similarly to JavaScript.
        </p>
      </div>
      <div id="table" className="question">
        <h3>Props vs State</h3>
        <table>
          <tr>
            <th>Props</th>
            <th>State</th>
          </tr>
          <tr>
            <td>The Data is passed from one component to another.</td>
            <td>The Data is passed within the component only.</td>
          </tr>
          <tr>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
          </tr>
          <tr>
            <td>Props can be used with state and functional components.</td>
            <td>
              State can be used only with the state components/class component
            </td>
          </tr>
          <tr>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
          </tr>
        </table>
      </div>
      <div className="question">
        <h3>What does useEffet do except data Load</h3>
        <p>
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: directly updating the
          DOM, and timers. callback is the function containing the side-effect
          logic. callback is executed right after changes were being pushed to
          DOM. dependencies is an optional array of dependencies. useEffect()
          executes callback only if the dependencies have changed between
          renderings.
        </p>
      </div>
    </div>
  );
};

export default Questions;
