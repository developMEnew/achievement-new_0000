'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CalendarView() {
  const [selectedMonth, setSelectedMonth] = useState('January')
  const [selectedYear, setSelectedYear] = useState(2025)
  const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set())
  const [lastUpdated, setLastUpdated] = useState('')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  useEffect(() => {
    updateLastUpdated()
  }, [selectedDays])

  const getDaysInMonth = (month: string, year: number) => {
    const monthIndex = months.indexOf(month)
    return new Date(year, monthIndex + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: string, year: number) => {
    const monthIndex = months.indexOf(month)
    return new Date(year, monthIndex, 1).getDay()
  }

  const toggleDay = (dayString: string) => {
    const newSelectedDays = new Set(selectedDays)
    if (newSelectedDays.has(dayString)) {
      newSelectedDays.delete(dayString)
    } else {
      newSelectedDays.add(dayString)
    }
    setSelectedDays(newSelectedDays)
  }

  const updateLastUpdated = () => {
    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    const formattedTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    setLastUpdated(`${formattedDate}, ${formattedTime}`)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear)
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2" />)
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayString = `${selectedMonth} ${day}, ${selectedYear}`
      const isSelected = selectedDays.has(dayString)
      days.push(
        <button
          key={day}
          onClick={() => toggleDay(dayString)}
          className={`p-2 rounded-lg transition-all ${
            isSelected 
              ? 'bg-blue-500 text-white transform-gpu rotate-x-2' 
              : 'hover:bg-gray-100 transform-gpu rotate-x-1'
          }`}
        >
          {day}
        </button>
      )
    }

    return days
  }

  return (
    <div className="min-h-[calc(100vh-136px)] flex items-center justify-center">
      <div className="w-full max-w-md p-4 pb-20">
        <div className="space-y-4">
          {/* Selected Days Card */}
          <div className="bg-blue-500 text-white rounded-3xl p-6 shadow-lg transform-gpu perspective-1000 rotate-x-1 rotate-y-2">
            <div className="text-center space-y-2">
              <div className="text-sm font-medium">SELECTED DAYS</div>
              <div className="text-5xl font-bold">{selectedDays.size}</div>
              <div className="text-sm opacity-90">in {selectedMonth}</div>
              <div className="text-xs opacity-75 pt-4">
                Last Updated
                <div>{lastUpdated}</div>
              </div>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="bg-white rounded-3xl p-6 shadow-lg transform-gpu perspective-1000 rotate-x-1 rotate-y-2">
            <Select
              value={`${selectedMonth} ${selectedYear}`}
              onValueChange={(value) => {
                const [month, year] = value.split(' ')
                setSelectedMonth(month)
                setSelectedYear(parseInt(year))
              }}
            >
              <SelectTrigger className="w-full mb-6 bg-gray-50 border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={`${month} ${selectedYear}`}>
                    {month} {selectedYear}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-gray-500 text-sm">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {renderCalendar()}
            </div>
          </div>

          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white transform-gpu rotate-x-1"
            onClick={updateLastUpdated}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  )
}

