import { useContext } from "react"
import LinkOutTargetBlank from "../../../Components/LinkOutTargetBlank"
import Theme from "../../../Functions/themes/ThemeContext"


const XVIKeruletiKedv = () =>{

    const theme = useContext(Theme)

    const peldaObj = {

        title : 'OkosJáték',
        addres: '1163 Budapest. VERES PÉTER ÚT 99',
        description: ['Érvényes NOE kártyára 8% kedvezményt adnak a termékek árából.','Játékbolt telefon: 20-263-3836 '],
        link: 'https://www.okosjatek.hu/'

    }

    return(
        <section>
            <h2>XVI. kerületi kedvezmények</h2>

            {/* Asztali nézetre */}
            <table className={ theme === 'light' ? "table d-flex d-none d-lg-block" : "table table-dark table-hover d-flex d-none d-lg-block" }>
                <thead>
                    <tr>
                        <th>
                            Név
                        </th>
                        <th>
                            Cím
                        </th>
                        <th>
                            Leírás
                        </th>
                        <th>
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{peldaObj.title}</td>
                        <td>{peldaObj.addres}</td>
                        <td>{peldaObj.description.reduce((acc,item)=>{acc+= ` ${item}`; return acc},'')}</td>
                        <td><LinkOutTargetBlank link={{href: `${peldaObj.link}`, text : `${peldaObj.title}`}} /></td>
                    </tr>
                </tbody>

            </table>

            {/* Tábla mobilra */}
            <table className={ theme === 'light' ? "table d-flex d-block d-lg-none" : "table table-dark table-hover d-flex d-block d-lg-none" }>
            {/* <table className="table d-lg-none"> */}
                <tbody>
                    <tr>
                        <th>Név</th>
                        <td>{peldaObj.title}</td>
                    </tr>
                    <tr>
                        <th>Cím</th>
                        <td>{peldaObj.addres}</td>
                    </tr>
                    <tr>
                        <th>Leírás</th>
                        <td>{peldaObj.description.reduce((acc,item)=>{acc+= ` ${item}`; return acc},'')}</td>
                    </tr>
                    <tr>
                        <th>Link</th>
                        <td><LinkOutTargetBlank link={{href: `${peldaObj.link}`, text : `${peldaObj.title}`}} /></td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
}
export default XVIKeruletiKedv;