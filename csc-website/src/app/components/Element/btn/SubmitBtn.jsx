const SubmitBtn =(props)=>{
    const{children, ExtendedClass} = props;
    const Class = `btn  ${ExtendedClass}`
    return(
        <>
            <button className={Class}>
                 {children}
            </button>
        </>
    )

}

export default SubmitBtn;