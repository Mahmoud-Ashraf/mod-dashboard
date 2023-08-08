import Translate from "../../helpers/Translate/Translate"

const MainBox = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <Translate id="props.title" />
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}
export default MainBox