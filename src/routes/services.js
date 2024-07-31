import { GET, POST, baseUrl } from "../utils/HTTP";

export const blogPageAPI = () => GET(`${baseUrl}api/blog/`);
export const footerAPI = () =>
  GET(`${baseUrl}api/settings/fetch-frontend-details`);

export const ContactApi = (data) => POST(`${baseUrl}api/contact/send`, data);
