
const Client = ({client}) => {

    const {name, company, phone, email, id} = client

    return ( 
        <tr className="border-b">
            <td className="p-5 space-y-2">
                <p className="text-2xl text-gray-800">{name}</p>
                <p>{company}</p>
            </td>
            <td className="p-5">
                <p className="text-gray-600"><span className="text-gray-800  font-bold">Email: </span> {email}</p>
                <p className="text-gray-600"><span className="text-gray-800  font-bold">Phone: </span> {phone}</p>
            </td>
            <td className="p-5 flex gap-3">
                <button type="button" className="text-blue-600 hover:text-blue-700 font-bold text-xs uppercase">Editar</button> 
                <button type="button" className="text-red-600 hover:text-red-700 font-bold text-xs uppercase">Eliminar</button> 
            </td>
        </tr>
    );
}

export default Client;