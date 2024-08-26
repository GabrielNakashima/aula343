import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'
import Home from './routes/Home.jsx'

{/*Criando a função createbrowserrouter*/}

const router=createBrowserRouter([
  {
    //Chamado os elementos pa
    path:'/',element:<App/>,
    errorElement:<Error/>,

    /*Chamando os elementos filhos*/
    children:[
      /*Criado a rota home*/
      {path:'/',element:<Home/>},
      //Criado a rota aluno
      {path:'/aluno',element:<Aluno/>}
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Criando o props que será renderzado*/}
    <RouterProvider router={router}/>
  </StrictMode>,
)
