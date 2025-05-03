
const collections = ['dokumentumok','kedvezmenyek','programok','partnerek','galeria','elnokseg','szerzodott_iskolak'];

const collectionsList = collections.slice().sort((a, b) => a.localeCompare(b))

export default collectionsList;

