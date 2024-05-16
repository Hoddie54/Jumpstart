import { Student } from "@/types/student"
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
  student: Student
}

export default function StudentCard({ student }: StudentCardProps) {
  const { candidates, setCandidates } = useContext(CartContext)

  console.log(candidates)

  const { toast } = useToast()

  function successAnimation() {
    const pendingClassName = "loading-btn--pending"
    const successClassName = "loading-btn--success"

    const stateDuration = 1500

    const elem = document.getElementById(
      `loading-btn-${student.firstName + student.secondName}`
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

  const isCandidateAlreadyInCart = candidates.includes(student)

  function success() {
    if (isCandidateAlreadyInCart) {
      setCandidates((c) => {
        const newArray = [...c]
        return newArray.filter((v) => v !== student)
      })
      toast({
        title: "Candidated Removed",
        description: `${student.firstName} ${student.secondName} has to removed from the cart`,
      })
    } else {
      successAnimation()
      setCandidates((c) => {
        return [...c, student]
      })
      toast({
        title: "Candidated Added",
        description: `${student.firstName} ${student.secondName} has to added to the cart`,
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
          <CardTitle>{student.firstName + " " + student.secondName}</CardTitle>
          {/** IMAGE */}
          <div className="w-100">
            <img
              src={student.photoURL}
              className="rounded-md w-100 zoom-img"
              style={{ maxHeight: "300px" }}
            />
          </div>
          {/** ROLES */}
          <div className="flex flex-wrap">
            {student.roles.map((role, i) => {
              return (
                <div key={student.firstName + student.secondName + i}>
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
                {student.education}
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
                {student.workExperience}
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
                {student.proudPoint}
              </p>
            </div>
          </div>

          {/** LANGUAGES */}
          <div className=" flex items-center justify-between space-x-4 rounded-md border p-4">
            <p className="text-sm font-medium leading-none">
              Additional Languages:{" "}
            </p>
            {student.additionalLanguages.map((language, i) => {
              return (
                <div key={student.firstName + student.secondName + i}>
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
            <Badge variant="outline">{student.rightToWork}</Badge>
          </div>

          {/** SALARY */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div>
              <p className="text-sm font-medium leading-none">
                Salary Expectations
              </p>
              <p className="text-sm text-muted-foreground">
                {student.salaryExpectations}
              </p>
            </div>
          </div>
          {/** SALARY */}
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <p className="text-sm font-medium leading-none">Links</p>
            <p className="text-sm font-medium leading-none">
              <Link to={student.CVURL} target="_blank">
                CV
              </Link>
            </p>
            <p className="text-sm font-medium leading-none">
              <Link to={student.linkedInURL} target="_blank">
                <LinkedinIcon height={"16px"} />
              </Link>
            </p>
          </div>
        </CardContent>
      </div>
      <CardFooter style={{ justifySelf: "flex-end" }}>
        <Button
          className="w-full loading-btn"
          id={`loading-btn-${student.firstName + student.secondName}`}
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
