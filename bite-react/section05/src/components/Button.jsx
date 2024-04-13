const Button = ({ text, color, children }) => {
  //이벤트 객체
  const onClickBtn = () => {
    console.log();
    console.log(text);
  }; 

  return (
    <button
    onClick={onClickBtn}
    // onMouseEnter={onClickBtn}
    style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}; 

Button.defaultProps = {
  color: "black",
};

export default Button;