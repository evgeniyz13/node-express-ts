import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class JobDetails implements JobDetailsModel {
  @PrimaryColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  logo: string

  @Column({ nullable: true })
  designBannerUrl: string

  @Column({ nullable: true })
  designBannerFullUrl: string

  @Column({ nullable: true })
  companyName: string

  @Column({ nullable: true })
  date: string

  @Column({ nullable: true })
  salary: number

  @Column({ nullable: true })
  salaryFrom: number

  @Column({ nullable: true })
  salaryTo: number

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  cityName: string

  @Column({ nullable: true })
  vacancyAddress: string

  @Column({ nullable: true })
  districtName: string

  @Column({ nullable: true })
  metroName: string

  @Column({ nullable: true })
  contactPhone: string

  @Column({ nullable: true })
  contactURL: string
}

export interface JobDetailsModel {
  id: number
  name: string
  logo: string
  designBannerUrl: string
  designBannerFullUrl: string
  companyName: string
  date: string
  salary: number
  salaryFrom: number
  salaryTo: number
  description: string
  cityName: string
  vacancyAddress: string
  districtName: string
  metroName: string
  contactPhone: string
  contactURL: string
}
