export type Index = {
    name: string,
    image: string,
    totalEvents: {
      label: string,
      num: string,
    },

    sports: {
      label: string,
      type: string,
    },
  }[];

export type Data = {
    name: string,
    details: string,
    location: string,
    image: string,
    background: string,
  }[];
    
  
  export default Data;
  