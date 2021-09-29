import React, { useState, useEffect } from 'react'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history';
import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'
import { Paginacion } from './Paginacion';

const history = createBrowserHistory();

export const App = () => {
  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState({})

  const url = "https://rickandmortyapi.com/api/character"

  const fetchPersonajes = (url) =>{
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchPersonajes(url)
  }, [])

  const onNext = () =>{
    fetchPersonajes(info.next)
  }

  const onPrevious = () => {
    fetchPersonajes(info.prev)
  }

  return (
    <div className="contenedor">
      <div className="container">
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Content personajes ={personajes} />
              <Paginacion prev ={info.prev} next ={info.next} onNext ={onNext} onPrevious ={onPrevious}/>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}


