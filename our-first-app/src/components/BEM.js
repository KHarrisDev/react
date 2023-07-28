import '../App.css';

// ! BEM Naming Convention
function BEM() {
    return (
        <div>
            <div className="app"> 
            <h1 className="app__title">This is a title.</h1>
            <h1 className="app__title app__title--large">This is a LARGE title.</h1>
            <h1 className="app__title app__title--small">This is a SMALL title</h1>
            </div>
    
            {/* Second Example */}
            <form className="form form--theme-xmas form--simple">
            <input className="form__input" type="text" />
            <input
                className="form__submit form__submit--disabled"
                type="submit" />
            </form>
        </div>
    );
}

export default BEM;