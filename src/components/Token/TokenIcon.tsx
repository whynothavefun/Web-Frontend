import React from 'react';

interface TokenIconProps {
  symbol: string;
  size?: number;
  className?: string;
}

const TokenIcon: React.FC<TokenIconProps> = ({
  symbol,
  size = 40,
  className = '',
}) => {
  const initials = symbol.slice(0, 2).toUpperCase();

  const colors = [
    '#3B82F6', // blue
    '#10B981', // green
    '#F59E0B', // yellow
    '#EF4444', // red
    '#8B5CF6', // purple
    '#06B6D4', // cyan
    '#F97316', // orange
    '#EC4899', // pink
  ];

  const colorIndex = symbol.charCodeAt(0) % colors.length;
  const backgroundColor = colors[colorIndex];

  return (
    <div
      className={`flex items-center justify-center rounded-full font-bold text-white ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor,
        fontSize: `${Math.max(10, size * 0.35)}px`,
      }}
    >
      {initials}
    </div>
  );
};

export default TokenIcon;
