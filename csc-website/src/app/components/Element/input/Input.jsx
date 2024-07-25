export default function Input(props){
    const{type, placeholder, name} = props;
    return(
        <>
            <input type={type} placeholder={placeholder} name={name} className= "input input-bordered" />
        </>
    )
    
}