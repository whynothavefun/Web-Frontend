import React from 'react';
import { MessageCircle } from 'lucide-react';
import { UserMessage } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UserMessagesProps {
  messages: UserMessage[];
}

const UserMessages: React.FC<UserMessagesProps> = ({ messages }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-xl font-bold text-black">
          <MessageCircle className="h-5 w-5" />
          <span>Community Chat</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="max-h-96 space-y-4 overflow-y-auto">
          {messages.map(message => (
            <div
              key={message.id}
              className="flex space-x-3 rounded-lg bg-gray-50 p-3"
            >
              <img
                src={message.avatar}
                alt={message.username}
                className="h-10 w-10 flex-shrink-0 rounded-full"
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${message.username}`;
                }}
              />
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center space-x-2">
                  <span className="text-sm font-semibold text-black">
                    {message.username}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDate(message.date)}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div className="flex-1">
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
              <div className="h-3 w-1/2 rounded bg-gray-300"></div>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-gray-500">
            Chat input coming soon...
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserMessages;
