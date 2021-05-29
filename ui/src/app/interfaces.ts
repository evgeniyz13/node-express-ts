export interface Job {
  applyDate: string;
  badges: string;
  cityId: string;
  cityName: string;
  companyName: string;
  date: string;
  dateTxt: string;
  designBannerFullUrl: string;
  designBannerUrl: string;
  distanceText: string;
  districtId: string;
  districtName: string;
  formApplyCustomUrl: string;
  hot: string;
  id: string;
  isApply: string;
  isLiked: string;
  lastViewDate: string;
  latitude: string;
  logo: string;
  longitude: string;
  metroId: string;
  metroName: string;
  name: string;
  notebookId: string;
  publicationType: string;
  salary: string;
  salaryComment: string;
  salaryFrom: string;
  salaryTo: string;
  shortDescription: string;
}

export interface JobDetails {
  id: number;
  name: string;
  logo: string;
  designBannerUrl: string;
  designBannerFullUrl: string;
  companyName: string;
  date: string;
  dateTxt: string;
  salary: number;
  salaryFrom: number;
  salaryTo: number;
  salaryComment: string;
  description: string;
  cityName: string;
  vacancyAddress: string;
  districtName: string;
  metroName: string;
  contactPhone: string;
  contactURL: string;
}
