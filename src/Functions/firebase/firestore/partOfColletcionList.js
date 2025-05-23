
const collections = ['kedvezmenyek','programok','partnerek','galeria','szerzodott_iskolak','elnokseg','gdpr'];

const partOfCollecionList = collections.slice().sort((a, b) => a.localeCompare(b))

export default partOfCollecionList;

