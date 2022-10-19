import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";

export function loader () {
    const clients = [
        {
            id: 1,
            name: 'Claudia',
            phone: 102013313,
            email: "juan@gmail.com",
            company: 'Nakama'
        },
        {
            id: 2,
            name: 'Karly',
            phone: 138198313,
            email: "karen@gmail.com",
            company: 'InkZone'
        },
        {
            id: 3,
            name: 'Andrés',
            phone: 31983913,
            email: "josue@gmail.com",
            company: 'Argos'
        },
        {
            id: 4,
            name: 'Carmen',
            phone: 319381983,
            email: "miguel@gmail.com",
            company: 'Kodu'
        },
        {
            id: 5,
            name: 'Raquel',
            phone: 1398198938,
            email: "pedro@gmail.com",
            company: 'Goutside'
        },
    ];
    return clients;
}

const Index = () => {
    const clients = useLoaderData()
    return ( 
        <>
            <h1 className="font-black text-4xl text-blue-900"> Clientes </h1>
            <p className="mt-3"> Administra tus clientes</p>

            {clients.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2 ">Cliente</th>
                            <th className="p-2 ">Contacto</th>
                            <th className="p-2 ">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>{clients.map(client =>(

                            <Client client={client} key={client.id}/>
                        ))}
                        </tbody>                   
                </table>
            ): (<p className="text-center mt-10"> No hay clientes aún </p>
            )}
        </>
    );
}

export default Index;