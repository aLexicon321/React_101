let root = document.getElementById('root');
let elem = React.createElement("h1", {}, "React101 : Intro");

const props = {
    firstName : 'Joakim',
    lastName : 'Von Anka',
    hour : new Date().getHours(),
    message : 'Welcome to Functional Component!'
};

function SayHello() {
    return <h1>Hello {props.firstName}<br/>{ props.message }</h1>
};

const ShowMessage = () => {
    let message = (props.hour < 12 ? 'morning' : 'day');
    return <h2>Good {message} {props.firstName}</h2>;
};

const Greetings = () => {
    return(
        <div>
            <SayHello />
            <hr/>
            <ShowMessage />
        </div>
    );
};

const GreetPerson = () =>{
    return(
        <div>
            <p>
                First name: <b>{ props.firstName }</b><br/>
                Last name: <b>{ props.lastName }</b>
            </p>
            <hr />
            <Greetings />
        </div>
    );
};

ReactDOM.render(<GreetPerson />, root);