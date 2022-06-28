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


    if(window.innerWidth <= 1200) width = (data.width * 100) * 0.99
    if(window.innerWidth > 1200) width = (data.width * 100) * 0.99
    console.log(window.innerWidth)

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