/**
 * 
 * @param {File} value 
 * @returns 
 */
export default async function getPictureSrcBase64(value,maxWidth = 400) {

    let compressedObj;

    if (!value) throw new Error("Nincs fájl kiválasztva!");

    if (value.type.startsWith('video/')){
        return compressedObj = {src :'https://tatkultur.hu/wp-content/uploads/Video-scaled.jpg', title : value.name};
    } 
    if (value.type.startsWith('audio/')){
        return compressedObj = {src : 'https://e1.pngegg.com/pngimages/475/427/png-clipart-vista-rtm-wow-icon-music-file-music-icon-thumbnail.png', title : value.name};
    } 
    if (!value.type.startsWith('image/')) return;
    // console.log(value);

    const fileSizeMb = Math.floor(value.size / 1024 / 1024);
    // console.log('A fájl mérete: ' + fileSizeMb + ' MB');

    // FileReader Promise-ba csomagolva, így `await`-tel várható
    const result = await new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = () => resolve(fileReader.result);
        fileReader.onerror = (error) => reject("Hiba a fájl beolvasásakor: " + error);

        fileReader.readAsDataURL(value);
    });

    const newImg = new Image();
    newImg.src = result;

    // Kép betöltésének bevárása Promise-al
    await new Promise((resolve, reject) => {
        newImg.onload = resolve;
        newImg.onerror = reject;
    });
/*
    console.log("Kép betöltve:", newImg.src);
    console.log("Eredeti szélesség:", newImg.width);
    console.log("Eredeti magasság:", newImg.height);
*/
    // Új méretek beállítása (példa: max. 400px szélesség)
    const scaleFactor = maxWidth / newImg.width;
    const newWidth = maxWidth;
    const newHeight = newImg.height * scaleFactor;

    
    // console.log("Új szélesség:", newWidth);
    // console.log("Új magasság:", newHeight);
    // Canvas létrehozása és rajzolás
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(newImg, 0, 0, newWidth, newHeight);

    // A módosított kép Base64 formátumban

    const compressedBase64 = canvas.toDataURL("image/jpeg",1)

    compressedObj = {src : compressedBase64 , title : value.name}; // 100%-os minőség


    return compressedObj
 
}