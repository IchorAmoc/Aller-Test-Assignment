import { useState } from "react";

// Gear icon
import { IoIosSettings } from "react-icons/io";

// Components
import { TitleChange } from "./TitleChange";

export const Article = ({ data }) => {
    const [edit, toggleEdit] = useState(false)
    const orgTitle = data.title
    const [title, setTitle] = useState(data.title)

    // Changes only visible for the user,
    // API call to change for all users.
    //      -> Reset button would lose its functionality,
    //         could be replaced with history function idk

    return (
        <article style={{width: `${data.width}00px`}}>
            <IoIosSettings className="edit" onClick={(e) => toggleEdit(!edit)} />
            <figure>
                <a href={data.url}>
                    <img src={data.imageUrl + `&width=${data.width}00`} alt="#" />
                </a>
                <a href={data.url}><h3>{title}</h3></a>
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