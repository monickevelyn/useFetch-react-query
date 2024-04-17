import './App.css'
import useFetch from './hooks/useFetch'


function App() {

  const { data, isLoading, isError } = useFetch();

  return (
    <>
      { !isLoading && <>{ data?.results?.map((poke) => <div key={poke.name}>{poke.name}</div>) } </> }
      { isLoading && (<p>Carregando..</p>) }
      { isError && (<p>Erro</p>) }
    </>
  )
}
export default App