import { NavLink, withRouter } from "react-router-dom";

function _AppHeader(props) {
    
    return (
        <header className='app-header'>
            <section className='container'>
                <section className="back-container">
                    <button onClick={props.history.goBack}>Back</button>
                </section>
                <nav>
                    <NavLink activeClassName="my-active" exact to='/'>Home</NavLink>
                    <NavLink activeClassName="my-active" to='/contacts'>Contacts</NavLink>
                    <NavLink activeClassName="my-active" exact to='/statistic'>Statistic</NavLink>
                </nav>
            </section>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)