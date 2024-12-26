import classNames from "classnames";

const RenderInput = (name, type, placeholder, onChangeFn,styles,extraProps = {}) => {
    if (type === "date") {
      console.log({name});
      return (
        <input
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          onChange={onChangeFn}
          className={classNames("w-full text-sm p-3 border border-black/10 bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none",styles)}
          {...extraProps}
        />
      );
    } else if (type === "textarea") {
      return (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={onChangeFn}
          className={classNames("w-full text-sm p-3 border border-black/10 bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none",styles)}
          {...extraProps}
        />
      );
    }
  
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChangeFn}
        className={classNames("w-full text-sm p-3 border border-black/10 bg-[#F6F6F6] font-poppins placeholder:font-poppins focus:outline-none",styles)}
        {...extraProps}
      />
    );
  };

  export default RenderInput
