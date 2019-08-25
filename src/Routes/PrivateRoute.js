import React, { useContext } from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import { LayoutContext } from '../Provider/LayoutProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const layoutContext = useContext(LayoutContext);
    return (
        <Route
            {...rest}
            render={props =>
                Boolean(layoutContext.isAuthenticated) ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;