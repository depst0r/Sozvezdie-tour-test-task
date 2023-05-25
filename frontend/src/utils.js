import moment from "moment";

export const transformDate = (date) => moment(date).format("DD.MM");
