import { Star, MapPin, Trash2, Tally2, Pencil, Paperclip } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

interface ActivityCardProps {
  activity: Activity;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  isDragging?: boolean;
}

const ActivityCard = ({ activity, onEdit, onDelete, isDragging }: ActivityCardProps) => {
  return (
    <Card className={`p-4 border-none transition-all duration-200 hover:shadow-md ${isDragging ? 'opacity-50 rotate-2' : ''}`}>
      <div className="flex gap-3">
        <div className="flex items-center">
          <Tally2 className="h-5 w-5 rotate-90 text-gray-400 drag-handle cursor-grab hover:text-gray-600" />
        </div>
        
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <img src={activity.image} alt={activity.name} className="object-cover h-full w-full" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 truncate">{activity.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{activity.rating}</span>
                <span className="text-sm text-gray-500">({activity.reviewCount.toLocaleString()})</span>
              </div>
            </div>
            
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => onEdit?.(activity.id)}
              >
                <MapPin className="h-3 w-3 text-red-500 hover:text-red-700" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={() => onEdit?.(activity.id)}
              >
                <Paperclip className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-red-500 hover:text-red-700"
                onClick={() => onDelete?.(activity.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="p-2 bg-gray-50 rounded-md flex items-center gap-2 mt-2">
            <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{activity.description}</p>
            <Pencil size={16} className="flex-shrink-0 cursor-pointer" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;