import { getClient, updateClient } from "../data/clients";
import ApplicationForm from "../components/ApplicationForm";
import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom";
import Error from "../components/Error";

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

export async function action({request, params}){
    const formData = await request.formData()
    // para poder acceder a los datos de formData     
        const datos = Object.fromEntries(formData)
        const email = formData.get('email')
    
    
        //Validación
        const errors = []
        if(Object.values(datos).includes('')){
            errors.push('Todos los datos son obligatorios')
        }
    
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    
        if(!regex.test(email)){
            errors.push('Email incorrecto')
        }
        //Retornar datos si hay errores
        if(Object.keys(errors).length){
            return errors
        }
        // Actualizar cliente
        await updateClient(params.clienteId, datos)
    
        return redirect('/')

}

const EditClient = () => {

    const navigate = useNavigate()
    const client = useLoaderData()
    const errors = useActionData()

    return ( 
        <>
        <>
        <h1 className="font-black text-4xl text-blue-900"> Editar Cliente</h1>
        <p className="mt-3"> Modifica los datos del cliente </p>
        <div className="flex justify-end">
            <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase" onClick={()=> navigate ('/')}> Volver</button>
        </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-15">
            {errors?.length && errors.map( (error, i)=> <Error key={i}>{error}</Error> )}
            <Form method="POST" noValidate>
                <ApplicationForm client={client}/>
                <input type="submit" className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" value="Editar cliente"/>
            </Form>
        </div>
    </>
        </>
    );
}

export default EditClient;