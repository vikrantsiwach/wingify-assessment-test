import React from 'react'

interface Props {
    text: string;
    handleClick: () => void;
}

const ButtonComponent: React.FC<Props> = (props: Props) => {
    return (
        <button
          className="ml-4 cursor-pointer text-blue-500 hover:underline"
          onClick={props.handleClick}
        >
          {props.text}
        </button>
    )
}

ButtonComponent.defaultProps = {
    text: "Click me",
    handleClick: () => console.log("button clicked")
}

export default React.memo(ButtonComponent);