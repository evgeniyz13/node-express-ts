import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { config } from './config'

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = config.baseUrl

  constructor(private http: HttpClient) {}

  register(body: RegisterInput) {
    console.log(body)
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, body)
  }
}

interface RegisterInput {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface RegisterResponse extends RegisterInput {
  is: string
}
