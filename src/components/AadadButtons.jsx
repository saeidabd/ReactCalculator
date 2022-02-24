import "./aadadButtons.css";
export const AadadButtons = ({ onAadadClickHandler }) => {
  return (
    <table className="aadadBtn">
      <tbody>
        <tr>
          <td>
            <button>+</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>3</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>2</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>1</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>-</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>6</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>5</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>4</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>*</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>9</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>8</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>7</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>/</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>.</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>0</button>
          </td>
          <td>
            <button onClick={onAadadClickHandler}>C</button>
          </td>
        </tr>
        <tr>
          <td>
            <button>=</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
