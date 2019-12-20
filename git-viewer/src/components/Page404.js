import React from 'react';

/*
Page 404 component where the user is redirected if the project or the user request returns nothing.
*/
class Page404 extends React.Component {
    render() {
        return (
            <div>
                <h1>Error 404</h1>
                <h2>Project not found</h2>
                {/*Add a return button to the main page*/}
            </div>
        );
    }
};

export default Page404;