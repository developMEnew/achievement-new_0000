'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ListView() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [filterType, setFilterType] = useState('all')

  // Sample data (you would fetch this from an API in a real application)
  const sampleData = [
    { date: '2024-12-16', items: [
      { id: 1, number: '0006', count: 6789 },
      { id: 2, number: '0007', count: 6789 },
    ]},
    { date: '2024-12-17', items: [
      { id: 3, number: '0008', count: 6789 },
      { id: 4, number: '0009', count: 6789 },
    ]},
    { date: '2024-12-18', items: [
      { id: 5, number: '0010', count: 6789 },
      { id: 6, number: '0011', count: 6789 },
    ]},
  ]

  const filteredData = sampleData.filter(group => {
    if (filterType === 'all') return true
    if (filterType === 'custom') {
      const groupDate = new Date(group.date)
      const start = startDate ? new Date(startDate) : null
      const end = endDate ? new Date(endDate) : null
      if (start && end) {
        return groupDate >= start && groupDate <= end
      } else if (start) {
        return groupDate >= start
      } else if (end) {
        return groupDate <= end
      }
    }
    return true
  })

  return (
    <div className="min-h-[calc(100vh-136px)] flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <div className="bg-white rounded-3xl p-6 shadow-lg transform-gpu perspective-1000 rotate-x-1 rotate-y-2 mb-6">
          <h2 className="text-xl font-bold mb-4">Date Filter</h2>
          <div className="space-y-4">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Select filter type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            {filterType === 'custom' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-gray-50 border-0"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-gray-50 border-0"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {filteredData.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-3xl p-6 shadow-lg transform-gpu perspective-1000 rotate-x-1 rotate-y-2">
              <div className="text-gray-500 mb-4">{group.date}</div>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-xl transform-gpu rotate-x-1"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">{item.id}</span>
                      <span className="text-gray-800">{item.number}</span>
                    </div>
                    <span className="text-gray-800">{item.count}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="font-medium">Total</span>
                <span className="text-blue-500 font-medium">
                  {group.items.reduce((sum, item) => sum + item.count, 0)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

