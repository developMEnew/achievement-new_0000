'use client'

import { Button } from "@/components/ui/button"

export default function StatsCard() {
  return (
    <div className="min-h-[calc(100vh-136px)] flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <div className="bg-white rounded-3xl p-6 shadow-lg transform-gpu perspective-1000 rotate-x-1 rotate-y-2 transition-transform hover:rotate-x-2 hover:rotate-y-3">
          <div className="space-y-6">
            {/* Header Section */}
            <div className="bg-blue-100 rounded-2xl p-4 transform-gpu rotate-x-1">
              <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                <span>ACHIEVEMENTS</span>
                <span>January</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-1">45500</div>
              <div className="text-xs text-gray-500">51.7043543434548%</div>
              <div className="text-sm mt-2">88000</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-3 transform-gpu rotate-x-1">
                <div className="text-sm text-gray-600 mb-1">Available Working days</div>
                <div className="text-2xl font-semibold">22</div>
                <div className="text-xs text-gray-500">Daily</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 transform-gpu rotate-x-1">
                <div className="text-sm text-gray-600 mb-1">percentage</div>
                <div className="text-2xl font-semibold">22.56%</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 transform-gpu rotate-x-1">
                <div className="text-sm text-gray-600 mb-1">required for 100%</div>
                <div className="text-2xl font-semibold">6544</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3 transform-gpu rotate-x-1">
                <div className="text-sm text-gray-600 mb-1">daily percentage</div>
                <div className="text-2xl font-semibold">67.56%</div>
              </div>
            </div>

            {/* Action Button */}
            <Button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transform-gpu rotate-x-1 transition-all hover:shadow-lg"
            >
              ADD NEW CLIP
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}

