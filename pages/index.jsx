import DefaultLayout from "@/layouts/default";
import { Input } from "@nextui-org/input";
import InputPassword from "@/components/custominputs";
import { useState } from "react";
import { Button } from "@nextui-org/button";

export default function IndexPage() {
  const [form, setForm] = useState({
    clientId: "",
    clientSecret: "",
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onSubmit = async () => {
    const clientId = process.env.NEXT_PUBLIC_USER_API_VERIFICATION
    const clientSecret = process.env.NEXT_PUBLIC_PASS_API_VERIFICATION
    const formData = new URLSearchParams();
    // const {clientId, clientSecret} = form
    formData.append("clientId", clientId)
    formData.append("clientSecret", clientSecret)
    try {
      const response = await fetch(
        "https://sure-grand-hornet.ngrok-free.app/login",
        {
          method: "POST",
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }, 
          body: formData.toString(),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DefaultLayout>
      <div>
        {/*<div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            name="clientId"
            onChange={onChangeInput}
            type="email"
            label="Usuario"
            className="max-w-xs"
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <InputPassword onChangeInput={onChangeInput} />
        </div>*/}
        <div>
          <Button onClick={onSubmit} color="success">
            Ingresar
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
