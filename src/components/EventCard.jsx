// import React from 'react'

import { Link } from "react-router-dom"

function EventCard({event,avgDiameter,approachDate}) {
  return (
<Link to={`/event/${event.id}`}
                    key={event.id}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex flex-col h-full">
                      {/* Title & Hazard Indicator */}
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold text-white">
                          {event.name}
                        </h2>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.is_potentially_hazardous_asteroid
                              ? "bg-red-500/20 text-red-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {event.is_potentially_hazardous_asteroid
                            ? "Hazardous"
                            : "Safe"}
                        </span>
                      </div>

                      {/* Key Data Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="space-y-1">
                          <p className="text-sm text-white/60">
                            Avg. Diameter
                          </p>
                          <p className="font-mono text-white">
                            {avgDiameter} km
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-white/60">
                            Approach Date
                          </p>
                          <p className="font-mono text-white">
                            {approachDate}
                          </p>
                        </div>
                      </div>

                      {/* ID at Bottom */}
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <p className="text-xs text-white/50">
                          ID: {event.id}
                        </p>
                      </div>
                    </div>
                  </Link>
  )
}

export default EventCard
