import { useEffect, useState } from "react";

export const Header = ({logo}) => {
    const [scrolledNav, setScrolledNav] = useState(false)

    useEffect(() => {
        const handleScroll = event => {
          //console.log('window.scrollY', window.scrollY);
          if(window.scrollY >= 50) {
            //console.log('yes')
            setScrolledNav(true)
          }
          if(window.scrollY < 49) {
            setScrolledNav(false)
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      }, [])
    return (
        <header id={scrolledNav ? 'scrolled' : ''}>
            <figure id="logo">
                <a href="#">
                    Nyheter
                {/* <a href="https://www.aller.no/"> */}
                    {/* <img src={logo} alt="Aller" /> */}
                </a>
            </figure>
        </header>
    )
}