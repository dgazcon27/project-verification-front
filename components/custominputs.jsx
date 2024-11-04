import React from "react";
import { Input } from "@nextui-org/input";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const InputPassword = ({ onChangeInput, classes }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className={`max-w-xs ${classes.input}`}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IoEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Contraseña"
      name="password"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      onChange={onChangeInput}
    />
  );
};

export default InputPassword;
