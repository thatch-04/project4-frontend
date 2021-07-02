import React, {useState} from "react"

const Form = ({initialPlayer, history, handleSubmit, buttonLabel}) => {
    //Form state
    const [formData, setFormData] = useState(initialPlayer)
    
    //Functions
    const handleChange = (event) => {
        //copy of current state
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)

        //setFormData({..formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        history.push("/")
    }

    return (
        <form onSubmit = {handleSubmission}>

        <input
            type="text"
            onChange={handleChange}
            value={formData.player}
            name="player"
        />

        <input
            type="text"
            onChange={handleChange}
            value={formData.details}
            name="details"
        />

        <input type="submit" value={buttonLabel}/>

    </form>
    )
}

export default Form;