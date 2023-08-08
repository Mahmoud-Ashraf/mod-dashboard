import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langActions } from "../../store/Lang/Lang";

const Navbar = () => {
    const dispatch = useDispatch();
    const globalLang = useSelector(state => state.lang.globalLang);
    const [selectedLang, setSelectedLang] = useState(globalLang);
    const langChangeHandler = (e) => {
        setSelectedLang(e.target.value);
        // console.log(e.target.value);
        dispatch(langActions.translation({ lang: e.target.value }));
    }
    return (
        <nav className="top-nav">
            <i className="fa-solid fa-globe mx-2"></i>
            <select className="lang-select" name='langSelect' value={selectedLang} onChange={langChangeHandler} >
                <option value='ar'>عربي</option>
                <option value='en'>English</option>
            </select>
        </nav>
    )
}

export default Navbar;