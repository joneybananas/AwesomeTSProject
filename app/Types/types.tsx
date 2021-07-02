export type Character = { 
    id: number
    name: string
    status: string
    species : string 
    type : string 
    gender :string
    origin :object
    location:object
    image : string
    episode: string[] 
    url:string
    created: string
    // arr?: number[] // number[] | undefined
    //vv: null | string
}

// 0, "", null, undefined
// 1 == "1"
// 1 === "1"