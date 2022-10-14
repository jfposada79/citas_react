
import Swal from "sweetalert2";
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente;
  const handleEliminar = () => {
    Swal.fire({
      title: 'Desea eliminar este paciente?',
      text: "El proceso no puede ser revertido!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4F46E5',
      cancelButtonColor: '#B91C1C',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Mmmm, mejor no!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire(
          'Borrado!',
          'El registro ha sido borrado.',
          'success'
        )
      }
    })
    
    
  }
  
  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case" >{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case" >{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case" >{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case" >{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case" >{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10" >
          <button 
            onClick={() => setPaciente(paciente)}
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          >Editar</button>
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}

          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente
