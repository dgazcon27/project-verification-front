import Image from "next/image";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import classes from "./sidebar.module.css";

import Banco from "@/assets/barbula bank.png";

const data = [
  {
    date: "13-10-2024 18:12",
    reference: "87863261",
    description: "COBRO TDC",
    type: "DEBITO",
    amount: "-2.245,20 Bs",
    balance: "166,11 Bs",
  },
  {
    date: "31-09-2024 18:12",
    reference: "28934561",
    description: "OPERACION PAGO MOVIL",
    type: "DEBITO",
    amount: "-1345,20 Bs",
    balance: "2.411,31 Bs",
  },
  {
    date: "25-09-2024 14:45",
    reference: "26732841",
    description: "TRANSFERENCIA INTERBANCAR",
    type: "CREDITO",
    amount: "200,00 Bs",
    balance: "3.756,51 Bs",
  },
  {
    date: "21-09-2024 11:54",
    reference: "90451261",
    description: "ABONO",
    type: "CREDITO",
    amount: "46,21 Bs",
    balance: "3.556,51 Bs",
  },
  {
    date: "15-10-2024 06:00",
    reference: "85443769",
    description: "CLAVE MOVIL",
    type: "DEBITO",
    amount: "-0,50 Bs",
    balance: "3.510,30 Bs",
  },
  {
    date: "12-09-2024 09:24",
    reference: "52361566",
    description: "BIOPAGO",
    type: "DEBITO",
    amount: "-369,20 Bs",
    balance: "3.510,80 Bs",
  },
  {
    date: "10-09-2024 15:01",
    reference: "45432722",
    description: "OPERACION PAGO MOVIL",
    type: "DEBITO",
    amount: "120,00 Bs",
    balance: "3.880,00 Bs",
  },
  {
    date: "10-09-2024 13:54",
    reference: "32188323",
    description: "TRANSFERENCIA",
    type: "CREDITO",
    amount: "4.000,00 Bs",
    balance: "4.000,00 Bs",
  },
];

const SideBar = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "date", //access nested data with dot notation
        header: "Fecha",
        size: 150,
      },
      {
        accessorKey: "reference",
        header: "Referencia",
        size: 150,
      },
      {
        accessorKey: "description", //normal accessorKey
        header: "Descripción",
        size: 200,
      },
      {
        accessorKey: "type",
        header: "Debito/Credito",
        size: 150,
      },
      {
        accessorKey: "amount",
        header: "Monto",
        size: 150,
      },
      {
        accessorKey: "balance",
        header: "Saldo",
        size: 150,
      },
    ],

    []
  );

  const [selection, setSelection] = useState("");
  const router = useRouter();

  const table = useMaterialReactTable({
    columns,

    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div>
      <button
        aria-controls="default-sidebar"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        type="button"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <aside
        aria-label="Sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        id="default-sidebar"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <Image
            alt="Banco"
            src={Banco}
            style={{ width: "170px", height: "auto" }}
          />
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li onClick={() => setSelection("")}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Inicio</span>
              </a>
            </li>
            <li onClick={() => setSelection("consulta")}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Consultas</span>
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Transferencias
                </span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Servicios</span>
              </a>
            </li>
            <li onClick={() => setSelection("tarjetas")}>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Creditos</span>
              </a>
            </li>
            <li
              onClick={() => {
                Swal.fire({
                  icon: "info",
                  title: "¿Desea cerrar su sesión?",
                  confirmButtonText: "Si",
                  showCancelButton: true,
                  cancelButtonText: "No",
                  cancelButtonColor: "red",
                }).then((result) => {
                  console.log(result);
                  if (result.isConfirmed) router.replace("/");
                  /* Read more about isConfirmed, isDenied below */
                  // router.replace("/");
                });
              }}
            >
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="none"
                  viewBox="0 0 18 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
            {/* <li>
              <a
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div
              className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
              style={{ cursor: "pointer" }}
              onClick={() => setSelection("consulta")}
            >
              <p
                className={`text-2xl text-gray-400 dark:text-gray-500 ${classes.containerIcon}`}
              >
                <PointOfSaleIcon className={classes.icon} />
              </p>
            </div>
            <div
              className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
              style={{ cursor: "pointer" }}
              onClick={() => setSelection("tarjetas")}
            >
              <p
                className={`text-2xl text-gray-400 dark:text-gray-500 ${classes.containerIcon}`}
              >
                <AddCardIcon className={classes.icon} />
              </p>
            </div>
            <div
              className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
              style={{ cursor: "pointer" }}
              onClick={() => setSelection("efectivo")}
            >
              <p
                className={`text-2xl text-gray-400 dark:text-gray-500 ${classes.containerIcon}`}
              >
                <PaymentsIcon className={classes.icon} />
              </p>
            </div>
          </div>
          <div>
            {selection == "consulta" && (
              <div>
                <MaterialReactTable table={table} />
              </div>
            )}
            {selection == "tarjetas" && (
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  Actualmente no posee tarjetas de credito activas.
                </p>
              </div>
            )}
            {selection == "efectivo" && (
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  Sin solicitud/es de efectivo.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
