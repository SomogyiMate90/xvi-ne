import DownLoadBTN from "./DownLoadBTN";

const NyilatkozatokBTNGroup = ({children}) =>{
    return(
        <div className="m-2 d-flex flex-column align-items-center flex-sm-row gap-2 justify-content-evenly">
        <DownLoadBTN
                text='Belépési nyilatkozat'
                classNameText='btn btn-primary order-2'
                funcionArgs={{
                        eleresiUt : 'nyilatkozatok/belepesi-nyilatkozat.doc',
                        addfileName: 'belepesi-nyilatkozat.docx'
                    }}
            />
        {children}
        <DownLoadBTN
            text='Kettős tagsági nyilatkozat'
            classNameText='btn btn-primary order-4'
            funcionArgs={{
                    eleresiUt : 'nyilatkozatok/kettos-tarsasagi-nyilatkozat.doc',
                    addfileName: 'kettős-nyilatkozat.docx'
                }}
        />
    </div>
    )
}

export default NyilatkozatokBTNGroup;