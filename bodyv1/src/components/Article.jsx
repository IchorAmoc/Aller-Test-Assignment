// IoIosSettings
import { IoIosSettings } from "react-icons/io";

export const Article = ({ data }) => {
    return (
        <article>
            <IoIosSettings className="edit" onClick={(e) => console.log('click')} />
            <a href={data.url}>
                <figure>
                    <img src={data.imageUrl + `&width=${data.width}00`} alt="#" />
                    <h3>{data.title}</h3>
                </figure>
            </a>
        </article>
    )
}