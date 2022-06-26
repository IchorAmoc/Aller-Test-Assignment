import { useEffect, useState } from "react";

export const Header = ({logo}) => {
    const [navShadow, setNavShadow] = useState(false)

    useEffect(() => {
        const handleScroll = event => {
          //console.log('window.scrollY', window.scrollY);
          if(window.scrollY >= 50) {
            //console.log('yes')
            setNavShadow(true)
          }
          if(window.scrollY < 49) {
            setNavShadow(false)
          }
        }
    
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, [])
    return (
        <header id={navShadow ? 'scrolled' : ''}>
            <figure id="logo">
                <a href="https://www.aller.no/">
                    <img src={logo} alt="Aller" />
                </a>
            </figure>
        </header>
    )
}