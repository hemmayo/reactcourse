class App extends React.Component {
    render() {
        return (
            <div>
                <h1>My Friends</h1>
                <Friend
                    name="Prosper"
                    hobbies={ ['coding', 'singing', 'playing games'] }
                    />
                <Friend
                name="Okanlawon"
                hobbies={ ['coding', 'dancing', 'watching movies'] }
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))