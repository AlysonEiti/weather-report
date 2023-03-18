import './Form.css';
import Input from '../Input';
import Button from '../Button';

const Form = (props) => {
    return (
        <form className="search" action="#">
            <Input type="search" id="searchInput" />
            <Button type="button" content="Search"/>
        </form>
    )
};

export default Form;