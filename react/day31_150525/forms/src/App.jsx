import './App.css';
import { useForm } from 'react-hook-form'


function App() {

  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  function getDatas(datas) {

    //get datas
    console.table(datas)
    //validate datas
    //send datas
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(getDatas)}>
        <div className='pregunta'>
          <label htmlFor='nombre'>Nombre: </label>
          <input id='nombre' placeholder='Escribe tu nombre' autoFocus {...register('name', { required: true, minLength: 2, maxLength: 30 })} />
        </div>
        {
          errors.name?.type === 'required' &&
          <div className='errors'>
            The name is mandatory
          </div>
        }
        {
          errors.name?.type === 'minLength' &&
          <div className='errors'>
            Name can't be shorter than 2 characters
          </div>
        }
        {
          errors.name?.type === 'maxLength' &&
          <div className='errors'>
            Name can't be longer than 30
          </div>
        }
        <div className='pregunta'>
          <label htmlFor='edad'>Edad: </label>
          <input type='number' id='edad' placeholder='Escribe tu edad' {...register('age', { min: 0, max: 120 })} />
        </div>
        {
          errors.age?.type === 'min' &&
          <div className='errors'>
            Age can't be lower than 0
          </div>
        }
        {
          errors.age?.type === 'max' &&
          <div className='errors'>
            Age can't be higher than 120
          </div>
        }
        <div className='pregunta'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' placeholder='Escribe tu email' {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
        </div>
        {
          errors.email?.type === 'required' &&
          <div className='errors'>
            Bad email format
          </div>
        }
        <div className='pregunta'>




          <label htmlFor='telefono'>Teléfono: </label>
          <input tpye='tel' id='telefono' placeholder='Escribe tu telefono' {...register('phoneNumber')} />
        </div>
        <div className='pregunta'>
          <label></label>
          <input type='submit' />
        </div>
      </form>
      <hr />

      <p>Me llamo {watch('name')}, mi edad es {watch('age')}, mi email es {watch('email')} y mi tel es {watch('phoneNumber')} </p>
    </div>
  );
}

export default App;
