import React from 'react'


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
function CreateInterviewDialog() {
  return (
   <Dialog>
  <DialogTrigger> <Button>+ Create Inteview</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Please Submit following details. </DialogTitle>
      <DialogDescription>
       <Tabs defaultValue="resume-upload" className="w-full mt-5">
             <TabsList>
                 <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
                 <TabsTrigger value="job-description">Job Description</TabsTrigger>
             </TabsList>
        <TabsContent value="resume-upload">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default CreateInterviewDialog