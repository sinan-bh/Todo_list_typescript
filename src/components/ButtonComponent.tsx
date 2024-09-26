type Button = {
    children: JSX.Element | string;
    onClick?: () => void;
}

const ButtonComponent = ({children, onClick}: Button) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default ButtonComponent
