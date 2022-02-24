export const AadadButtons = ({ onNumberClickHandler, onEqualClickHandler }) => {
  return (
    <table className="numberBtn">
      <tbody>
        <tr>
          <td>
            <button onClick={onNumberClickHandler}>+</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>3</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>2</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>1</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={onNumberClickHandler}>-</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>6</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>5</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>4</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={onNumberClickHandler}>*</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>9</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>8</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>7</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={onNumberClickHandler}>/</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>.</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>0</button>
          </td>
          <td>
            <button onClick={onNumberClickHandler}>C</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="equalButton" onClick={onEqualClickHandler}>=</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
