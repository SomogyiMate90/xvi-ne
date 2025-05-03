
const collections = ['dokumentumok','kedvezmenyek','programok','partnerek','galeria','szerzodott_iskolak'];

const partOfCollecionList = collections.slice().sort((a, b) => a.localeCompare(b))

export default partOfCollecionList;

