export const Board = ({ boardValue }) => {
  return (
    <>
      <div className="display">
        <input type="text" placeholder="0" className="displayResult" readOnly value={boardValue}/>
      </div>
    </>
  );
};
