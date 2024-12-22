'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddClip() {
  return (
    <div className="min-h-[calc(100vh-136px)] flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <div className="bg-white rounded-3xl p-6 shadow-lg transform-gpu perspective-1000 rotate-x-1 rotate-y-2">
          <Tabs defaultValue="add" className="space-y-6">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="add">Add New Clip</TabsTrigger>
              <TabsTrigger value="delete">Delete</TabsTrigger>
            </TabsList>

            <TabsContent value="add" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="clipNumber">Clip Number</Label>
                <Input 
                  id="clipNumber"
                  placeholder="0006"
                  className="bg-gray-50 border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attributeCount">Attribute Count</Label>
                <Input 
                  id="attributeCount"
                  placeholder="6789"
                  className="bg-gray-50 border-0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">For</Label>
                <Input 
                  id="date"
                  type="date"
                  defaultValue="2024-12-16"
                  className="bg-gray-50 border-0"
                />
              </div>

              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                Add
              </Button>
            </TabsContent>

            <TabsContent value="delete" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="deleteNumber">Select Number</Label>
                <Input 
                  id="deleteNumber"
                  placeholder="47"
                  className="bg-gray-50 border-0 w-24"
                />
              </div>
              <Button variant="destructive" className="w-full">
                DELETE
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

