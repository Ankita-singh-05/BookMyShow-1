import React from "react";
import {Route} from "react-router-dom";

//import
import DefaultLayout from "../layouts/Default.layout";

const DefaultHoc = ({element, ...rest}) => {
    const Element = element;

    return(
        <>
        <Route
        {...rest}
        element={(props) =>(
            <DefaultLayout> //render components
                <Element {...props}/>
            </DefaultLayout>
        )}
        />
        </>
    );
};

export default DefaultHoc;