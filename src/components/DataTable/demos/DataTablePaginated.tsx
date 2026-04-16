import { useState } from 'react';
import { DataTable } from '../src/DataTable';
import type { DataTableColumn } from '../types';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
}

const columns: DataTableColumn<Product>[] = [
  { id: 'id', header: 'ID' },
  { id: 'name', header: 'Product' },
  { id: 'category', header: 'Category' },
  { id: 'price', header: 'Price' },
  { id: 'stock', header: 'In Stock' },
];

// Generate sample data
const allData: Product[] = Array.from({ length: 73 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ['Electronics', 'Books', 'Clothing', 'Home'][i % 4],
  price: `$${(Math.random() * 200 + 10).toFixed(2)}`,
  stock: Math.floor(Math.random() * 500),
}));

export const DataTablePaginated = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const start = (page - 1) * pageSize;
  const pageData = allData.slice(start, start + pageSize);

  return (
    <DataTable
      columns={columns}
      data={pageData}
      getRowId={row => String(row.id)}
      pagination={{
        page,
        pageSize,
        totalItems: allData.length,
        onPageChange: setPage,
        onPageSizeChange: newSize => {
          setPageSize(newSize);
          setPage(1);
        },
      }}
    />
  );
};
