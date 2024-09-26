type Button = {
    children: JSX.Element | string;
    className?: string;
    onClick?: () => void;
}

const ButtonComponent = ({children,className, onClick}: Button) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{children}</button>
    </div>
  )
}

export default ButtonComponent
