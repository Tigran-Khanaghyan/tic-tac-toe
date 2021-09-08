import './Button.style.css'

export default function Button({name, onClick}) {
    return (
        <button onClick={onClick} className='button'>{name}</button>
    )
}
