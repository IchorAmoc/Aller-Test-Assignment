
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
                    <p><a href="https://github.com/IchorAmoc/Aller-Test-Assignment/tree/main/bodyv1">Github kildekode</a></p>
                </div>
            </div>
        </footer>
    )
}