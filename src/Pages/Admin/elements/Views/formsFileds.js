const docId = {
  docId: {
    id: "docId",
    className: "form-control text-success text-black",
    readOnly: true,
    disabled: true,
  },
};

const dinamicUrl = {
  titleUrl: {
    id: "titleUrl",
    placeholder: "Ezt a mezőt nem kell tölteni, dinamikusan egészíti ki magát",
    className: "form-control text-danger",
    required: true,
    readOnly: true,
  },
};


const kedvezmenyek = {
  title: {
    id: "title",
    required: true,
    placeholder: "írd ide a cég nevét",
    className: "form-control text-success",
    labelText: 'Név',
  },

  address: {
    id: "address",
    required: true,
    placeholder: "A vállalkozás címe",
    className: "form-control text-success",
    labelText: 'Cím',
  },

  text: {
    id: "text",
    required: true,
    placeholder: "Írd le a kedvezmény mértékét",
    className: "form-control text-success",
    labelText: 'Egyszerű leírás',
  },
  description: {
    id: "description",
    labelText: 'Nyitvatartás',
    placeholder: "Enter billentyűvel válaszd el a bekedéseket egymástól...",
    className: "form-control text-success",
    required: true,
  },

  phoneNumber: {
    id: "phoneNumber",
    className: "form-control text-success",
    minLength: 10,
    labelText: 'Telefonszám',
  },

  link: {
    id: "link",
    placeholder: "Másold be az oldal linkjét",
    className: "form-control text-success",
    labelText: 'A vállalkozás weboldala',
  },
};

const programok = {

  title: {
    id: "title",
    labelText: 'Program neve',
    placeholder: "Mi a program neve?",
    className: "form-control text-success",
    required: true,
  },

  address: {
    id: "address",
    labelText: 'Cím',
    placeholder: "irányítószám, Város, és (ha szükséges) utca házszám. Esetlen GPS koordináta",
    className: "form-control text-success",
  },

  description: {
    id: "description",
    labelText: 'Esemény leírás',
    placeholder: "Enter billentyűvel válaszd el a bekedéseket egymástól...",
    className: "form-control text-success",
    required: true,
  },

  base64Url: {
    id: "base64Url",
    readOnly: true,
    placeholder: "Nincs feltöltésre váró kép",
  },

  startTime: {
    id: "startTime",
    labelText: 'Esemény kezdete',
    type: "datetime-local",
    title:
      "Figyelj a pontos időre! Ha csak dátum fontos, akkor az időt állítsd éjfélre '00:00'",
    className: "form-control text-success",
    minLength: 10,
  },

  endTime: {
    id: "endTime",
    labelText: 'Esemény vége',
    type: "datetime-local",
    title:
      "Figyelj a pontos időre! Ha csak dátum fontos, akkor az időt állítsd éjfélre '00:00'",
    className: "form-control text-success",
  },
};

const partnerek = {
  title: {
    id: "title",
    required: true,
    placeholder: "írd ide a cég nevét",
    className: "form-control text-success",
    labelText: 'Partner neve'
  },
  url: {
    id: "url",
    required: true,
    placeholder: "www.adomanyozo-neve.hu",
    className: "form-control text-success",
    labelText: 'Partner weboldal címe'
  },

  base64Url: {
    id: "base64Url",
    readOnly: true,
    placeholder: "Nincs feltöltésre váró kép",
  },
  photoWidth: {
    photoWidth : 200
  }
};

const elnokseg = {
  name: {
    id: "name",
    required: true,
    className: "form-control text-success",
    labelText: 'Név'
  },
  beosztas: {
    id: "beosztas",
    required: true,
    placeholder: "elnök, elnökhelyettes",
    className: "form-control text-success",
    labelText: 'Tisztség'
  },
    phoneNumber: {
    id: "phoneNumber",
    className: "form-control text-success",
    labelText: 'telefonszam'
  },
  email: {
    id: "email",
    placeholder: "example@valami.com",
    className: "form-control text-success",
    labelText: 'email'
  },
  base64Url: {
    id: "base64Url",
    readOnly: true,
    placeholder: "Nincs feltöltésre váró kép",
  },
  photoWidth: {
    photoWidth : 300
  },
  rendezes: {
    id: 'rendezes',
    required: true,
    type: 'number',
    labelText: 'Sorrend'

  }
};

const galeria = {
  title: {
    id: "title",
    labelText: 'Cím',
    placeholder: "Kirándulás/esemény neve",
    className: "form-control text-success",
    required: true,
  },
  base64Url: {
    title : 'Borító kép (1 db)',
    id: "base64Url",
    readOnly: true,
    placeholder: "Nincs feltöltésre váró kép",
  },
  address: {
    id: "address",
    labelText: 'Helyszín (hol volt?)',
    placeholder: "[opcionális] pontos cím vagy GPS koordináta",
    className: "form-control text-success",
  },
  description: {
    id: "description",
    labelText: 'Esemény bemutatása',
    placeholder: "Enter billentyűvel válaszd el a bekedéseket egymástól...",
    className: "form-control text-success",
    required: true,
  },
  time : {
    id: 'date',
    type: 'date',
    readOnly: true,
    value: new Date().toISOString().split('T')[0],
    labelText : 'Szerkesztés ideje',
    className: "form-control text-danger",
  },
  fireStorage : {
    id: 'fireStorage',
    labelText : 'Képek feltöltése',
    className: "form-control text-danger",
 }

}

export { docId, dinamicUrl, kedvezmenyek, programok, partnerek,elnokseg, galeria };
