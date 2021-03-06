import { WEEK_DAYS, ITEM_TYPES, COLLECTOR, DONOR } from './utils'

declare global {
    interface UserPostParams extends LogInParams {
        name: string
        userType: UserTypes
    }
    interface LogInParams {
        email: string
        password: string
    }

    interface LogInResponse {
        nome: string
        id: string
        perfil: string
    }
    interface EventForm {
        date: string
        description: string
        collectionPlace: number
        workingHours: { from: string; to: string }
        name: string
        id?: number
    }

    interface EventResponse {
        id: number
        nome: string
        descricao: string
        dataInicio: string
        dataFim: string
        pontoColetaId: number
    }

    interface AlterCollectionPlaceParams extends CollectionPlace {
        placeId: string
    }
    interface CollectionPlace {
        name: string
        description: string
        phone: string
        cep: string
        address: string
        buildingNum: number
        latitude: number
        longitude: number
        workingHours: { from: string; to: string }
        workingDays: WeekDays[]
        acceptableItems: number[]
        configuredItems?: AcceptableItemsResponse[]
        id?: number
    }

    interface CollectionPlaceResponse {
        cep: string
        cidadeEstado: string
        coletorId: string
        descricao: string
        diasFuncionamento: string
        horarioFimFuncionamento: string
        horarioInicioFuncionamento: string
        id: number
        itensDoacao: AcceptableItemsResponse[]
        latitude: number
        longitude: number
        nome: string
        numero: number
        telefone: string
    }

    interface CepObject {
        bairro: string
        cep: string
        complemento: string
        ddd: string
        gia: string
        ibge: string
        localidade: string
        logradouro: string
        siafi: string
        uf: string
    }

    type UserTypes = typeof COLLECTOR | typeof DONOR
    type WeekDays = typeof WEEK_DAYS[number]
    type AcceptableItems = typeof ITEM_TYPES[number]
    type AssetType = 'place' | 'event'

    interface AcceptableItemsResponse {
        id: number
        produto: AcceptableItems
    }

    interface UrlParams {
        placeId: string
        eventId: string
    }
}
