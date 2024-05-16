import { FormData } from "@/types/matching"
import { Student } from "@/types/student"

export async function sendEmail(formData: FormData, student: Student) {
  const headers = {
    method: "POST",
    body: JSON.stringify({
      service_id: "service_w095av8",
      template_id: "template_iygm9r6",
      user_id: "q8_BFWgdPokWRpcMX",
      template_params: {
        name: student.firstName,
        founder_name: formData.recruiterName,
        company_name: formData.companyName,
        linkedin_url: formData.recruiterLinkedIn,
        job_title: formData.jobTitle,
        job_description: formData.jobDescription,
        reply_to: formData.recruiterEmail,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }

  const response = await fetch(
    "https://api.emailjs.com/api/v1.0/email/send",
    headers
  )
  console.log(await response.json())
}
