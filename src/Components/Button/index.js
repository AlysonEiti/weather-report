import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type}>{props.content}</button>
    )
};

export default Button;