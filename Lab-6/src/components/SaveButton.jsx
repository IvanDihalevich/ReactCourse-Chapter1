// eslint-disable-next-line react/prop-types
const SaveButton = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="saveButton">
      {label}
    </button>
  );
};

export default SaveButton;
