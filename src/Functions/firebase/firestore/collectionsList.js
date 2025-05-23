
const collections = ['kedvezmenyek','programok','partnerek','galeria','elnokseg','szerzodott_iskolak','gdpr'];

const collectionsList = collections.slice().sort((a, b) => a.localeCompare(b))

export default collectionsList;

