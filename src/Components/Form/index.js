import './Form.css';
import Input from '../Input';
import Button from '../Button';

const Form = (props) => {
    return (
        <form class="search">
            <Input type="search" id="searchInput" />
            <Button type="button" content="Search"/>
        </form>
    )
};

export default Form;