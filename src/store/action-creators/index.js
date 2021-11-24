import * as CarActionCreator from "./car";
import * as FormActionCreator from "./form";

const actionCreator = { ...CarActionCreator, ...FormActionCreator };

export default actionCreator;
