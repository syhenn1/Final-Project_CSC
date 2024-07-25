const Select = (props)=>{
    const{ label ,opt1, opt2, opt3}= props;

    return(
        <select className="select select-bordered w-full max-w-full">
            <option  disabled selected>{label}</option>
            <option >{opt1}</option>
            <option >{opt2}</option>
            <option >{opt3}</option>
       </select>
    )
    
}
export default Select;