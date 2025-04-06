const docId = {
  docId: {
    id: "docId",
    className: "form-control text-success text-black",
    readOnly: true,
    disabled: true,
  },
};

const kedvezmenyekInputs = {
  field1: {
    id: "name",
    required: true,
    placeholder: "írd ide a cég nevét",
    className: "form-control text-success",
  },

  field2: {
    id: "address",
    required: true,
    placeholder: "A cég címe",
    className: "form-control text-success",
  },

  field3: {
    id: "description",
    required: true,
    placeholder: "Írd le a kedvezmény mértékét",
    className: "form-control text-success",
  },

  field4: {
    id: "phoneNumber",
    placeholder: "Telefonszám",
    className: "form-control text-success",
    minLength: 10,
  },

  field5: {
    id: "link",
    placeholder: "Másold be az oldal linkjét",
    className: "form-control text-success",
  },
};

const programsInputs = {
  titleUrl: {
      id: "titleUrl",
      required: true,
      placeholder: "Ezt a mezőt nem kell tölteni, dinamikusan egészíti ki magát",
      className: "form-control text-danger",
      readOnly: true
    },

    title: {
      id: "title",
      required: true,
      placeholder: "Mi a program neve?",
      className: "form-control text-success",
     
    },
  
    address: {
      id: "address",

      placeholder: "irányítószám, Város, és (ha szükséges) utca házszám",
      className: "form-control text-success",
    },
  
  
    description: {
      id: "description",
      required: true,
      placeholder: "Enter billentyűvel válaszd el a bekedéseket egymástól...",
      className: "form-control text-success",
    },

    base64Url: {
        id: 'base64Url',
        readOnly : true,
        placeholder: "Nincs feltöltésre váró kép"
    },
  
    startTime: {
      id: "startTime",
      type: 'datetime-local',
      title: "Figyelj a pontos időre! Ha csak dátum fontos, akkor az időt állítsd éjfélre '00:00'",
      className: "form-control text-success",
      minLength: 10,
    },
  
    endTime: {
      id: "endTime",
      type: 'datetime-local',
      title: "Figyelj a pontos időre! Ha csak dátum fontos, akkor az időt állítsd éjfélre '00:00'",
      className: "form-control text-success",
    }
  };


export { docId, kedvezmenyekInputs, programsInputs}