import React from 'react';
import { ChevronRight } from 'lucide-react';
export interface NavigationItemProps {
  icon?: React.ReactNode;
  label: string;
  collapsed?: boolean;
  indent?: number;
  onClick?: () => void;
  'data-id'?: string;
  className?: string;
}
export const NavigationItem = ({
  icon,
  label,
  collapsed = false,
  indent = 0,
  onClick,
  'data-id': dataId,
  className = ''
}: NavigationItemProps) => {
  return <div className={`flex items-center px-2 py-1.5 text-sm hover:bg-gray-100 cursor-pointer ${className}`} onClick={onClick} role="button" tabIndex={0} data-id={dataId} onKeyDown={e => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick?.();
    }
  }}>
      {icon}
      {!collapsed && <span className={`ml-2 truncate ${indent ? `pl-${indent * 3}` : ''}`}>
          {label}
        </span>}
      {collapsed && <ChevronRight className="ml-auto h-3 w-3" />}
    </div>;
};