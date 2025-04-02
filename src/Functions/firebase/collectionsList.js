
const collections = ['dokumentumok','kedvezmenyek','programok','partnerek','galeria'];

const collectionsList = collections.slice().sort((a, b) => a.localeCompare(b))

export default collectionsList;

