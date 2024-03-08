interface DrugData {
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
}

interface StoreData {
    name: string;
    location: string;
    drugs: DrugData[];
}

export const drugData: DrugData[] = [
    { name: 'Paracetamol', price: 10, description: 'Anti-inflammatory and analgesic', imageUrl: 'https://abclive1.s3.amazonaws.com/af604476-fa4c-47ca-87af-630f02e4f274/productimage/PARACETAMOL-P24___3___L.jpg' },
    { name: 'Ibuprofen', price: 15, description: 'Anaesthetic agent', imageUrl: 'https://abclive1.s3.amazonaws.com/af604476-fa4c-47ca-87af-630f02e4f274/productimage/NUROFENRRMAX___2___L.jpg' },
    { name: 'Nytol One-A-Night', price: 20, description: 'Nytol is a sleep aid medication that is clinically proven to help relieve temporary difficulties getting to sleep.', imageUrl: 'https://abclive1.s3.amazonaws.com/af604476-fa4c-47ca-87af-630f02e4f274/productimage/NYTOL-20___L.jpg' },
    { name: 'Cetirizine', price: 8, description: 'Antihistamine that reduces the effects of natural chemical histamine in the body', imageUrl: 'https://abclive1.s3.amazonaws.com/af604476-fa4c-47ca-87af-630f02e4f274/productimage/P-CETRINE-CETIRIZINE___2___L.jpg' },
    { name: 'Anadin Aspirin', price: 12, description: 'Used to treat pain, fever, or inflammation', imageUrl: 'https://abclive1.s3.amazonaws.com/af604476-fa4c-47ca-87af-630f02e4f274/productimage/ANADINMAX12___1___L.jpg' },
];

export const stores: StoreData[] = [
    { name: 'Pharmacy One', location: '1 Main Street', drugs: [drugData[0], drugData[1], drugData[2], drugData[3], drugData[4]] },
    { name: 'Pharmacy Two', location: '2 Main Street', drugs: [drugData[0], drugData[1], drugData[4]] },
    { name: 'Pharmacy Three', location: '3 Main Street', drugs: [drugData[1], drugData[3]] },
];