import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this is : {props.info}</p>
    </div>
);

const warnningcomponent = (Wrappedcomponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a warning Messege</p>}
            <Wrappedcomponent {...props} />
        </div>
    );
};
const requireAuthentication = (Wrappedcomponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated  ?  (
                <Wrappedcomponent {...props} />
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
}

// const AdminInfo = warnningcomponent(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is the information" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the information" />, document.getElementById('app'));
    