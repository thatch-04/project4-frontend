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

    const input = {
        backgroundColor: "white",
        border: "3px red",
        color: "black"
    }

    const button = {
        backgroundColor: "navy",
        margin: "auto",
        color: "red"
      }

    return (
        <form onSubmit = {handleSubmission}>

        <input
            type="text"
            onChange={handleChange}
            value={formData.player}
            name="player"
            style={input}
        />

        <input
            type="text"
            onChange={handleChange}
            value={formData.details}
            name="details"
            style={input}
        />

        <input type="submit" value={buttonLabel} style={button}/>

    </form>
    )
}

export default Form;