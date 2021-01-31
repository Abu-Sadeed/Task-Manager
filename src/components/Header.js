import Button from './Button' 

const Header = ({ onAdd, showAddTask }) => {

    return (
        <header className='header'>
            <h1>
                Task Manager
            </h1>
            <Button color={showAddTask ? 'Red' : 'Green'} action={showAddTask ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

export default Header
