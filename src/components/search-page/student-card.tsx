import { Candidate } from "@/types/student"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Check, LinkedinIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Link } from "react-router-dom"
import "./confirm-button.scss"
import { useContext } from "react"
import { CartContext } from "@/context/cart"
import { useToast } from "../ui/use-toast"

export type StudentCardProps = {
  candidate: Candidate
}

export default function StudentCard({ candidate }: StudentCardProps) {
  const { candidates, setCandidates } = useContext(CartContext)

  const { toast } = useToast()

  function successAnimation() {
    const pendingClassName = "loading-btn--pending"
    const successClassName = "loading-btn--success"

    const stateDuration = 1500

    const elem = document.getElementById(
      `loading-btn-${candidate.firstName + candidate.secondName}`
    )
    //@ts-ignore
    elem.classList.add(pendingClassName)
    window.setTimeout(() => {
      //@ts-ignore
      elem.classList.remove(pendingClassName)
      //@ts-ignore
      elem.classList.add(successClassName)

      window.setTimeout(
        //@ts-ignore
        () => elem.classList.remove(successClassName),
        stateDuration
      )
    }, stateDuration)
  }

  const isCandidateAlreadyInCart = candidates.includes(candidate)

  function success() {
    if (isCandidateAlreadyInCart) {
      setCandidates((c) => {
        const newArray = [...c]
        return newArray.filter((v) => v !== candidate)
      })
      toast({
        title: "Candidated Removed",
        description: `${candidate.firstName} ${candidate.secondName} has to removed from the cart`,
      })
    } else {
      successAnimation()
      setCandidates((c) => {
        return [...c, candidate]
      })
      toast({
        title: "Candidated Added",
        description: `${candidate.firstName} ${candidate.secondName} has to added to the cart`,
      })
    }
  }

  return (
    <Card
      style={{ width: "30%" }}
      className="flex flex-col m-4 justify-between"
    >
      <div>
        <CardHeader>
          <CardTitle>
            {candidate.firstName + " " + candidate.secondName}
          </CardTitle>
          {/** IMAGE */}
          <div className="w-100">
            <img
              src={candidate.photoURL}
              className="rounded-md w-100 zoom-img"
              style={{ maxHeight: "300px" }}
            />
          </div>
          {/** ROLES */}
          <div className="flex flex-wrap">
            {candidate.roles.map((role, i) => {
              return (
                <div key={candidate.firstName + candidate.secondName + i}>
                  <Badge className="m-1">{role}</Badge>
                </div>
              )
            })}
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/** EDUCATION */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">Education</p>
              <p className="text-sm text-muted-foreground">
                {candidate.education}
              </p>
            </div>
          </div>

          {/** EXPERIENCE */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                Full time experience
              </p>
              <p className="text-sm text-muted-foreground">
                {candidate.workExperience}
              </p>
            </div>
          </div>

          {/** PRIDE */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                They're proud of...
              </p>
              <p className="text-sm text-muted-foreground">
                {candidate.proudPoint}
              </p>
            </div>
          </div>

          {/** LANGUAGES */}
          <div className=" flex items-center justify-between space-x-4 rounded-md border p-4">
            <p className="text-sm font-medium leading-none">
              Additional Languages:{" "}
            </p>
            {candidate.additionalLanguages.map((language, i) => {
              return (
                <div key={candidate.firstName + candidate.secondName + i}>
                  <Badge className="m-1" variant="outline">
                    {language}
                  </Badge>
                </div>
              )
            })}
          </div>

          {/** RIGHT TO WORK */}
          <div className=" flex items-center justify-between space-x-4 rounded-md border p-4">
            <p className="text-sm font-medium leading-none">Right to work</p>
            <Badge variant="outline">{candidate.rightToWork}</Badge>
          </div>

          {/** SALARY */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                Salary Expectations
              </p>
              <p className="text-sm text-muted-foreground">
                {candidate.salaryExpectations}
              </p>
            </div>
          </div>
          {/** SALARY */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <p className="text-sm font-medium leading-none">Links</p>
            <p className="text-sm font-medium leading-none">
              <Link to={candidate.CVURL} target="_blank">
                CV
              </Link>
            </p>
            <p className="text-sm font-medium leading-none">
              <Link to={candidate.linkedInURL} target="_blank">
                <LinkedinIcon height={"16px"} />
              </Link>
            </p>
          </div>
        </CardContent>
      </div>
      <CardFooter style={{ justifySelf: "flex-end" }}>
        <Button
          className="w-full loading-btn"
          id={`loading-btn-${candidate.firstName + candidate.secondName}`}
          onClick={success}
        >
          <span className="loading-btn__text">
            <Check className="mr-2 h-4 w-4" />
            <span>
              {" "}
              {isCandidateAlreadyInCart ? "Remove from cart" : "Add to cart"}
            </span>
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
