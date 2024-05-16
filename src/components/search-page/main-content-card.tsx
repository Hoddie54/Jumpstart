import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

import StudentCard from "./student-card"
import { students } from "@/utils/data"

export default function MainContentCard() {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>All candidates</CardTitle>
        <CardDescription>
          Add candidates to your 'basket' to move to the next stage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap">
          {students.map((student) => {
            return (
              <StudentCard
                student={student}
                key={student.firstName + student.secondName}
              />
            )
          })}
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}
