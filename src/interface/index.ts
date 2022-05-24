interface IMyGranaryData {
  miliNum: number;
  miliInput: number;
  miliOutput: number;
}

interface IConvertCenterList {
  id?: number;
  icon: any;
  name: string;
  url?: string;
}

interface IHomeIcon {
  convertCenterList: Array<IConvertCenterList>;
  hotActivitiesData: Array<IConvertCenterList>;
}

interface IWxTickets {
  id: 1;
  icon: any;
  title: string;
  miliNum: string;
  enough: 0;
  mili: string;
  price: string;
  converted: string;
  isConvert: boolean;
  productNotice: string;
}

interface IInput {
  id: number;
  title: string;
  date: number;
  miliNum: string;
}
interface IPriceMiliDetail {
  input: Array<IInput>;
  output: Array<IInput>;
}

interface IUnused {
  id: number;
  time: string;
  orderCompletion: string;
  ticketImg: string;
  ticketName: string;
  deadline: string;
  copyCDKEY: string;
  CDKEYUrl?: string;
  share: string;
  shareTime: number;
  isUsed: boolean;
}
interface IOrderdata {
  unused: Array<IUnused>;
  used: Array<IUnused>;
}

interface IHotActivitiesData {
  icon: any;
  name: string;
  url: string;
}

export {
  IConvertCenterList,
  IMyGranaryData,
  IHomeIcon,
  IWxTickets,
  IPriceMiliDetail,
  IOrderdata,
  IHotActivitiesData
};
