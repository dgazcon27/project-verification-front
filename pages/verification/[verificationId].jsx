import { useRouter } from "next/router";
import { useEffect } from "react";
import Swal from "sweetalert2";

import { URL_VERIFICATION_ENDPOINT } from "@/utils/constants";
import DefaultLayout from "@/layouts/default";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function VerificationPage() {
  const {
    query: { verificationId },
  } = useRouter();

  const router = useRouter();

  const { getItem } = useLocalStorage("verification-data");

  useEffect(() => {
    const init = async () => {
      try {
        const { token } = getItem();

        const url = `${URL_VERIFICATION_ENDPOINT}/verification_faces?reference=${verificationId}`;

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            reference: verificationId,
          }),
        });
        const parseResponse = await response.json();

        if (response.status == 401) {
          Swal.fire({
            icon: "info",
            title: "Sesion vencida",
            confirmButtonText: "Ok",
          }).then(() => {
            /* Read more about isConfirmed, isDenied below */
            router.replace("/");
          });
        }
        if (parseResponse[0].real_match_probability >= 85) {
          Swal.fire({
            icon: "success",
            title: "Bienvenido",
          });
          router.replace("/home");
        }
        // verificacion exitosa
        else {
          Swal.fire({
            icon: "error",
            title: "Lo sentimos no hemos podido confirmar tu identidad",
            confirmButtonText: "Ok",
          }).then(() => {
            /* Read more about isConfirmed, isDenied below */
            router.replace("/");
          });
        }
      } catch (error) {
      }
    };

    if (verificationId) {
      init();
    }
  }, [verificationId]);

  return (
    <DefaultLayout>
      <div />
    </DefaultLayout>
  );
}
