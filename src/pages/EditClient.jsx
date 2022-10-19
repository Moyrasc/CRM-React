import { getClient } from "../data/clients";

export async function loader({params}){
    const client = await getClient(params.clienteId)
    if(Object.values(client).length === 0){
        throw new Response( '', { 
            status: 404,
            statusText: "No hay resultados"
        })
    }
    return client

}

const EditClient = () => {
    return ( 
        <>
        <div>Edit Profilee</div>
        </>
    );
}

export default EditClient;