import PageHelmet from "../../Components/PageHelmet";
import metaAndOpengraphTag from "../../Functions/helm/metaAndOpengraphTag";

const DocumentsPage = () =>{

    return(
        <>
        <PageHelmet helmetObj ={metaAndOpengraphTag.documents}/>
        <div className="page-document">

        <div className="hero-img document-hero-img"> 
            <h1 className="poz-center">
                Dokumentumok
            </h1>

        </div>
        </div>
        </>
    )


}

export default DocumentsPage;