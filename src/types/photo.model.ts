export interface IPhoto {
        url_full: string,
        url_vignette: string
}
export interface IPhotos {
    id: string,
    outside: {
        label: string,
        photos: IPhoto[]
    },
    inside: {
        label: string,
        photos: IPhoto[]
    },
    seats: {
        label: string,
        photos: IPhoto[]
    }
}