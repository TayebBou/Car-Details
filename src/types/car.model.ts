export interface ICar {
    id: string,
    lastUpdate: string,
    vehicle: {
        category: string,
        firstHand: boolean,
        standardComputed: string,
        firstCirculationDate: string,
        model: string,
        mileage: number,
        doors: number,
        energy: string,
        year: string,
        externalColor: string,
        gearbox: string,
        powerDIN: number,
        version: string,
        make: string,
        length: number,
        commercialName: string,
        fourWheelDrive: boolean,
        ratedHorsePower: number,
        weight: number,
        height: number,
        width: number,
        trunkVolume: number,
        displayedLength: number,
        displayedHeight: number,
        displayedWidth: number,
        critAir: number,
        pollutionNorm: string,
        seats: number,
        owners: number,
        conversionBonusEligibility: boolean
    },
    customerType: string,
    zipCode: string,
    contacts: {
        email: string,
        phone1: {
            value: string,
            note: string
        }
    },
    constructorWarranty: {
        duration: number,
        mileage: number,
        endDate: string
    },
    visitPlace: string,
    publicationEndDate: string,
    status: string,
    creationDate: string,
    firstOnlineDate: string
}