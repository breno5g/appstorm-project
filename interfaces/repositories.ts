import { IUser } from "./user";

export interface IRepositories {
  owner: IUser
  description: string
  html_url: string
  stargazers_count: number
  name: string
}