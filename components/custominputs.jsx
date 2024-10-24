import React from "react";
import { Input } from "@nextui-org/input";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const InputPassword = ({onChangeInput}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="Contaseña"
      variant="bordered"
      name="clientSecret"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
          {isVisible ? (
            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <IoEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      onChange={onChangeInput}
    />
  );
}

export default InputPassword;