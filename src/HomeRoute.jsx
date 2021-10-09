import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogoutComponent from './Login/LogoutComponent'
import ErrorMessage from './Login/ErrorMessage'
import AuthenticatedRoute from './AuthenticatedRoute';
import ShopMain from './Shop/ShopMain';
import Home from './Home';
import Login from './Login/Login';
import FinanceManagementRoute from './Finance_Management/commoncomponents/financemng_route';
import SaleseManagementHome from './Sales_Management/SalesManagementHome';
import RawMaterialSidebar from './RawMaterialManagement/rawMaterialSideBar';


function HomeRoute() {
    return (
        <div className="HomeRoute">
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/Home" exact component={Home} />
                        <Route path="/FinanceManagement"  component={FinanceManagementRoute} />
                        <Route path="/Sales-management"  component={SaleseManagementHome} />
                        <Route path="/rawmaterialManagement"  component={RawMaterialSidebar} />
                        <ShopMain />
                        <FinanceManagementRoute />
                        <SaleseManagementHome/>
                        <RawMaterialSidebar/>
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                        <Route component={ErrorMessage} />
                    </Switch>
                </>
            </Router>
        </div>
    )
}

export default HomeRoute
