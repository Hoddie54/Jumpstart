import { ReactNode } from "react"

export type Candidate = {
  firstName: string
  secondName: string
  emailAddress: string
  showProfile: boolean
  photoURL: string
  education: string
  workExperience: ReactNode
  proudPoint: string
  roles: Role[]
  additionalLanguages: string[]
  rightToWork: RightToWork
  salaryExpectations: string
  CVURL: string
  linkedInURL: string
}

export enum Role {
  FOUNDERS_ASSOCATE = "FOUNDERS ASSOCIATE",
  MARKETING_ANALYST = "MARKETING ANALYST",
  OPERATIONS = "OPERATIONS",
  PRODUCT = "PRODUCT",
  SALES = "SALES",
}

export enum RightToWork {
  YES_BRITISH = "BRITISH",
  YES_POSTSTUDY_VISA = "POSTSTUDY VISA",
  YES_GRADUATE_VISA = "GRADUATE VISA",
  YES_SETTLED = "SETTLED",
  NO = "NO",
}
