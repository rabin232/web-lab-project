function MyInput({label, type, placeholder, value}) {
    return(
        <div className="input-wrapper">
          <label className="input-label">{label}</label>
          <input 
            className='input' 
            type={type} 
            placeholder={placeholder} 
            value={value}
          />
        </div>
    );
}

export default MyInput;