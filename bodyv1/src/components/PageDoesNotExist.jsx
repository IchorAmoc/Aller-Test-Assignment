import { Link } from 'react-router-dom'

export const PageDoesNotExist = () => {
    return (
        <section style={{'margin-top': '10rem', 'margin-left': '2rem'}}>
            <p>Page does not exist, please follow <Link to='/'>this link</Link> to go back</p>
        </section>
    )
}