import React, { useState } from 'react';
import DayItinerary from "@/components/DayItinerary";
import { mockItinerary, Activity } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, MapPin } from "lucide-react";

import travelMap from "../assets/img/y2ztravelmap.png";

const Index = () => {
  const [itinerary, setItinerary] = useState<Activity[][]>(mockItinerary);

  const handleReorderActivities = (dayIndex: number, fromIndex: number, toIndex: number) => {
    setItinerary(prev => {
      const newItinerary = [...prev];
      const dayActivities = [...newItinerary[dayIndex]];
      
      // Remove the item from the original position
      const [reorderedItem] = dayActivities.splice(fromIndex, 1);
      
      // Insert it at the new position
      dayActivities.splice(toIndex, 0, reorderedItem);
      
      newItinerary[dayIndex] = dayActivities;
      return newItinerary;
    });
  };

  const addNewDay = () => {
    setItinerary(prev => [...prev, []]);
  };

  return (
    <div className="h-screen bg-gray-50 md:p-8 w-full overflow-hidden">
      <div className='rounded-3xl max-w-7xl mx-auto bg-white h-full shadow-md'>
          <div className='flex h-full'>
            <div className='flex-grow p-4 overflow-y-scroll scrollbar-hide scrollbar-none'>
                  <div className="text-2xl font-bold mb-6">
                      <span className="text-primary">Y2Z</span>
                      <span className="text-primary"> TRAVEL</span>
                  </div>

                  <div className="mb-4">
                      <h1 className="text-2xl font-bold text-gray-900 mb-2"> Itinerary</h1>
                      <span>Day</span>
                  </div> 

                  <div className="space-y-6">
                    {itinerary.map((dayActivities, dayIndex) => (
                      <DayItinerary
                        key={dayIndex}
                        day={dayIndex}
                        activities={dayActivities}
                        onReorderActivities={handleReorderActivities}
                      />
                    ))}
                  </div>

              {itinerary.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-12 w-12 text-purple-500" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">No itinerary yet</h2>
                  <p className="text-gray-600 mb-4">Start planning your trip by adding your first day</p>
                  <Button onClick={addNewDay} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Day
                  </Button>
                </div>
              )}               


            </div>

            <div className='hidden lg:block w-full max-w-[500px] h-full rounded-tr-3xl rounded-br-3xl overflow-hidden'>
                  <img src={travelMap} alt="travel map" className='w-full h-full' />
            </div>

          </div>
      </div>
    </div>
  );
};

export default Index;