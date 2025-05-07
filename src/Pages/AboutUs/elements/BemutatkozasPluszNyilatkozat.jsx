import DownLoadBTN from "../../../Components/DownLoadBTN";
import NyilatkozatokBTNGroup from "../../../Components/NyilatkozatokBTNGroup";


const BemutatkozasPluszNyilatkozat = () =>{
    return(
        <section>
            <h2>Egyesületünk közhasznú szervezet</h2>
            <p>A XVI. kerületi Nagycsaládosok Egyesületét 2003. nyarán alakítottuk 21 családdal. Ma már több, mint 200 család alkotja tagságunkat, ez hozzávetőleg 1300 embert jelent.</p>
            <p>2003. szeptemberében csatlakoztunk a Nagycsaládosok Országos Egyesületéhez, ahol a 72. számot kaptuk, így tagjaink egyben a NOE tagjai is lehetnek, mindössze egy kettős tagsági nyilatkozatot kell hozzá kitölteniük.</p>
            <NyilatkozatokBTNGroup>
                <DownLoadBTN 
                     text='Mindenkori hatályos alapszabályzat'
                     classNameText='btn btn-info order-5'
                     funcionArgs={{
                             eleresiUt : 'alapszabályzat/XVI. ker. NE alapszabályzat.pdf',
                             addfileName: 'XVI. ker. NE alapszabályzat.pdf',
                             read : true
                         }}/>
            </NyilatkozatokBTNGroup>

        </section>
    )
}

export default BemutatkozasPluszNyilatkozat;