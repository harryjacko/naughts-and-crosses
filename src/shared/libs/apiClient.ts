import { create } from "apisauce";

const BASE_URL = "http://localhost:3000"; // TODO: pull from .env

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
