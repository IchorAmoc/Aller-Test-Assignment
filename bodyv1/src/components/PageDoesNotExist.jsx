import { Link } from 'react-router-dom'

export const PageDoesNotExist = () => {
    return (
        <section>
            <p>Page does not exist, please follow <Link to='/'>this link</Link> to go back</p>
        </section>
    )
}