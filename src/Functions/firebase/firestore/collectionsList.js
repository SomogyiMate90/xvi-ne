
const collections = ['kedvezmenyek','programok','partnerek','galeria','elnokseg','szerzodott_iskolak','gdpr','fali_ujsag'];

const collectionsList = collections.slice().sort((a, b) => a.localeCompare(b))

export default collectionsList;

