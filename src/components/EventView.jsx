// /import React from 'react'

function EventView({neo,avgDiameter,closeApproach}) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header Section */}
                    <div className="p-6 md:p-8 border-b border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white">{neo.name}</h1>
                                <p className="text-sm text-white/60">Designation: {neo.designation}</p>
                            </div>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                neo.is_potentially_hazardous_asteroid 
                                    ? 'bg-red-500/20 text-red-400' 
                                    : 'bg-green-500/20 text-green-400'
                            }`}>
                                {neo.is_potentially_hazardous_asteroid ? 'Hazardous' : 'Safe'}
                            </span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Basic Info Column */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-3">Physical Characteristics</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-white/60">Absolute Magnitude</span>
                                        <span className="font-mono text-white">{neo.absolute_magnitude_h}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-white/60">Average Diameter</span>
                                        <span className="font-mono text-white">{avgDiameter} km</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-white/60">Sentry Object</span>
                                        <span className="font-mono text-white">
                                            {neo.is_sentry_object ? 'Yes' : 'No'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-white mb-3">Close Approach Data</h2>
                                <div className="space-y-4">
                                    {closeApproach && (
                                        <>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-white/60">Date & Time</span>
                                                <span className="font-mono text-white">{closeApproach.close_approach_date_full}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-white/60">Relative Velocity</span>
                                                <span className="font-mono text-white">
                                                    {parseFloat(closeApproach.relative_velocity.kilometers_per_second).toFixed(2)} km/s
                                                </span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-white/60">Miss Distance</span>
                                                <span className="font-mono text-white">
                                                    {parseFloat(closeApproach.miss_distance.kilometers).toFixed(0)} km
                                                </span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-2">
                                                <span className="text-white/60">Orbiting Body</span>
                                                <span className="font-mono text-white">{closeApproach.orbiting_body}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Column */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-3">NASA Resources</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span className="text-white/60">JPL URL</span>
                                        <a 
                                            href={neo.nasa_jpl_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="font-mono text-blue-400 hover:text-blue-300 underline"
                                        >
                                            View on NASA JPL
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Orbital Data Section */}
                            <div>
                                <h2 className="text-lg font-semibold text-white mb-3">Orbital Data</h2>
                                {neo.orbital_data && (
                                    <div className="space-y-4">
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-white/60">Orbit ID</span>
                                            <span className="font-mono text-white">{neo.orbital_data.orbit_id}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-white/60">Orbit Class</span>
                                            <span className="font-mono text-white">{neo.orbital_data.orbit_class?.orbit_class_type}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-white/60">Orbit Description</span>
                                            <span className="font-mono text-xs text-white text-right">
                                                {neo.orbital_data.orbit_class?.orbit_class_description}
                                            </span>
                                        </div>
                                        
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-white/60">Orbital Period</span>
                                            <span className="font-mono text-white">{neo.orbital_data.orbital_period} days</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default EventView
