import { useState } from "react";

// Gear icon
import { IoIosSettings } from "react-icons/io";

// Components
import { TitleChange } from "./TitleChange";

export const Article = ({ data }) => {
    const [edit, toggleEdit] = useState(false)
    const orgTitle = data.title
    const [title, setTitle] = useState(data.title)
    let width;
    

    // There is 100% a better way to do this, but yeah.
    if(window.innerWidth >= 1250) width = (data.width * 100)
    if(window.innerWidth <= 1220) width = (data.width * 70) 
    if(window.innerWidth <= 900) width = (data.width * 60) 
    if(window.innerWidth <= 750) width = (data.width * 50) 
    if(window.innerWidth <= 630) width = (data.width * 40) 
    if(window.innerWidth <= 510) width = (data.width * 30)  // Uuuuh
    if(window.innerWidth <= 400) width = (data.width * 20)  // Good god no

    // Changes only visible for the user,
    // API call to change for all users.
    //      -> Reset button would lose its functionality,
    //         could be replaced with history function idk

    return (
        <article>
            <IoIosSettings className="edit" onClick={(e) => toggleEdit(!edit)} />
            <figure style={{ width: `${width}px` }}>
                <a href={data.url}>
                    <img src={data.imageUrl + `&width=${width}`} alt="#" />
                    <h3>{title}</h3>
                </a>
            </figure>
            <TitleChange
                edit={edit}
                toggleEdit={toggleEdit}
                orgTitle={orgTitle}
                pTitle={title}
                setTitle={setTitle}
            />
        </article>
    )
}