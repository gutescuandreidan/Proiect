class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpVisible: false
        };
    }

    togglePopUp = () => {
        this.setState({ popUpVisible: !this.state.popUpVisible });
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="logoindex.png" alt="Logo" />
                    </a>
                    <button className="btn btn-primary btn-small ml-3">Button Text</button>
                    <button className="btn btn-outline-primary btn-small ml-auto btn-margin-right">Login</button>
                </nav>

                <div 
                    className={`pop-up-circle ${this.state.popUpVisible ? 'active' : ''}`}
                    onClick={this.togglePopUp}
                >
                    ?
                </div>
                <div className="pop-up-box">
                    <p>This is a pop-up box with some text.</p>
                </div>
                <div className="contact-info-container">
                    <p>Contact Information: email@example.com</p>
                </div>
              
            </div>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
