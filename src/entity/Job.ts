import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Job implements JobModel {
  @PrimaryColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  cityName: string

  @Column({ nullable: true })
  companyName: string

  @Column({ nullable: true })
  date: string

  @Column({ nullable: true })
  salary: string

  @Column({ nullable: true })
  shortDescription: string
}

export interface JobModel {
  id: number
  name: string
  cityName: string
  companyName: string
  date: string
  salary: string
  shortDescription: string
}
