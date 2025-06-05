import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import ActivityCard from "./ActivityCard";

interface Activity {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  location?: string;
  duration?: string;
}

interface DayItineraryProps {
  day: number;
  activities: Activity[];
  onReorderActivities: (dayIndex: number, fromIndex: number, toIndex: number) => void;
}

const DayItinerary = ({ day, activities, onReorderActivities }: DayItineraryProps) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, activityId: string, index: number) => {
    setDraggedItem(activityId);
    e.dataTransfer.setData('text/plain', JSON.stringify({ activityId, fromIndex: index, dayIndex: day }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    setDragOverIndex(null);
    setDraggedItem(null);

    try {
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      const { fromIndex, dayIndex } = data;
      
      if (dayIndex === day && fromIndex !== toIndex) {
        onReorderActivities(day, fromIndex, toIndex);
      }
    } catch (error) {
      console.error('Error parsing drag data:', error);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  return (
    <Card className="md:p-6 border-none">
      
      <div className="space-y-3 group">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            draggable
            onDragStart={(e) => handleDragStart(e, activity.id, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            className={`transition-all duration-200 ${
              dragOverIndex === index ? 'transform translate-y-1' : ''
            } ${
              draggedItem === activity.id ? 'opacity-50' : ''
            }`}
          >
            <ActivityCard
              activity={activity}
              isDragging={draggedItem === activity.id}
            />
          </div>
        ))}
        
        {activities.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No activities planned for this day</p>
            <p className="text-sm">Drag activities here to add them</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DayItinerary;