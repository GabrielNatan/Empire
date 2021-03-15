import GlobalStyle from './global'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import {Store} from "./store/index" 


import HomeScreen from './pages/Home/index'
import ProductScreen from './pages/Product/index'
import LoginScreen from './pages/Login/index'
import CadastrarScreen from './pages/Cadastrar/index'
import CartScreen from './pages/CartScreen/index'
function App() {
  return (
    <Provider store={Store}>
      <Router>
          <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/produto/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/cadastrar" component={CadastrarScreen}/>
        </Switch>
      </Router> 
    </Provider>
    );
}

export default App;
