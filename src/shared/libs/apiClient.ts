import { create } from "apisauce";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const headers = {
  Accept: "application/json",
};
export enum RequestStatus {
  Idle = "Idle",
  Pending = "Pending",
  Fulfilled = "Fulfilled",
  Failed = "Failed",
}

const baseAPIClient = create({
  baseURL: BASE_URL,
  headers,
});

export default baseAPIClient;
