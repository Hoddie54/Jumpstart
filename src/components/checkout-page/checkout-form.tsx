import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { FormEvent, useContext, useState } from "react"
import { defaultFormValues } from "@/utils/data"
import { FormData } from "../../types/matching"
import { CartContext } from "@/context/cart"
import { sendEmail } from "@/utils/requests"
import { useToast } from "../ui/use-toast"

export default function CheckoutForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormValues)
  const { candidates } = useContext(CartContext)
  const { toast } = useToast()

  function onFormDataChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((d) => {
      const newFormData = { ...d, [e.target.name]: e.target.value }
      return newFormData
    })
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    //In this test version, only send email to 1st candidate
    const candidate = candidates[0]
    await sendEmail(formData, candidate)
    toast({
      title: "Success",
      description: "Emails have been successfully sent",
    })
  }

  return (
    <Card>
      <div className="relative hidden flex-col items-start gap-8 md:flex">
        <form className="grid w-full items-start gap-6 p-4" onSubmit={onSubmit}>
          <CardTitle>Matching Request Form</CardTitle>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                name="companyName"
                type="text"
                placeholder="Jumpstart"
                onChange={onFormDataChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="recruiter-name">Recruiter Name</Label>
              <Input
                id="recruiter-name"
                name="recruiterName"
                type="text"
                placeholder="..."
                onChange={onFormDataChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="recruiter-email">Recruiter Email</Label>
              <Input
                id="recruiter-email"
                name="recruiterEmail"
                type="email"
                onChange={onFormDataChange}
                placeholder="..."
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="recruiter-linkedin">Recruiter LinkedIn</Label>
              <Input
                id="recruiter-linkedin"
                name="recruiterLinkedIn"
                type="url"
                onChange={onFormDataChange}
                placeholder="..."
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="job-title">Job title</Label>
              <Input
                type="text"
                required
                id="job-title"
                onChange={onFormDataChange}
                name="jobTitle"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="spotlight-video-url">Spotlight Video URL</Label>
              <Input
                type="url"
                required
                id="spotlight-video-url"
                onChange={onFormDataChange}
                name="spotlightVideoURL"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="job-description">Job description</Label>
            <Textarea
              id="job-description"
              name="jobDescription"
              placeholder="We are looking for..."
              onChange={onFormDataChange}
              className="min-h-[9.5rem]"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="additional-information">
              Additional information
            </Label>
            <Textarea
              id="additional-information"
              onChange={onFormDataChange}
              name="additionalInformation"
              placeholder="..."
              className="min-h-[3rem]"
            />
          </div>

          <Button type="submit">Send matching requests</Button>
        </form>
      </div>
    </Card>
  )
}
