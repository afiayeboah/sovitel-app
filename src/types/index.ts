import { ReactElement } from "react";



export enum ResponseCodes {
  // Success Codes (2xx)
  OK = 200,
  Created = 201,
  // Client Error Codes (4xx)
  Unauthorized = 401,
  Unacceptable = 406,
  Forbidden = 403,
  // Server Codes (5xx)
  InternalServer = 500,
  BadGateWay = 502
}

export type ErrorResponse = {
  status?: number;
  message?: string;
}

export type PaginatedResponse<DataType> = {
  count: number;
  previousPage?: string;
  nextPage?: string;
  pages: number;
  results: DataType[];
}

export type PathType = {
  [key: string]: string;
}

export type RouteType = {
  path: string;
  element: ReactElement;
  exact?: boolean;
  redirect?: string;
}