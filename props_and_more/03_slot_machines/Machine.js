class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props
        const winner = (s1 === s2) && (s2 === s3)
        return (
            <div>
                {s1} {s2} {s3}
                <p>{winner ? 'Winner!' : 'Unlucky!'}</p>
            </div>
        )
    }
}