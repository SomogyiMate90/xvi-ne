import DownLoadBTN from "../../../Components/DownLoadBTN"

const BemutatkozasPluszNyilatkozat = () =>{
    return(
        <section>
            <h2>Egyesületünk közhasznú szervezet</h2>
            <p>A XVI. kerületi Nagycsaládosok Egyesületét 2003. nyarán alakítottuk 21 családdal, ma már több, mint 420 család alkotja tagságunkat, ez hozzávetőleg 1300 embert jelent.</p>
            <p>2003 szeptemberében csatlakoztunk a Nagycsaládosok Országos Egyesületéhez , ahol a 72. számot kaptuk, így tagjaink egyben a NOE tagjai is lehetnek, mindössze egy kettős tagsági nyilatkozatot kell hozzá kitölteniük.</p>

            <div className="d-flex justify-content-end">
                <DownLoadBTN
                    text='Kettős tagsági nyilatkozat'
                    classNameText='btn btn-primary item-aligin-right'
                    funcionArgs={{
                            eleresiUt : '/documents/kettos-tarsasagi-nyilatkozat.doc',
                            addfileName: 'kettős-nyilatkozat.docx'
                        }}
                />
            </div>



        </section>
    )
}

export default BemutatkozasPluszNyilatkozat;