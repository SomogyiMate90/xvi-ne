import { useEffect, useState } from "react";
import getStorageFileList from "../Functions/firebase/fireStorage/getStorageFileList";
import { useImmer } from "use-immer";
import downloadFile from "../Functions/firebase/fireStorage/downloadFile";


const PhotoBook = ({folderPath}) =>{
    const [loadindg, setLoading] = useState('loading');
    const [picList, setPicList] = useImmer({})
    
    useEffect(()=>{

        async function getFiles() {
            const fileLists = await getStorageFileList(folderPath)// name, fullPath

            const filteredPathList = fileLists.fullPath.reduce((acc,path)=>{

                const isNameOfMinPic = String(path).includes('400x267');

                if(isNameOfMinPic){
                    acc.minPic.push(path)
                }
                else{
                    acc.bigPic.push(path)
                }
                return acc;
            },{minPic:[],bigPic:[]});

            const hasAnyMinPic = filteredPathList.minPic.length > 0;

            if(hasAnyMinPic){
                setPicList(filteredPathList)
                setLoading('success');
            }
            else{
                setLoading('failed')
            }
            
        }

        getFiles()

    },[loadindg])

    let SelectedComp; 

    switch(loadindg){
        case 'loading' : SelectedComp = <img src="/assets/img/loadingGIF.gif" />;
        break;
        case 'success' : SelectedComp = <SuccessComp pathList={picList}/>
        break;
        case 'failed' : SelectedComp = <p className="mx-2 px-2 text-indent-no d-inline-block bg-danger fw-bolder text-decoration-underline">Nincs megjeleníthető kép</p>
        break;
        default : SelectedComp = <img src="/assets/img/loadingGIF.gif" alt="töltés"/>;
    }

    return(
        <>
            {SelectedComp}
        </>
    )

}

export default PhotoBook;


const SuccessComp = ({pathList}) =>{
    const [minPictures, setMinPictures] = useImmer([]);
    const [bigPictures, setBigPictures] = useImmer([]);
    const [showCarousel, setShowCarousel] = useState(false)

    const { minPic , bigPic  } = pathList

    async function getPic(path,draftFun) {
        const url = await downloadFile(path);
        draftFun(draft => {
            draft.push(url);
          });
    }

    // kisképek
    useEffect(()=>{
        setMinPictures(() => []);
    
        for(let i = 0; i < minPic.length; i++){
            const path = minPic[i];

            getPic(path,setMinPictures)
        }

    },[]);

    // nagyképek redrelése
    useEffect(()=>{

        if(showCarousel && bigPictures.length < 1){
            setBigPictures(() => []);
            for(let i = 0; i < bigPic.length; i++){
                const path = bigPic[i];
                getPic(path,setBigPictures)
            }
        }

    },[showCarousel]);
    

    return(
        <>
            { showCarousel && <CarouselComp closeFun={()=>setShowCarousel(false)} urlList={bigPictures} /> }
        <section>
            <button className="my-3 btn btn-info" onClick={()=>setShowCarousel(true)}>Fotógaléria megnyitása</button>
            <h2 className="text-center">Képek</h2>
            <div className="w-100 d-flex gap-3 justify-content-evenly flex-wrap">
                {minPictures.map((url,n)=>{
                    return(
                        <img style={{maxWidth:'400px'}} className="w-100 border border-2" key={n} src={url} alt={`Kép: ${n}`} />
                    )
                })}
            </div>
        </section>
        </>
    )
}

const CarouselComp = ({ urlList, closeFun }) => {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide my-carousel-css"
      data-bs-touch="false"
    >
      <div className="carousel-inner">
        <button className="btn btn-close red" aria-label="Fotógaléria bezárása" onClick={closeFun}></button>
        {urlList.map((picture, index) => {
          return (
            <div key={index} className={ index === 0 ? 'carousel-item active' : "carousel-item" }>
              <img src={picture} className="d-block" alt={`Kép: ${index}`} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="d-none d-xxl-block">Előző</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="d-none d-xxl-block">Következő</span>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};


