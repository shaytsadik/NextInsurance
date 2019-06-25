export interface ApiCfg {
    type: string,
    data?: any,
    urlParams?: any,
    disableErrorHandler?: boolean
}

export interface ApiMap {
    [name: string]: {
        url: string,
        method: 'get' | 'post' | 'delete',
        errors?: {
            [name: number]: string   // error-code: error-message
        },
        headers?: {
            [name: string]: string
        }
    }
}

export const apiMap: ApiMap = {
    GetAllManufacturers: {
        url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers',
        method: 'get',
    },
    GetMakesForManufacturer: {
        url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/',
        method: 'get',
    },
    GetModelsForMake: {
        url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/',
        method: 'get',
    }
}

export enum apiCommands {
    GetAllManufacturers = "GetAllManufacturers",
    GetMakesForManufacturer = "GetMakesForManufacturer",
    GetModelsForMake = "GetModelsForMake"
}