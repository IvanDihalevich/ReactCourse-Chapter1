import SpinElement from "../elements/SpinElement";

// eslint-disable-next-line react/prop-types
const Loading = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && <SpinElement />}
      {children}
    </>
  );
};

export default Loading;
