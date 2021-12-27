import PreviousMap from "postcss/lib/previous-map";
import React from "react"; 

const DefaultLayout = (props) => {  //connecting default layout
    return (
        <div>
            <h1 className="text-xl">Default Layout</h1>
            {props.children}
        </div>
    );
};

export default DefaultLayout; //exporting functional component