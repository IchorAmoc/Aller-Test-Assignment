
export const Footer = ({ logo }) => {
    return (
        <footer>
            <div className="content">
                <p>Test Oppgave</p>

                <div>
                    <figure>
                        <img src={logo} alt="Aller Media" />
                        <p>Aller Media</p>
                    </figure>
                    <p><a href="#">Github kildekode</a></p>
                    <p><a href="#">Vilde G.B. Epost</a></p>
                </div>
            </div>
        </footer>
    )
}