import { Link } from "react-router-dom"

export default function Login({setLogginn, logginn, user, exists, setExists}){
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const handleChange = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setLogginn((prev) => ({...prev,[inputName]: inputValue}))
    }
    console.log(logginn)
    const handleClick = () =>{
        logginn.username === user.username ? setExists(true) : setExists(false)
    } 
    console.log(exists)
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Brukernavn</label>
            <input name="username" id="username" type="text" placeholder="Ola Nordman.." onChange={handleChange}></input>
            <label htmlFor="password">Passord:</label>
            <input name="password" id="password" type="password" placeholder="********" onChange={handleChange}></input>
            <button type="submit" onClick={handleClick}>Logg Inn</button>
        </form>
        {exists === false ? <p>Brukeren finnes ikke, <Link to="registrer">Registrer</Link></p> : null}
        </>
    )
}