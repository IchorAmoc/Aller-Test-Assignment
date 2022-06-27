import { useState } from "react";

export const TitleChange = ({ edit, orgTitle, pTitle, setTitle, toggleEdit }) => {
    const [input, setInput] = useState(pTitle)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle(input)
        toggleEdit(!edit)
    }

    const handleReset = () => {
        setTitle(orgTitle)
        toggleEdit(!edit)
    }

    return (
        <div className={`editTitleContainer ${!edit && 'noEdit'}`}>
            <div className="blur"></div>
            <form className="editTitleForm" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="newInput">Ny tittel</label>
                <input id="newInput" type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Lagre</button>
            </form>
            <button className="resetTitle" onClick={() => handleReset()}>Original tittel</button>
        </div>
    )
}