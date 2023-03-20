import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { ICharachtersWookieeResponse, ICharactersResponse } from 'interfaces/index';

const transformResponse = (
  response:ICharactersResponse & ICharachtersWookieeResponse,
  _meta: FetchBaseQueryMeta | undefined,
  { format }: {format: 'wookiee' | 'json'},
):ICharactersResponse => (format === 'wookiee'
  ? {
    count: response.oaoohuwhao,
    next: response.whwokao,
    previous: response.akrcwohoahoohuc,
    results: response.rcwochuanaoc?.map((item) => (
      {
        name: item.whrascwo,
        height: item.acwoahrracao,
        mass: item.scracc,
        hair_color: item.acraahrc_oaooanoorc,
        skin_color: item.corahwh_oaooanoorc,
        eye_color: item.worowo_oaooanoorc,
        birth_year: item.rhahrcaoac_roworarc,
        gender: item.rrwowhwaworc,
        homeworld: item.acooscwoohoorcanwa,
        films: item.wwahanscc,
        species: item.cakwooaahwoc,
        vehicles: item.howoacahoaanwoc,
        starships: item.caorarccacahakc,
        created: item.oarcworaaowowa,
        edited: item.wowaahaowowa,
        url: item.hurcan,
      }
    )),
  }
  : response);

export default transformResponse;
