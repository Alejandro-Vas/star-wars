export interface ICharacterEntity {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films?: (string)[] | null;
    species?: (string | null)[] | null;
    vehicles?: (string | null)[] | null;
    starships?: (string | null)[] | null;
    created: string;
    edited: string;
    url: string;
}

export interface ICharactersResponse {
    count: number;
    next: string;
    previous?: string | null;
    results?: (ICharacterEntity)[] | null;
}

export interface ICharacterWookieEntityEntity {
    whrascwo: string;
    acwoahrracao: string;
    scracc: string;
    acraahrc_oaooanoorc: string;
    corahwh_oaooanoorc: string;
    worowo_oaooanoorc: string;
    rhahrcaoac_roworarc: string;
    rrwowhwaworc: string;
    acooscwoohoorcanwa: string;
    wwahanscc?: (string)[] | null;
    cakwooaahwoc?: (string | null)[] | null;
    howoacahoaanwoc?: (string | null)[] | null;
    caorarccacahakc?: (string | null)[] | null;
    oarcworaaowowa: string;
    wowaahaowowa: string;
    hurcan: string;
}

export interface ICharachtersWookieResponse {
    oaoohuwhao: number;
    whwokao: string;
    akrcwohoahoohuc: string | null;
    rcwochuanaoc?: (ICharacterWookieEntityEntity)[] | null;
}
