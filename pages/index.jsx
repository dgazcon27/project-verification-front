import { Input } from "@nextui-org/input";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import classes from "./index.module.css";

import InputPassword from "@/components/custominputs";
import Person_Mobile from "@/assets/tu_banca_mobile.png";
import Person from "@/assets/tu_banca.png";
import Banco from "@/assets/barbula bank.png";
import {
  URL_BASE_VERIFICATION,
  URL_VERIFICATION_ENDPOINT,
  API_CLIENT,
  API_SECRET_CLIENT,
  WEB_BANK_URL,
} from "@/utils/constants";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function IndexPage() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { saveData } = useLocalStorage("verification-data");
  const [isLoading, setIsLoading] = useState();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    // if (width > 767) {
    //   window.onscroll = (e) => {
    //     if (window.pageYOffset > 400) {
    //       setIsScroll(true);
    //     } else {
    //       setIsScroll(false);
    //     }
    //   };
    // }
    const updateWidth = () => {
      const width = document.body.clientWidth;
      console.log(`CURRENT WIDTH ${width}`);
      setWidth(width);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
  }, [width]);

  const onChangeInput = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const formData = new URLSearchParams();

    formData.append("clientId", API_CLIENT);
    formData.append("clientSecret", API_SECRET_CLIENT);
    try {
      const response = await fetch(`${URL_BASE_VERIFICATION}/users/login`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 404) {
        setIsLoading(false);

        return alert("Usuario o contraseña incorrecta");
      }
      const parseRes = await response.json();

      const apiResponse = await fetch(`${URL_VERIFICATION_ENDPOINT}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      const { access_token, token_type } = await apiResponse.json();

      saveData({ token: `${token_type} ${access_token}` });
      const reference = await uuidv4();
      const notification_url = process.env.NEXT_PUBLIC_WEBHOOK_VERIFICATION;
      const verifyObject = {
        reference,
        redirect_url: `${WEB_BANK_URL}/verification/${reference}`,
        notification_url,
        reference_image: parseRes.image_reference,
      };

      const verifyResponse = await fetch(
        `${URL_VERIFICATION_ENDPOINT}/generate_verification`,
        {
          method: "POST",
          body: JSON.stringify(verifyObject),
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token_type} ${access_token}`,
          },
        }
      );

      const verifyParsed = await verifyResponse.json();

      setIsLoading(false);

      window.location.href = verifyParsed.verification_url;
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${classes.backgroundImage} flex`}>
      <div className={`${classes.containerBadge} flex w-1/3`}>
        <div className={`flex-initial w-64`}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image alt="Banco" className={classes.logoBank} src={Banco} />
          </div>
          <div>
            <div className={`${classes.inputContainer} flex w-full flex-wrap md:flex-nowrap gap-4`}>
              <Input
                className={`max-w-xs ${classes.input}`}
                label="Usuario"
                name="username"
                type="email"
                onChange={onChangeInput}
              />
            </div>
            <div className={`${classes.inputContainer} flex w-full flex-wrap md:flex-nowrap gap-4`}>
              <InputPassword classes={classes} onChangeInput={onChangeInput} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <Button
                  color="success"
                  isLoading={isLoading}
                  style={{
                    color: "white",
                    background: "#99d9d8",
                    height: "4em",
                    width: "140px",
                  }}
                  onClick={onSubmit}
                >
                  Ingresar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.containerImage} flex w-2/3`}>
        <div>
          {width <= 992 && (
            <Image
              alt="Con lo mendoza se gana"
              className=""
              style={{marginTop: '25%'}}
              src={Person_Mobile}
            />
          )}
          {width > 992 && (
            <Image alt="Con lo mendoza se gana" className="" src={Person} />
          )}
        </div>
      </div>
    </div>
  );
}
