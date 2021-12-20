import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cabecalho from './components/cabecalhos/simbolo-cima/index';

import Home from './pages/home/index'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/cabecalho" component={Cabecalho} />
            </Switch>
        </BrowserRouter>
    );
}