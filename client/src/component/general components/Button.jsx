

export default function Button (props){
    return (
        <>
         <button onClick={props.handleClick} type={props.type || "submit"} className={props.class}> {props.name} </button>
        </>
    )
   
}