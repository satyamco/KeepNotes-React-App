import React from 'react'
import { useState } from 'react'

const Input = ({ onAdd }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitNote = (e) => {
        if (note.title === "" && note.description === "") return
        onAdd(note)
        setNote({
            title: "",
            description: ""
        })
        e.preventDefault()
    }


    const handleClick = ()=>{
        setIsExpanded(true)
    }

    return (
        <div className=" m-6 mb-12">
            <div className='max-w-[520px]  border px-6 py-2 bg-white dark:bg-slate-800 shadow m-6 rounded-xl mt-10  mx-auto '>
                {isExpanded && <input
                    className="bg-transparent outline-none text-xl w-full mb-4 font-medium pt-4 dark:text-white"
                    type="text"
                    value={note.title}
                    onChange={handleChange}
                    name="title"
                    placeholder='Title' />}

                <textarea
                    className="bg-transparent w-full outline-none text-lg resize-none dark:text-white "
                    name="description"
                    value={note.description}
                    onChange={handleChange}
                    onClick={handleClick}
                    cols="50"
                    rows={isExpanded ? 3 : 1}
                    placeholder="Take a note..." />

                <div className='flex justify-end'>
                    {isExpanded && <button
                        className='bg-sky-600 rounded-full py-[6px] px-5 mb-2 text-white mt-2'
                        onClick={submitNote}
                    >Add note</button>}

                </div>

            </div>
        </div>
    )
}

export default Input