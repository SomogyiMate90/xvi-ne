import { useEffect, useState } from "react";
import getStorageFileList from "../Functions/firebase/fireStorage/getStorageFileList";
import { useImmer } from "use-immer";
import downloadFile from "../Functions/firebase/fireStorage/downloadFile";
import pauseMediaFile from "../Functions/Utils/pauseMediaFile";


const PhotoBook = ({folderPath}) =>{
    const [loadindg, setLoading] = useState('loading');
    const [picList, setPicList] = useImmer({})
    
    useEffect(()=>{

        async function getFiles() {
            const fileLists = await getStorageFileList(folderPath)

            const filteredPathList = fileLists.reduce((acc,fileDesc)=>{

              const { name, fullPath , contentType } = fileDesc;

                const isNameOfMinPic = name.includes('400x267');

                if(isNameOfMinPic){
                    acc.minPic.push(fileDesc.fullPath)
                }
                else{
                    acc.bigFiles.push(fileDesc)
                }
                return acc;
            },{minPic:[],bigFiles:[]});

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
        case 'success' : SelectedComp = <SuccessComp picList={picList}/>
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


const SuccessComp = ({picList}) =>{
    const [minPictures, setMinPictures] = useImmer([]);
    const [showCarousel, setShowCarousel] = useState(false)

    const { minPic , bigFiles : [{ name, fullPath , contentType }]  } = picList

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

    return(
        <>
            { showCarousel && <CarouselComp closeFun={()=>setShowCarousel(false)} bigLilesList={picList.bigFiles} /> }
        <section>
            <button className="my-3 btn btn-info" onClick={()=>setShowCarousel(true)}>Fotógaléria, vidók megnyitása</button>
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

const CarouselComp = ({ closeFun, bigLilesList }) => {
  const [readedFile, setReadedFile] = useImmer([])
  useEffect(()=>{
    
    if(readedFile.length === 0){
      console.log('Rendelés megkezdte a körhinta')
  
      async function getUrl(path,{ name,contentType  }){
        const url = await downloadFile(path);
        setReadedFile(draft => {
          draft.push({url, name,contentType});
        });
      }
      
      const fileListNum = bigLilesList.length;
      
      for(let i = 0; i < fileListNum; i++){
         getUrl(bigLilesList[i].fullPath,{ name: bigLilesList[i].name, contentType: bigLilesList[i].contentType })
      }
    }

  },[])



  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide my-carousel-css"
      data-bs-touch="false"
    >
      <div className="carousel-inner">
        <button className="btn btn-close red" aria-label="Fotógaléria bezárása" onClick={closeFun}></button>
        {readedFile.map(({url,name,contentType}, index) => {

          let SelectedComp = <></>

          switch (contentType) {
            case "image/jpeg":
              SelectedComp = (<img aria-label={name} className="d-block" src={url} alt="" />);
              
              break;
            case "video/mp4":
              SelectedComp = (<video aria-label={name} className="d-block" controls width={"400px"}><source src={url} type={contentType} /></video>)
              break;
            case "audio/mpeg":
              SelectedComp = (<audio aria-label={name} className="d-block" controls ><source src={url} type={contentType} /></audio>)
              break;
            default:
              SelectedComp = <span>Nem támogatott formátum switch blokban írd át</span>;
          }



          return (
            <div key={index} className={ index === 0 ? 'carousel-item active' : "carousel-item" }>
              {SelectedComp}
            </div>
          );
        })}
      </div>
      <button
        onClick={()=>pauseMediaFile('carouselExampleControlsNoTouching')}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="d-none d-xxl-block">Előző</span>
      </button>
      <button
        onClick={()=>pauseMediaFile('carouselExampleControlsNoTouching')}
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


