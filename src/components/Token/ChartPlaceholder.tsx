import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChartPlaceholder: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-black">
          Price Chart
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
          <div className="text-center">
            <BarChart3 className="mx-auto mb-4 h-12 w-12 text-gray-400" />
            <p className="text-lg font-medium text-gray-500">
              Chart Coming Soon
            </p>
            <p className="text-sm text-gray-400">
              Price chart will be displayed here
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartPlaceholder;
