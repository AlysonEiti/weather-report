import './DivContent.css';

const DivContent = (props) => {
    return (
        <div className={props.class}>{props.content}</div> 
    )
};

export default DivContent;