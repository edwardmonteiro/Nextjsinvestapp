'use client';

import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ children, className = '' }) => {
  return (
    <div className="w-full overflow-auto">
      <table className={`w-full caption-bottom text-sm ${className}`}>
        {children}
      </table>
    </div>
  );
};

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ children, className = '' }) => {
  return (
    <thead className={`border-b bg-gray-50 ${className}`}>
      {children}
    </thead>
  );
};

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const TableBody: React.FC<TableBodyProps> = ({ children, className = '' }) => {
  return <tbody className={`divide-y ${className}`}>{children}</tbody>;
};

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ children, className = '' }) => {
  return <tr className={`border-b transition-colors hover:bg-gray-50 ${className}`}>{children}</tr>;
};

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({ children, className = '' }) => {
  return (
    <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 ${className}`}>
      {children}
    </th>
  );
};

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ children, className = '' }) => {
  return (
    <td className={`p-4 align-middle ${className}`}>
      {children}
    </td>
  );
};

interface TableFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const TableFooter: React.FC<TableFooterProps> = ({ children, className = '' }) => {
  return (
    <tfoot className={`border-t bg-gray-50 ${className}`}>
      {children}
    </tfoot>
  );
};
