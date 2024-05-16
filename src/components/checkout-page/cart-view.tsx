import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CartContext } from "@/context/cart"
import { useContext } from "react"

export default function CartView() {
  const { candidates } = useContext(CartContext)

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Candidate Cart</CardTitle>
        <CardDescription>
          All of the following candidates will receieve a matching request
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Roles</TableHead>
              <TableHead className="hidden sm:table-cell">Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate, i) => {
              return (
                <TableRow className={i % 2 === 0 ? "bg-accent" : ""} key={i}>
                  <TableCell>
                    <div className="font-medium">
                      {candidate.firstName + " " + candidate.secondName}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell ">
                    {candidate.roles.map((role) => {
                      return <Badge className="m-1">{role}</Badge>
                    })}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {candidate.salaryExpectations}
                    </Badge>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
