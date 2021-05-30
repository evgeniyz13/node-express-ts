import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { config } from './config'

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = config.baseUrl

  constructor(private http: HttpClient) {}

  register(body: RegisterInput) {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, body)
  }

  login(body: LoginInput) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, body)
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

interface LoginInput {
  email: string
  password: string
}

interface LoginResponse {}
