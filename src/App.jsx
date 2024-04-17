import './App.css'
import useFetch from './hooks/useFetch'
// import { useEffect } from 'react';
// import useFetchMutate from './hooks/useFetchMutate';

function App() {

  const { data, isLoading, isError, error, isPending, isSuccess  } = useFetch();
  // const { mutate, isSuccess } = useFetchMutate()

  // const submit = () => {
  //   const data = {}
  //   mutate(data)
  // }

  // useEffect(() => {
  //   handleCloseModal();
    
  // }, [isSuccess])
 
  return (
    <>
      { !isLoading && <>{ data?.results?.map((poke) => <div key={poke.name}>{poke.name}</div>) } </> }
      { isLoading && <p>Carregando..</p> }
      { isError && <p>{error.name}: {error.message}</p> }
      { isPending && <p>Pendente...</p> }
      { isSuccess && <p>SUCESSO</p> }
    </>
  )
}
export default App